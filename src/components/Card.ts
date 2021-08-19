import { ICard } from '../utils/types';

class Card {
  private _cardSelector: string;
  private _data: {
    name: string;
    link: string;
    likes: object[];
    owner: object;
  };
  private _isLiked: boolean = false;
  private _likeNumbers: number = 0;
  private _handleClick(name: string, link: string): void;
  private _handleLike(cardElement: HTMLLIElement): void;
  private _handleDelete(cardElement: HTMLLIElement): void;
  private _cardElement: HTMLLIElement;

  public constructor(
    cardSelector: string,
    data: {
      name: string;
      link: string;
      likes: object[];
      owner: object;
    },
    handleClick: (name: string, link: string) => void,
    handleLike: (cardElement: HTMLLIElement) => void,
    handleDelete: (cardElement: HTMLLIElement) => void
  ) {
    this._cardSelector = cardSelector;
    this._data = data;
    this._handleClick = handleClick;
    this._handleLike = handleLike;
    this._handleDelete = handleDelete;
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

  private _handleCardClick(name: string, link: string): void {
    this._handleClick(name, link);
  }

  private _handleCardLike(): void {
    this._handleLike(this._cardElement);
    this._isLiked = true;
    this._likeNumbers++;
    (
      this._cardElement.querySelector('.elements__like-count') as HTMLLIElement
    ).textContent = this._likeNumbers.toString();
  }

  private _handleCardDislike(): void {
    this._handleLike(this._cardElement);
    this._isLiked = false;
    this._likeNumbers--;
    (
      this._cardElement.querySelector('.elements__like-count') as HTMLLIElement
    ).textContent = this._likeNumbers.toString();
  }

  private _handleCardDelete(): void {
    this._handleDelete(this._cardElement);
    this._cardElement.remove();
  }

  private checkOwner() {}

  // /**
  //  * Обработчики событий
  //  *
  //  * @param  {object} cardElement - разметка карточки
  //  * @private
  //  */
  // _setEventListeners(cardElement) {
  //   cardElement
  //     .querySelector('.elements__delete-card')
  //     .addEventListener('click', (evt) => {
  //       evt.stopPropagation();
  //       this._handleDelete(cardElement);
  //     });
  //   cardElement
  //     .querySelector('.elements__like-button')
  //     .addEventListener('click', (evt) => {
  //       evt.stopPropagation();
  //       this._handleLike(cardElement);
  //     });
  //   cardElement.addEventListener('click', () =>
  //     this._handleClick(this._data.name, this._data.link)
  //   );
  // }

  /**
   * Создание карточки
   *
   * @public
   * @return {object} Возвращает заполненную разметку
   */
  public getView() {
    this._cardElement = this._getTemplate() as HTMLLIElement;

    // this._setEventListeners(this._cardElement);

    // this._imgElement = this._cardElement.querySelector('.elements__img');
    // this._imgElement.src = this._data.link;
    // this._imgElement.setAttribute('alt', this._data.name);
    // this._cardElement.querySelector('.elements__title').textContent =
    //   this._data.name;
    // this._cardElement.querySelector('.elements__like-count').textContent =
    //   this._likeCount;

    return this._cardElement;
  }
}

export default Card;
