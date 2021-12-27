const Card = require('../models/card');

const ERROR_CODE400 = 400;
const ERROR_CODE500 = 500;

// returns all cards
module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(ERROR_CODE500).send({ message: err.message }));
};

// creates a new card
module.exports.createCard = (req, res) => {
  const { name, link, owner = req.user._id } = req.body;

  Card.create({ name, link, owner })
    .then((card) => {
      res.send({ data: card });
    })
    .catch((err) => {
      // Validation Error handling
      if (err.name === 'ValidationError') {
        res
          .status(ERROR_CODE400)
          .send('Error: invalid data passed to create card ');
        return;
      }
      res.status(ERROR_CODE500).send({ message: err.message });
    });
};

// deletes a card by id
module.exports.deleteCardById = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    // Error handling by custom function
    .orFail(() => {
      const error = new Error('Error: No card found with that id');
      error.statusCode = 404;
      error.name = 'DocumentNotFoundError';
      throw error;
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      // Validation Error handling
      if (err.name === 'DocumentNotFoundError') {
        res.status(err.statusCode).send(err.message);
        return;
      } if (err.name === 'CastError') {
        res.status(ERROR_CODE400).send('Error: Not valid id');
        return;
      }
      res.status(ERROR_CODE500).send({ message: err.message });
    });
};

// like a card by id
module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      const error = new Error('Error: No card found with that id');
      error.statusCode = 404;
      error.name = 'DocumentNotFoundError';
      throw error;
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(err.statusCode).send(err.message);
        return;
      } if (err.name === 'CastError') {
        res.status(ERROR_CODE400).send('Error: Not valid id');
        return;
      }
      res.status(ERROR_CODE500).send({ message: err.message });
    });
};

// unlike a card
module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      const error = new Error('Error: No card found with that id');
      error.statusCode = 404;
      error.name = 'DocumentNotFoundError';
      throw error;
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(err.statusCode).send(err.message);
        return;
      } if (err.name === 'CastError') {
        res.status(ERROR_CODE400).send('Error: Not valid id');
        return;
      }
      res.status(ERROR_CODE500).send({ message: err.message });
    });
};
