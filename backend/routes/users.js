const usersRouter = require('express').Router();
const {
  getUserById,
  login,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');
const validate = require('../middlewares/validation');
const auth = require('../middlewares/auth');

usersRouter.post('/signin', validate, login); // sprint 15
usersRouter.post('/signup', validate, createUser); // sprint 15
usersRouter.get('/users/me', auth, getUserById);
usersRouter.patch('/users/me', auth, updateUserProfile);
usersRouter.patch('/users/me/avatar', auth, updateUserAvatar);

module.exports = usersRouter;
