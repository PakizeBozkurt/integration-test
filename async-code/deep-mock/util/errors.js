export class HttpError {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    
  }
}

export class ValidationError {
  constructor(message) {
    this.message = message;
  }
}