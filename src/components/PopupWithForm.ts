import Popup from './Popup';
import { IFormInput } from '../utils/interfaces';

class PopupWithForm extends Popup {
  private _form: HTMLFormElement;
  private _handleSubmitCallback: (value: IFormInput) => void;

  public constructor(
    popupSelector: string,
    callback: {
      handleSubmitCallback: (value: IFormInput) => void;
    }
  ) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form') as HTMLFormElement;
    this._handleSubmitCallback = callback.handleSubmitCallback;
  }

  private _getInputValues(): IFormInput {
    const inputList: NodeList = this._form.querySelectorAll('.popup__input');

    return Array.from(inputList).reduce((acc, nodeElement) => {
      const input: HTMLInputElement = nodeElement as HTMLInputElement;
      return { ...acc, [input.name]: input.value };
    }, {});
  }

  private _handleSubmit = (evt: Event): void => {
    evt.preventDefault();
    this._handleSubmitCallback(this._getInputValues());
  };

  protected _setEventListeners(): void {
    super._setEventListeners();

    this._form.addEventListener('submit', this._handleSubmit);
  }

  protected _removeEventListeners(): void {
    super._removeEventListeners();

    this._form.removeEventListener('submit', this._handleSubmit);
  }

  public open = (): void => {
    super.open();
    this._setEventListeners();
  };

  public close = (): void => {
    super.close();
    this._form.reset();
    this._removeEventListeners();
  };
}

export default PopupWithForm;
