import { IFormValidation } from '../utils/interfaces';

class FormValidator {
  public constructor(
    private _form: HTMLFormElement,
    private _validationConfig: IFormValidation
  ) {}

  private _showError(input: HTMLInputElement, error: string): void {
    const errorElement: HTMLSpanElement = this._form.querySelector(
      `#${input.id}-error`
    ) as HTMLSpanElement;

    errorElement.textContent = error;
    input.classList.add(this._validationConfig.inputErrorClass);
    errorElement.classList.add(this._validationConfig.errorClass);
  }

  private _hideError(input: HTMLInputElement): void {
    const errorElement: HTMLSpanElement = this._form.querySelector(
      `#${input.id}-error`
    ) as HTMLSpanElement;

    errorElement.textContent = '';
    input.classList.remove(this._validationConfig.inputErrorClass);
    errorElement.classList.remove(this._validationConfig.errorClass);
  }

  private _changeSubmitState(valid: boolean): void {
    const submitElement: HTMLButtonElement = this._form.querySelector(
      this._validationConfig.submitSelector
    ) as HTMLButtonElement;

    if (valid) {
      submitElement.disabled = true;
      submitElement.classList.add(this._validationConfig.inactiveButtonClass);
    } else {
      submitElement.disabled = false;
      submitElement.classList.remove(
        this._validationConfig.inactiveButtonClass
      );
    }
  }

  private _checkInputValidity(input: HTMLInputElement): void {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input, input.validationMessage);
    }
  }

  private _hasInvalidInput(inputs: HTMLInputElement[]): boolean {
    return inputs.some((input: HTMLInputElement) => !input.validity.valid);
  }

  private _getFormInputs(): HTMLInputElement[] {
    const inputNodes: NodeList = this._form.querySelectorAll(
      this._validationConfig.inputSelector
    );

    const inputs: HTMLInputElement[] = [...inputNodes] as HTMLInputElement[];

    return inputs;
  }

  private _handleInputEvent(
    inputs: HTMLInputElement[],
    currentInput: HTMLInputElement
  ): void {
    const isValid = this._hasInvalidInput(inputs);
    this._checkInputValidity(currentInput);
    this._changeSubmitState(isValid);
  }

  private _handleSubmitEvent(evt: Event): void {
    evt.preventDefault();
    this._changeSubmitState(false);
  }

  private _setEventListeners(inputs: HTMLInputElement[]): void {
    inputs.forEach((input: HTMLInputElement): void => {
      const handleInputEvent = () => this._handleInputEvent(inputs, input);
      input.addEventListener('input', handleInputEvent);
    });
  }

  private _removeEventListeners(inputs: HTMLInputElement[]): void {
    inputs.forEach((input: HTMLInputElement): void => {
      const handleInputEvent = () => this._handleInputEvent(inputs, input);
      input.removeEventListener('input', handleInputEvent);
    });
  }

  public enable(): void {
    const inputs: HTMLInputElement[] = this._getFormInputs();

    this._form.addEventListener('submit', this._handleSubmitEvent);

    this._setEventListeners(inputs);
  }

  public disable(): void {
    const inputs: HTMLInputElement[] = this._getFormInputs();

    this._form.removeEventListener('submit', this._handleSubmitEvent);

    this._removeEventListeners(inputs);
  }
}

export default FormValidator;
