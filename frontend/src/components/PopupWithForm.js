function PopupWithForm(props) {
  const { name, isOpen, onClose, title, children, onSubmit, buttonText } =
    props;
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__container popup__container_theme_edit">
        <button
          onClick={onClose}
          type="button"
          className="popup__close-button"
          aria-label="close button"
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form
          className="popup__form popup__form_type_edit"
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button
            type="submit"
            className="popup__button"
            aria-label="submit button"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
