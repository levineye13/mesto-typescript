interface IApiError {
  message: string;
  status: number;
  statusText: string;
}

class ApiError extends Error implements IApiError {
  public name: string = 'ApiError';
  public status: number;
  public statusText: string;

  public constructor(err: {
    message: string;
    status: number;
    statusText: string;
  }) {
    super(err.message);
    this.status = err.status;
    this.statusText = err.statusText;
  }

  public parseErrorToJson(): string {
    return JSON.stringify({
      message: this.message,
      name: this.name,
      status: this.status,
      statusText: this.statusText,
    });
  }
}

export default ApiError;
