export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _request(url, options) {
    return fetch(this._baseUrl + url, options).then(this._checkResponse);
  }

  initialSite([getUserInfo, getCardInfo]) {
    Promise.all([getUserInfo, getCardInfo]);
  }

  getUserInfo() {
    return this._request("/users/me", {
      method: "GET",
      headers: this._headers,
    });
  }

  setUserInfo(name, about) {
    return this._request("/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    });
  }

  setAvatar(avatarUrl) {
    return this._request("/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatarUrl }),
    });
  }

  getInitialCards() {
    return this._request("/cards", {
      method: "GET",
      headers: this._headers,
    });
  }

  addCard(cardData) {
    return this._request("/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name: cardData.name, link: cardData.link }),
    });
  }

  deleteCard(cardID) {
    return this._request(`/cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  addLike(cardID) {
    return this._request(`/cards/${cardID}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  deleteLike(cardID) {
    return this._request(`/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}
