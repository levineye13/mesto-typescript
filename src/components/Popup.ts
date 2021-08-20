class Popup {
  protected _popup: HTMLElement;
  private _popupOpened: string = 'popup_opened';

  protected constructor(selector: string) {
    this._popup = document.querySelector(selector) as HTMLElement;
  }

  protected open(): void {
    this._popup.classList.add(this._popupOpened);
  }

  protected close(): void {
    this._popup.classList.remove(this._popupOpened);
  }

  protected _setEventListeners(): void {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleButtonClose);
    this._popup.addEventListener('click', this._handleScreenClickClose);
  }

  protected _removeEventListeners(): void {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleButtonClose);
    this._popup.removeEventListener('click', this._handleScreenClickClose);
  }

  private _handleEscClose = (evt: KeyboardEvent): void => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  private _handleScreenClickClose = (evt: MouseEvent): void => {
    const target: HTMLElement = evt.target as HTMLElement;

    if (target.classList.contains(this._popupOpened)) {
      this.close();
    }
  };

  private _handleButtonClose = (evt: MouseEvent): void => {
    const target: HTMLElement = evt.target as HTMLElement;

    if (target.classList.contains('popup__close-button')) {
      this.close();
    }
  };
}

export default Popup;
