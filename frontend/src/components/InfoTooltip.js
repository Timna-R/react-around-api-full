import React from "react";

function InfoTooltip(props) {
  const { isOpen, isSuccess, onClose } = props;
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (isSuccess) {
      setMessage("Success! You have now been registered.");
    } else {
      setMessage("Oops, something went wrong! Please try again.");
    }
    return message;
  }, [isSuccess, message]);

  return (
    <div
      className={`popup popup_type_info-tooltip ${isOpen ? "popup_open" : ""}`}
    >
      <div
        className={
          "popup__container popup__container_theme_edit popup__container_theme_success "
        }
      >
        <button
          onClick={onClose}
          type="button"
          className={`popup__close-button ${"popup__close-button_login-form"}`}
          aria-label="close button"
        ></button>
        <div
          className={`login__image ${
            isSuccess ? "login__image_success" : "login__image_fail"
          }`}
        />
        <h3 className={"login__title login__title_success"}>{message}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
