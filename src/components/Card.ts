import { ICard } from '../utils/interfaces';

class Card {
  private _cardSelector: string;
  private _data: ICard;
  private _isLiked: boolean = false;
  private _likeNumbers: number = 0;
  private _handleClickCallback: (name: string, link: string) => void;
  private _handleLikeCallback: () => void;
  private _handleDislikeCallback: () => void;
  private _handleDeleteCallback: (cardElement: HTMLLIElement) => void;

  public constructor(
    selector: string,
    card: {
      data: ICard;
      handleClickCallback: (name: string, link: string) => void;
      handleLikeCallback: () => void;
      handleDislikeCallback: () => void;
      handleDeleteCallback: (cardElement: HTMLLIElement) => void;
    }
  ) {
    this._cardSelector = selector;
    this._data = card.data;
    this._handleClickCallback = card.handleClickCallback;
    this._handleLikeCallback = card.handleLikeCallback;
    this._handleDislikeCallback = card.handleDislikeCallback;
    this._handleDeleteCallback = card.handleDeleteCallback;
  }

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

  public get getLikeState(): boolean {
    return this._isLiked;
  }

  public get getId(): string {
    return this._data._id;
  }

  private _like(
    likeElement: HTMLSpanElement,
    likeButton: HTMLButtonElement
  ): void {
    this._isLiked = true;
    this._likeNumbers++;
    likeElement.textContent = this._likeNumbers.toString();
    likeButton.classList.add('elements__like-button_active');
  }

  private _dislike(
    likeElement: HTMLSpanElement,
    likeButton: HTMLButtonElement
  ): void {
    this._isLiked = false;
    this._likeNumbers--;
    likeElement.textContent = this._likeNumbers.toString();
    likeButton.classList.remove('elements__like-button_active');
  }

  private _handleClick(name: string, link: string): void {
    this._handleClickCallback(name, link);
  }

  private _handleDelete(cardElement: HTMLLIElement): void {
    this._handleDeleteCallback(cardElement);
    cardElement.remove();
  }

  private _handleLike(
    likeElement: HTMLSpanElement,
    likeButton: HTMLButtonElement
  ): void {
    this._handleLikeCallback();
    this._like(likeElement, likeButton);
  }

  private _handleDislike(
    likeElement: HTMLSpanElement,
    likeButton: HTMLButtonElement
  ): void {
    this._handleDislikeCallback();
    this._dislike(likeElement, likeButton);
  }

  private _handleChangeLike(
    likeElement: HTMLSpanElement,
    likeButton: HTMLButtonElement
  ) {
    if (this._isLiked) {
      this._handleDislike(likeElement, likeButton);
    } else {
      this._handleLike(likeElement, likeButton);
    }
  }

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

    const likeButton: HTMLButtonElement = cardElement.querySelector(
      '.elements__like-button'
    ) as HTMLButtonElement;

    likeButton.addEventListener('click', (evt) => {
      evt.stopPropagation();
      this._handleChangeLike(likeElement, likeButton);
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
