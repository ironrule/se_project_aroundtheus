export default class UserInfo {
  constructor(userData) {
    this._profileName = document.querySelector(userData.name);
    this._profileDescription = document.querySelector(userData.description);
    this._profileAvatar = document.querySelector(userData.avatar);
  }
  getUserInfo() {
    return {
      title: this._profileName.textContent,
      description: this._profileDescription.textContent,
    };
  }
  setUserInfo({ name, description }) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }
  setUserAvatar(avatar) {
    this._profileAvatar.src = avatar;
  }
}
