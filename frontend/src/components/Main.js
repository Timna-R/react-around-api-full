import React from "react";
import { AppContext } from "../contexts/AppContext";
import Card from "./Card";

function Main(props) {
  const { currentUser } = React.useContext(AppContext);

  const {
    onEditAvatarClick,
    onEditProfileClick,
    onAddPlaceClick,
    onCardClick: handleCardClick,
    onCardLike: handleCardLike,
    onCardDelete: handleDeleteButtonClick,
    cards,
  } = props;

  return (
    <main className="content">
      <section className="profile">
        <div onClick={onEditAvatarClick} className="profile__image">
          <img
            className="profile__profile-picture"
            src={currentUser.avatar}
            alt="Avatar"
          />
          <div className="profile__edit-image"></div>
        </div>
        <div className="profile__info">
          <div>
            <h1 className="profile__name">{currentUser.name}</h1>{" "}
            <p className="profile__about">{currentUser.about}</p>{" "}
          </div>
          <button
            onClick={onEditProfileClick}
            type="button"
            className="profile__edit"
            aria-label="edit profile button"
          ></button>
        </div>
        <button
          onClick={onAddPlaceClick}
          type="button"
          className="profile__add-button"
          aria-label="edit image button"
        ></button>
      </section>
      <section className="elements">
        <ul className="cards">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteButtonClick}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
