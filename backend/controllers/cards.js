const Card = require('../models/card');
const BadRequestError = require('../errors/bad-request-err');
const NotFoundError = require('../errors/not-found-err');
const Forbidden = require('../errors/forbidden');

// returns all cards
module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

// creates a new card
module.exports.createCard = (req, res, next) => {
  if (!req.body.link || !req.body.name) {
    throw new BadRequestError('Invalid data passed to create card');
  }
  const { name, link, owner = req.user._id } = req.body;
  Card.create({ name, link, owner })
    .then((card) => {
      res.send({ data: card });
    })
    .catch((err) => {
      // Validation Error handling
      if (err.name === 'ValidationError') {
        return new BadRequestError('Invalid data passed to create card');
      }
      return next(err);
    });
};

// deletes a card by id
module.exports.deleteCardById = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('No card found with that id');
      }
      if (req.user._id === `${card.owner}`) {
        Card.findByIdAndRemove(req.params.cardId).then(
          res.send({ data: card }),
        );
      } else {
        // Validation Error handling
        throw new Forbidden('No card found with that id on your account');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Not valid id');
      }
      next(err);
    })
    .catch(next);
};

// like a card by id
module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('No card found with that id');
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Not valid id');
      }
      next(err);
    })
    .catch(next);
};

// unlike a card
module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('No card found with that id');
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Not valid id');
      }
      next(err);
    })
    .catch(next);
};
