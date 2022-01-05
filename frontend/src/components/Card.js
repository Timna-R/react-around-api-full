import React from "react";
import { AppContext } from "../contexts/AppContext";

function Card(props) {
  const { currentUser } = React.useContext(AppContext);

  const { card, onCardClick, onCardLike, onCardDelete, isOpen } = props;
  console.log(`444${card.owner._id} ${currentUser.id} `)// sprint 15
  const isOwn = card.owner._id === currentUser.id;
  const cardDeleteButtonClassName = isOwn
    ? "cards__delete-button"
    : "cards__delete-button_hidden";
  const isLiked = card.likes.some((someId) => someId._id === currentUser.id);
  const cardLikeButtonClassName = `cards__heart-like ${
    isLiked ? "cards__heart-like_full" : ""
  }`;

  return (
    <li className="cards__item">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={() => {
          onCardDelete(card);
        }}
      ></button>
      <div
        className="cards__image"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={() => {
          onCardClick(card);
        }}
      ></div>
      <div className="cards__about">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__likes">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={() => {
              onCardLike(card);
            }}
          ></button>
          <span className="cards__heart-like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
