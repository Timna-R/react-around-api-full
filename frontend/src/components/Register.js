import React from "react";
import LoginForm from "./LoginForm";

function Register(props) {
  const { values, handleSignUp, openInfoToolTip, setIsSuccess } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      const error = new Error("One of the fields was filled in incorrectly");
      error.statusCode = 400;
      setIsSuccess(false);
      openInfoToolTip();
      return error;
    }
    handleSignUp();
  };

  return (
    <LoginForm
      title={"Sign up"}
      onSubmit={handleSubmit}
      buttonText={"Sign up"}
      linkTo={"/signin"}
      paragraphLoggin="Already a member?"
      paragraphLink="Log in here!"
    />
  );
}

export default Register;
