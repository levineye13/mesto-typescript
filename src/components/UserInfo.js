export default class UserInfo {
	constructor({ profileAvatarSelector, profileTitleSelector, profileSubtitleSelector }) {
		this._avatar = document.querySelector(profileAvatarSelector);
    this._name = document.querySelector(profileTitleSelector);
		this._about = document.querySelector(profileSubtitleSelector);
		this._myId = null;
  }
  /**
	 * Метод получения объекта информации о пользователе
	 * 
	 * @return {Object} - информация о пользователе
   */
  getUserInfo() {
		return {
			id: this._myId,
			avatar: this._avatar.src,
      name: this._name.textContent,
      about: this._about.textContent,
    };
	}
	
  /**
   * Метод устанавливает информацию о пользователе из введенных в форму значений
   *
   * @param  {Object} data - объект с информацией о пользователе
   */
	setUserInfo(data) {
		this._myId = data._id;
		this._avatar.src = data.avatar;
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }
}
