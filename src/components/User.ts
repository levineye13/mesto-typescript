import { IUser } from '../utils/interfaces';

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

  public set setAvatar(link: string) {
    this._avatar.src = link;
  }

  public set setName(name: string) {
    this._name.textContent = name;
  }

  public set setAbout(about: string) {
    this._about.textContent = about;
  }

  public get getId(): string {
    return this._id;
  }

  public set setUser(data: IUser) {
    this._id = data._id;
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }

  public get getUser(): IUser {
    return {
      _id: this._id,
      name: this._name.textContent || '',
      about: this._about.textContent || '',
      avatar: this._avatar.src || '',
    };
  }
}

export default User;
