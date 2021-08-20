import { IUser } from '../utils/types';

class User {
  private _id: string = '';
  private _name: HTMLHeadingElement;
  private _about: HTMLParagraphElement;
  private _avatar: HTMLImageElement;

  public constructor(selectors: {
    titleSelector: string;
    subtitleSelector: string;
    avatarSelector: string;
  }) {
    this._name = document.querySelector(
      selectors.titleSelector
    ) as HTMLHeadingElement;
    this._about = document.querySelector(
      selectors.subtitleSelector
    ) as HTMLParagraphElement;
    this._avatar = document.querySelector(
      selectors.avatarSelector
    ) as HTMLImageElement;
  }

  public set setUser(data: IUser) {
    this._id = data.id;
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }

  public get getUser(): IUser {
    return {
      id: this._id,
      name: this._name.textContent as string,
      about: this._about.textContent as string,
      avatar: this._avatar.src as string,
    };
  }
}

export default User;
