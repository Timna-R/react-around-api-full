const usersRouter = require('express').Router();
const {
  getUserById,
  login,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');
const { validate, validateObjId } = require('../middlewares/validation');
const auth = require('../middlewares/auth');

usersRouter.post('/signin', validate, validateObjId, login);
usersRouter.post('/signup', validate, validateObjId, createUser);
usersRouter.get('/users/me', auth, getUserById);
usersRouter.patch('/users/me', auth, validateObjId, updateUserProfile);
usersRouter.patch('/users/me/avatar', auth, validateObjId, updateUserAvatar);

module.exports = usersRouter;
