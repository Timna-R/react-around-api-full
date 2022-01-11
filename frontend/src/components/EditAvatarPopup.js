import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar, buttonText } = props;
  const avatarRef = React.useRef({});
  const resetInputField = () => {
    avatarRef.current.value = "";
  };

  React.useEffect(() => {
    resetInputField();
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile-picture"
      title="Change profile picture"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <input
        id="input-profile-picture"
        type="url"
        className="popup__input popup__input_type_profile-picture"
        ref={avatarRef}
        name="avatar"
        placeholder="Profile picture link"
        required
      />
      <span id="input-profile-picture-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
