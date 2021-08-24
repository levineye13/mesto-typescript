class Section<T> {
  private _container: HTMLElement;
  private _items: T[];
  private _renderer: (item: T) => void;

  public constructor(
    containerSelector: string,
    data: {
      items: T[];
      renderCallback: (item: T) => void;
    }
  ) {
    this._container = document.querySelector(containerSelector) as HTMLElement;
    this._items = data.items;
    this._renderer = data.renderCallback;
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
