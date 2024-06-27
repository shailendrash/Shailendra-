export default class CustomError {
  private statusCode = 500;
  timestamp = new Date().toISOString();
  public error: any;
  constructor(statusCode?: number, message?: string, error?: any) {
    this.statusCode = statusCode;
    this.error = error;
  }
}
