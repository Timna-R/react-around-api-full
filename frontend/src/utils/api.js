class Api {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
    // this._headers = headers;
  }

  customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );

  getInitialCards(token) {
    return this.customFetch(`${this._baseUrl}/cards`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`},
    });
  }

  getUserInfo(token) {
    return this.customFetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`},
    });
  
  }

  setUserInfo(date, token) {
    return this.customFetch(`${this._baseUrl}/users/me`, {
      //headers: this._headers,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`},
      method: "PATCH",
      body: JSON.stringify({
        name: date.name,
        about: date.about,
      }),
    });
  }

  setProfilePicture(date, token) {
    return this.customFetch(`${this._baseUrl}/users/me/avatar`, {
      //headers: this._headers,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`},
      method: "PATCH",
      body: JSON.stringify({ avatar: date.avatar }),
    });
  }

  creatCard(data, token) {
    return this.customFetch(`${this._baseUrl}/cards`, {
      //headers: this._headers,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`},
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId, token) {
    return this.customFetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`},
    });
  }

  likeCard(cardId, token) {
    return this.customFetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`},
    });
  }

  disLikeCard(cardId, token) {
    return this.customFetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`},
    });
  }
}

const api = new Api({
  //baseUrl: "https://around.nomoreparties.co/v1/group-12",
  baseUrl: "http://localhost:3000", //sprint 15
  // headers: {
  //   //authorization: "5a9a2dff-fd06-428e-8b89-0b14ac9f3305",
  //   "Accept": "application/json",
  //   "Content-Type": "application/json",
  //   "authorization": `Bearer ${localStorage.getItem("jwt")}` //sprint 15
  // },
});

export default api;