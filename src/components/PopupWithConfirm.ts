import Popup from './Popup';

class PopupWithConfirm extends Popup {
  private _form: HTMLFormElement;
  private _itemId: string = '';
  private _itemMarkup: HTMLElement | null = null;
  private _handleSubmitCallback: (id: string, markup: HTMLElement) => void;

  public constructor(
    popupSelector: string,
    callback: {
      handleSubmitCallback: (id: string, markup: HTMLElement) => void;
    }
  ) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form') as HTMLFormElement;
    this._handleSubmitCallback = callback.handleSubmitCallback;
  }

  private _handleSubmit(evt: Event): void {
    evt.preventDefault();

    if (this._itemId && this._itemMarkup) {
      this._handleSubmitCallback(this._itemId, this._itemMarkup);
    }
  }

  protected _setEventListeners(): void {
    super._setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit);
  }

  protected _removeEventListeners(): void {
    super._removeEventListeners();
    this._form.removeEventListener('submit', this._handleSubmit);
  }

  public set setItemId(id: string) {
    this._itemId = id;
  }

  public set setItemMarkup(markup: HTMLElement) {
    this._itemMarkup = markup;
  }

  public open = (): void => {
    super.open();
    this._setEventListeners();
  };

  public close = (): void => {
    super.close();
    this._removeEventListeners();
  };
}

export default PopupWithConfirm;
