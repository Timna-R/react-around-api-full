import React from "react";
import { AppContext } from "../contexts/AppContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const { currentUser } = React.useContext(AppContext);
  const { isOpen, onClose, onUpdateUser, buttonText } = props;
  const [name, setName] = React.useState("");
  const [about, setAbout] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeAbout(e) {
    setAbout(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: about,
    });
  }

  React.useEffect(() => {
    console.log(currentUser)
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="edit"
      title="Edit profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <input
        id="input-name"
        type="text"
        className="popup__input popup__input_type_name"
        value={name || ""}
        onChange={handleChangeName}
        name="name"
        placeholder="Name"
        minLength="2"
        maxLength="40"
      />
      <span id="input-name-error"></span>
      <input
        id="input-about"
        type="text"
        className="popup__input popup__input_type_about"
        value={about || ""}
        onChange={handleChangeAbout}
        name="about"
        placeholder="about"
        minLength="2"
        maxLength="200"
      />
      <span id="input-about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
