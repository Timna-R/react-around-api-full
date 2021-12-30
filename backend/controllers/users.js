const bcrypt = require('bcryptjs'); // sprint 15
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const ERROR_CODE400 = 400;
const ERROR_CODE500 = 500;

// login and authenticates
module.exports.login = (req, res) => {
  // sprint 15
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        'some-secret-key',
        { expiresIn: '7d' }, // this token will expire a week after creation
      );
      // return the token
      res.send({ token });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};

// returns all users
module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(ERROR_CODE500).send({ message: err.message }));
};

// returns a user by _id
module.exports.getUserById = (req, res) => {
  User.findById(req.user._id)
    // Error handling by custom function
    .orFail(() => {
      const error = new Error('Error: No user found with that id');
      error.statusCode = 404;
      error.name = 'DocumentNotFoundError';
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(err.statusCode).send(err.message);
        return;
      }
      if (err.name === 'CastError') {
        res.status(ERROR_CODE400).send('Error: Not valid id');
        return;
      }
      res.status(ERROR_CODE500).send({ message: err.message });
    });
};

// creates a new user
module.exports.createUser = (req, res) => {
  const {
    email, password, name, about, avatar,
  } = req.body; // sprint15
  // hashing the password
  bcrypt
    .hash(password, 10) // sprint15
    .then((hash) => User.create({
      email,
      password: hash, // adding the hash to the database
      name,
      about,
      avatar,
    }))

    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res
          .status(ERROR_CODE400)
          .send('Error: invalid data passed to create user ');
        return;
      }
      res.status(ERROR_CODE500).send({ message: err.message });
    });
};

// update profile
module.exports.updateUserProfile = (req, res) => {
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
        res.status(ERROR_CODE400).send('Error: Data validation failed');
        return;
      }
      res.status(ERROR_CODE500).send({ message: err.message });
    });
};

// update avatar
module.exports.updateUserAvatar = (req, res) => {
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
        res.status(ERROR_CODE400).send('Error: Data validation failed');
        return;
      }
      res.status(ERROR_CODE500).send({ message: err.message });
    });
};
