const bcrypt = require('bcryptjs'); // sprint 15
const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;
const User = require('../models/user');
const BadRequestError = require('../errors/bad-request-err');
const Conflict = require('../errors/conflict');
const NotFoundError = require('../errors/not-found-err');

// Login and authenticates
module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        // 'some-secret-key',
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', // Secret Keys
        { expiresIn: '7d' }, // This token will expire a week after creation
      );
      // Return the token
      res.send({ token });
    })
    .catch((err) => {
      // authentication error
      if (err.name === 'Error') {
        return res.status(401).send({ message: err.message });
      }
      next(err);
    });
};

// Returns a user by _id
module.exports.getUserById = (req, res, next) => {
  User.findById(req.user._id)
    // Error handling by custom function
    .orFail(() => {
      throw new NotFoundError('No user with matching ID found');
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return new BadRequestError('Not valid id');
      }
      next(err);
    });
};

// Creates a new user
module.exports.createUser = (req, res, next) => {
  const {
    email, password, name, about, avatar,
  } = req.body;
  // Hashing the password
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash, // Adding the hash to the database
      name,
      about,
      avatar,
    }))

    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return new BadRequestError('Invalid data passed to create user');
      }
      if (err.name === 'MongoServerError') {
        return new Conflict('An account with this email already exists');
      }
      next(err);
    });
};

// Update profile
module.exports.updateUserProfile = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return new BadRequestError('Invalid data validation');
      }
      next(err);
    });
};

// Update avatar
module.exports.updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return new BadRequestError('Invalid data validation');
      }
      next(err);
    });
};