import LoginForm from "./LoginForm";

function Login(props) {
  const { values, handleLogin, openInfoToolTip, setIsSuccess } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      const error = new Error("One or more of the fields were not provided");
      error.statusCode = 400;
      setIsSuccess(false);
      openInfoToolTip();
      return error;
    }
    handleLogin();
  };

  return (
    <LoginForm
      title={"Log in"}
      onSubmit={handleSubmit}
      buttonText={"Log in"}
      linkTo={"/signup"}
      paragraphLoggin="Not a member yet?"
      paragraphLink="Sign up here"
    />
  );
}

export default Login;
