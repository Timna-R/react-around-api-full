const BASE_URL = "https://api.timna-around.students.nomoreparties.sbs";
//const BASE_URL = "http://localhost:3000"
//const BASE_URL = "https://timna-around.students.nomoreparties.sbs"

const customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.status)
  );

export const register = ({ email, password }) => {
  return customFetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "include", //Security on client side
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res;
  });
};

export const authorize = ({ email, password }) => {
  return customFetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "include", // Security on client side
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      return data;
    }
  });
};

export const getContent = (token) => {
  return customFetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      credentials: "include", // Security on client side
    },
  }).then((data) => data);
};
