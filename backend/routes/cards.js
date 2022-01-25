const cardsRouter = require('express').Router();
const {
  getCards,
  createCard,
  deleteCardById,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const { validateObjId, validateCard } = require('../middlewares/validation');
const auth = require('../middlewares/auth');

cardsRouter.get('/cards', auth, getCards);
cardsRouter.post('/cards', auth, validateObjId, validateCard, createCard);
cardsRouter.delete('/cards/:cardId', auth, validateObjId, deleteCardById);
cardsRouter.put('/cards/:cardId/likes', auth, validateObjId, likeCard);
cardsRouter.delete('/cards/:cardId/likes', auth, validateObjId, dislikeCard);

module.exports = cardsRouter;
