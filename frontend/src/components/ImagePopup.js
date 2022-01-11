function ImagePopup(props) {
  const {name, card} = props;
    return (
      <div
        className={`popup popup_type_${name} ${
          props.isOpen ? "popup_open" : ""
        }`}
      >
        <div className="popup__container popup__container_theme_image">
          <button
            onClick={props.onClose}
            type="button"
            className="popup__close-button"
            aria-label="close button"
          ></button>
          <figure>
            <img
              className="popup__image"
              src={card.link}
              alt={card.name}
            />
            <figcaption className="popup__image-title">
              {card.name}
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
  
  export default ImagePopup;
  