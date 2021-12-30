import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup(props) {
  const { isOpen, onClose, onCardDelete, card } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name="delete-card"
      title="Are you sure?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={"Yes"}
    />
  );
}

export default DeleteCardPopup;