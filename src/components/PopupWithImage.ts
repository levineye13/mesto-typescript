import Popup from './Popup.js';

class PopupWithImage extends Popup {
  private _image: HTMLImageElement;
  private _title: HTMLHeadingElement;

  public constructor(popupSelector: string) {
    super(popupSelector);
    this._image = document.querySelector(
      '.popup__card-img'
    ) as HTMLImageElement;
    this._title = document.querySelector(
      '.popup__title-img'
    ) as HTMLHeadingElement;
  }

  public open(title?: string, link?: string): void {
    this._title.textContent = title || '';
    this._image.src = link || '';
    this._image.alt = title || '';

    super.open();
  }
}

export default PopupWithImage;
