class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  customFetch = (url, headers) =>
    fetch(url, headers).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );

  getInitialCards(token) {
    return this.customFetch(`${this._baseUrl}/cards`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    });
  }

  getUserInfo(token) {
    return this.customFetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    });
  }

  setUserInfo(date, token) {
    return this.customFetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        name: date.name,
        about: date.about,
      }),
    });
  }

  setProfilePicture(date, token) {
    return this.customFetch(`${this._baseUrl}/users/me/avatar`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({ avatar: date.avatar }),
    });
  }

  creatCard(data, token) {
    return this.customFetch(`${this._baseUrl}/cards`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId, token) {
    return this.customFetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
  }

  likeCard(cardId, token) {
    return this.customFetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
      method: "PUT",
    });
  }

  disLikeCard(cardId, token) {
    return this.customFetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
  }
}

const api = new Api({
  //baseUrl: "http://localhost:3000",
  baseUrl: "https://api.timna-around.students.nomoreparties.sbs",
  //baseUrl: "https://timna-around.students.nomoreparties.sbs"
});

export default api;
