class Loader {
  private _loaderElement: HTMLDivElement = document.querySelector(
    '.loader'
  ) as HTMLDivElement;

  public constructor() {}

  public start = (): void => {
    this._loaderElement.classList.add('loader_active');
  };

  public stop = (): void => {
    this._loaderElement.classList.remove('loader_active');
  };
}

export default Loader;
