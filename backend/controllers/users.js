const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;
const User = require('../models/user');
const BadRequestError = require('../errors/bad-request-err');
const Conflict = require('../errors/conflict');
const NotFoundError = require('../errors/not-found-err');
const Unauthorized = require('../errors/unauthorized');

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
        next(new Unauthorized(err.message)); // Fixed
      }
      return next(err);
    });
};

// Returns a user by _id
module.exports.getUserById = (req, res, next) => {
  User.findById(req.user._id)
    // Error handling by custom function
    .orFail(() => {
      throw new NotFoundError('No user with matching ID found');
    })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('No user with matching ID found');
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Not valid id');
      }
      next(err);
    })
    .catch(next);
};

// Creates a new user
module.exports.createUser = (req, res, next) => {
  const {
    email, password, name, about, avatar,
  } = req.body;
  return User.findOne({ email })
    .then((user) => { // Fixed
      if (user) { // If this email exist
        throw new Conflict('An account with this email already exists');
      }
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
        .then((data) => res.send({
          data: {
            email: data.email,
            name: data.name,
            about: data.about,
            avatar: data.avatar,
            _id: data._id,
            __v: data.__v,
          },
        }))
        .catch((err) => {
          if (err.name === 'ValidationError') {
            return new BadRequestError('Invalid data passed to create user');
          }
          if (err.code === 11000) {
            return new Conflict('An account with this email already exists');
          }
          return next(err);
        });
    })
    .catch((err) => next(err));
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
      return next(err);
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
      return next(err);
    });
};
