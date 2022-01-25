const usersRouter = require('express').Router();
const {
  getUserById,
  login,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');
const {
  validateLogin, validateObjId, validateName, validateAvatar,
} = require('../middlewares/validation');
const auth = require('../middlewares/auth');

usersRouter.post('/signin', validateLogin, validateObjId, login);
usersRouter.post('/signup', validateLogin, validateObjId, createUser);
usersRouter.get('/users/me', auth, getUserById);
usersRouter.patch('/users/me', auth, validateName, validateObjId, updateUserProfile);
usersRouter.patch('/users/me/avatar', auth, validateAvatar, validateObjId, updateUserAvatar);

module.exports = usersRouter;
