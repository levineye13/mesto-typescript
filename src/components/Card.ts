import { ICard } from '../utils/interfaces';

class Card {
  private _cardSelector: string;
  private _data: ICard;
  private _isLiked: boolean = false;
  private _likeNumbers: number = 0;
  private _handleClickCallback: (name: string, link: string) => void;
  private _handleLikeCallback: (cardElement: HTMLLIElement) => void;
  private _handleDeleteCallback: (cardElement: HTMLLIElement) => void;

  public constructor(card: {
    selector: string;
    data: ICard;
    handleClickCallback: (name: string, link: string) => void;
    handleLikeCallback: (cardElement: HTMLLIElement) => void;
    handleDeleteCallback: (cardElement: HTMLLIElement) => void;
  }) {
    this._cardSelector = card.selector;
    this._data = card.data;
    this._handleClickCallback = card.handleClickCallback;
    this._handleLikeCallback = card.handleLikeCallback;
    this._handleDeleteCallback = card.handleDeleteCallback;
  }

  /**
   * Вернуть шаблон карточки
   * @return {object} Возвращает шаблон разметки
   * @private
   */
  private _getTemplate(): HTMLLIElement {
    const template: HTMLTemplateElement = document.querySelector(
      this._cardSelector
    ) as HTMLTemplateElement;

    const clone: DocumentFragment = template.content.cloneNode(
      true
    ) as DocumentFragment;

    const element: HTMLLIElement = clone.children[0] as HTMLLIElement;

    return element;
  }

  // /**
  //  * Лайк карточки
  //  *
  //  * @param  {object} cardElement - разметка карточки
  //  * @private
  //  */
  // toggleLikeButtonState(cardElement) {
  //   cardElement
  //     .querySelector('.elements__like-button')
  //     .classList.toggle('elements__like-button_active');
  // }

  // setLikeButtonState(state) {
  //   this._isLiked = state;
  // }

  // getLikeButtonState() {
  //   return this._isLiked;
  // }

  // setCountLike(countLike) {
  //   this._likeCount = countLike;
  // }

  // addLike() {
  //   this._cardElement.querySelector('.elements__like-count').textContent =
  //     ++this._likeCount;
  // }

  // removeLike() {
  //   this._cardElement.querySelector('.elements__like-count').textContent =
  //     --this._likeCount;
  // }

  // /**
  //  * Удаление карточек со страницы
  //  *
  //  * @param  {object} cardElement - разметка карточки
  //  * @private
  //  */
  // _handleRemoveCard(cardElement) {
  //   cardElement.remove();
  //   cardElement = null;
  // }

  private _like(likeElement: HTMLSpanElement): void {
    this._isLiked = true;
    this._likeNumbers++;
    likeElement.textContent = this._likeNumbers.toString();
  }

  private _dislike(likeElement: HTMLSpanElement): void {
    this._isLiked = false;
    this._likeNumbers--;
    likeElement.textContent = this._likeNumbers.toString();
  }

  private _handleClick(name: string, link: string): void {
    this._handleClickCallback(name, link);
  }

  private _handleDelete(cardElement: HTMLLIElement): void {
    this._handleDeleteCallback(cardElement);
    cardElement.remove();
  }

  private _handleChangeLike(
    cardElement: HTMLLIElement,
    likeElement: HTMLSpanElement
  ) {
    this._handleLikeCallback(cardElement);

    if (this._isLiked) {
      this._dislike(likeElement);
    } else {
      this._like(likeElement);
    }
  }

  // /**
  //  * Обработчики событий
  //  *
  //  * @param  {object} cardElement - разметка карточки
  //  * @private
  //  */
  private _setEventListeners(
    cardElement: HTMLLIElement,
    likeElement: HTMLSpanElement
  ): void {
    (
      cardElement.querySelector('.elements__delete-card') as HTMLButtonElement
    ).addEventListener('click', (evt) => {
      evt.stopPropagation();
      this._handleDelete(cardElement);
    });

    (
      cardElement.querySelector('.elements__like-button') as HTMLButtonElement
    ).addEventListener('click', (evt) => {
      evt.stopPropagation();
      this._handleChangeLike(cardElement, likeElement);
    });

    cardElement.addEventListener('click', () =>
      this._handleClick(this._data.name, this._data.link)
    );
  }

  /**
   * Создание карточки
   *
   * @public
   * @return {object} Возвращает заполненную разметку
   */
  public getView(): HTMLLIElement {
    const newCard: HTMLLIElement = this._getTemplate() as HTMLLIElement;

    const imgElement: HTMLImageElement = newCard.querySelector(
      '.elements__img'
    ) as HTMLImageElement;

    const titleElement: HTMLHeadingElement = newCard.querySelector(
      '.elements__title'
    ) as HTMLHeadingElement;

    const likeElement: HTMLSpanElement = newCard.querySelector(
      '.elements__like-count'
    ) as HTMLSpanElement;

    this._setEventListeners(newCard, likeElement);

    imgElement.src = this._data.link;
    imgElement.alt = this._data.name;
    titleElement.textContent = this._data.name;
    likeElement.textContent = this._likeNumbers.toString();

    return newCard;
  }
}

export default Card;
