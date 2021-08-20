import Popup from './Popup';
import { IFormInput } from '../utils/interfaces';

class PopupWithForm extends Popup {
  private _form: HTMLFormElement;
  private _handleSubmit: (value: IFormInput) => void;

  public constructor(popupSelector: string, handleSubmit: () => void) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form') as HTMLFormElement;
    this._handleSubmit = handleSubmit;
  }

  private _getInputValues(): IFormInput {
    const inputList: NodeList = this._form.querySelectorAll('.popup__input');

    return Array.from(inputList).reduce((acc, nodeElement) => {
      const input: HTMLInputElement = nodeElement as HTMLInputElement;
      return { ...acc, [input.name]: input.value };
    }, {});
  }

  protected _setEventListeners(): void {
    super._setEventListeners();
    this._form.addEventListener('submit', (evt): void => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  public open(): void {
    super.open();
    this._setEventListeners();
  }

  public close(): void {
    super.close();
    this._form.reset();
    this._removeEventListeners();
  }
}

export default PopupWithForm;
