// export default class Section {
//   constructor({ items, renderer }, containerSelector) {
//     this._items = items;
//     this._renderer = renderer;
//     this._container = document.querySelector(containerSelector);
//   }
//   /**
//    * Карточки массива вставляются в конец, пользовательские - в начало
//    *
//    * @param  {object} element - разметка вставляемой карточки
//    * @param  {boolean} isArray - проверка на массив
//    */
// 	addItem(element, isArray) {
// 		if (isArray) {
//       this._container.append(element);
// 		} else {
//       this._container.prepend(element);
//     }
//   }

// 	renderItems() {
// 		this._items.forEach((item) => this._renderer(item));
//   }
// }

class Section {
  private _container: HTMLElement;
  private _items: object[];
  private _renderer: (item: object) => void;

  public constructor(
    containerSelector: string,
    items: object[],
    renderer: () => void
  ) {
    this._container = document.querySelector(containerSelector) as HTMLElement;
    this._items = items;
    this._renderer = renderer;
  }

  public appendItem(item: HTMLElement): void {
    this._container.append(item);
  }

  public prependItem(item: HTMLElement): void {
    this._container.prepend(item);
  }

  public renderItems(): void {
    this._items.forEach((item) => this._renderer(item));
  }
}

export default Section;
