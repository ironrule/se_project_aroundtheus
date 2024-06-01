export default class UserInfo {
  constructor(userData) {
    this._profileName = document.querySelector(userData.name);
    this._profileDescription = document.querySelector(userData.description);
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent,
    };
  }
  setUserInfo({ name, description }) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }
}
