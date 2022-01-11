import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const { email, onLogoutClick } = props;

  const location = useLocation();

  return (
    <header className="header">
      <div className="logo" />
      <div className="header__login">
        {location.pathname === "/users/me" && (
          <>
            <p className="header__paragraph">{email}</p>
            <Link to="/signin">
              <p className="header__link header__link_logout" onClick={onLogoutClick}>Log out</p>
            </Link>
          </>
        )}
        {location.pathname === "/signin" && (
          <Link to="/signup">
            <p className="header__link header__paragraph">Sign Up</p>
          </Link>
        )}
        {location.pathname === "/signup" && (
          <Link to="/signin">
            <p className="header__link header__paragraph">Log In</p>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
