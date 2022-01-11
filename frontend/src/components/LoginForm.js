import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

function LoginForm(props) {
  const { values, handleChange } = React.useContext(AppContext);
  const {
    title,
    onSubmit,
    buttonText,
    linkTo,
    paragraphLoggin,
    paragraphLink,
  } = props;

  return (
    <div className="login">
      <h3 className="login__title">{title}</h3>
      <form onSubmit={onSubmit} className="login__form">
        <input
          id="input-login-email"
          className="login__input"
          required
          name="email"
          placeholder="Email"
          type="text"
          value={values.email || ""}
          onChange={handleChange}
        />
        <input
          id="input-login-password"
          className="login__input"
          required
          name="password"
          placeholder="Password"
          type="password"
          value={values.password || ""}
          onChange={handleChange}
        />
        <button type="submit" className="login__button">
          {buttonText}
        </button>
      </form>

      <div className="login__signup">
        <p>{paragraphLoggin}</p>
        <Link to={linkTo}>
          <p className="login__signup_link">{paragraphLink}</p>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
