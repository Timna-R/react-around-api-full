import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlaceSubmit, buttonText } = props;
  const [titelCard, setTitelCard] = React.useState("");
  const [linkCard, setLinkCard] = React.useState("");
  const resetInputField = () => {
    setTitelCard("");
    setLinkCard("");
  };

  React.useEffect(() => {
    resetInputField();
  }, [isOpen]);

  function handleChangeTitle(e) {
    setTitelCard(e.target.value);
  }
  function handleChangeLink(e) {
    setLinkCard(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      name: titelCard,
      link: linkCard,
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="New place"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <input
        id="input-card-title"
        type="text"
        className="popup__input popup__input_type_card-title"
        value={titelCard}
        onChange={handleChangeTitle}
        name="name"
        placeholder="Title"
        minLength="1"
        maxLength="30"
        required
      />
      <span id="input-card-title-error"></span>
      <input
        id="input-image"
        type="url"
        className="popup__input popup__input_type_image"
        value={linkCard}
        onChange={handleChangeLink}
        name="link"
        placeholder="Image link"
        required
      />
      <span id="input-image-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
