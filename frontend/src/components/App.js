import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import * as auth from "../utils/auth";
import api from "../utils/api";
import Header from "./Header";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import ImagePopup from "./ImagePopup";
import { AppContext } from "../contexts/AppContext";

function App() {
  const history = useHistory();
  //User info login and registration
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  // Is a user logged in
  const [loggedIn, setLoggedIn] = React.useState(false);
  // Popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isDeleteCardPopup, setIsDeleteCardPopup] = React.useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = React.useState(false);
  // Loging success popup
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] =
    React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  // Cards details
  const [cards, setCards] = React.useState([]);
  const [card, setCard] = React.useState([]);
  // for .finally
  const [loadingDataSave, setLoadingDataSave] = React.useState("Save");
  const [loadingDataCreate, setLoadingDataCreate] = React.useState("Create");
  // User details
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    description: "",
    avatar:
      "https://i.imagesup.co/images2/38c8c6871241795530bae71a06c75ae7e1908765.jpg",
    _id: "",
  });
  // Get Initial Cards from API
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);
  // Get Initial User Info from API
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser({
          name: data.name,
          description: data.about,
          avatar: data.avatar,
          id: data._id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // Close popup By Escape
  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  // Token check, user is logged in automatically
  React.useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = () => {
    if (!localStorage.getItem("token")) {
      const error = new Error(
        "Token not provided or provided in the wrong format"
      );
      error.statusCode = 400;
      console.log(`Error: ${error.statusCode}; ${error.message}`);
    } else {
      const jwt = localStorage.getItem("token");
      auth
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setValues({ email: res.data.email });
            setLoggedIn(true);
            history.push("/users/me");
          }
        })
        .catch((err) => {
          const error = new Error("The provided token is invalid");
          error.statusCode = 401;
          console.log(`Error: ${error.statusCode}; ${error.message}`);
        });
    }
  };

  const handleChangeRegister = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // Confirm the user login
  function handleLogin() {
    auth
      .authorize(values)
      .then((data) => {
        if (!data) {
          const error = new Error(
            "The user with the specified email not found"
          );
          error.statusCode = 401;
          throw error;
        } else if (data.token) {
          setLoggedIn(true);
          history.push("/users/me");
          return;
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        openInfoToolTip();
        console.log(err);
      });
  }
  // User registration
  function handleSignUp() {
    auth
      .register(values)
      .then((res) => {
        if (!res) {
          const error = new Error(
            "The user with the specified email not found"
          );
          error.statusCode = 401;
          throw error;
        } else {
          setIsSuccess(true);
          openInfoToolTip();
          history.push("/signin");
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        openInfoToolTip();
        console.log(err);
      });
  }
  // User logout
  function handleLogout() {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      setValues({ email: "", password: "" });
      setIsSuccess(false);
      setLoggedIn(false);
    }
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleDeleteButtonClick(card) {
    setIsDeleteCardPopup(true);
    setCard(card);
  }
  function handleCardClick(newSelectedCard) {
    setSelectedCard(newSelectedCard);
    setIsImageModalOpen(true);
  }
  function openInfoToolTip() {
    setInfoTooltipPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImageModalOpen(false);
    setIsDeleteCardPopup(false);
    setInfoTooltipPopupOpen(false);
  }
  function handleUpdateUser(data) {
    setLoadingDataSave("Saving...");
    api
      .setUserInfo(data)
      .then((res) => {
        setCurrentUser({
          name: data.name,
          description: data.about,
          avatar: res.avatar,
          id: res._id,
        });
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadingDataSave("Save");
      });
  }
  function handleUpdateAvatar(data) {
    setLoadingDataSave("Saving...");
    api
      .setProfilePicture(data)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          description: res.about,
          avatar: data.avatar,
          id: res._id,
        });
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadingDataSave("Save");
      });
  }
  function handleAddPlaceSubmit(cardData) {
    setLoadingDataCreate("Creating...");
    api
      .creatCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadingDataCreate("Create");
      });
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((someId) => someId._id === currentUser.id);
    if (!isLiked) {
      api
        .likeCard(card._id)
        .then((selectedCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? selectedCard : c))
          );
        })
        .catch((err) => console.log(err));
    } else {
      api
        .disLikeCard(card._id)
        .then((selectedCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? selectedCard : c))
          );
        })
        .catch((err) => console.log(err));
    }
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => card._id !== c._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <AppContext.Provider
        value={{ currentUser, values, handleChange: handleChangeRegister }}
      >
        <div className="page">
          <Header email={values.email} onLogoutClick={handleLogout} />
          <Switch>
            <Route path="/signin">
              <Login
                values={values}
                handleLogin={handleLogin}
                openInfoToolTip={openInfoToolTip}
                setIsSuccess={setIsSuccess}
              />
            </Route>
            <Route path="/signup">
              <Register
                values={values}
                handleSignUp={handleSignUp}
                openInfoToolTip={openInfoToolTip}
                setIsSuccess={setIsSuccess}
              />
            </Route>
            <ProtectedRoute
              path="/"
              loggedIn={loggedIn}
              component={Main}
              onEditProfileClick={handleEditProfileClick}
              onEditAvatarClick={handleEditAvatarClick}
              onAddPlaceClick={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteButtonClick}
              cards={cards}
            />
          </Switch>
          <Footer />
        </div>
        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          isSuccess={isSuccess}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={loadingDataSave}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          buttonText={loadingDataCreate}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonText={loadingDataSave}
        />
        <DeleteCardPopup
          isOpen={isDeleteCardPopup}
          onClose={closeAllPopups}
          onCardDelete={handleCardDelete}
          card={card}
        />
        <ImagePopup
          name="image"
          card={selectedCard}
          isOpen={isImageModalOpen}
          onClose={closeAllPopups}
        ></ImagePopup>
      </AppContext.Provider>
    </div>
  );
}

export default App;
