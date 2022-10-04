import boom from '@hapi/boom';

interface ErrorPayload {
  message: string;
  error?: string;
  code?: number;
}

class ApplicationError extends Error {
  status: number;
  payload: ErrorPayload;
  constructor(exception: boom.Boom, error?: string, code?: number) {
    super(exception.output.payload.message);
    this.status = exception.output.statusCode;
    this.payload = {
      message: exception.message,
    };
    if (error) this.payload.error = error;
    if (code) this.payload.code = code;
  }
}

class BadRequestError extends ApplicationError {
  constructor(message: string, code?: number) {
    super(boom.badRequest(message), undefined, code);
  }
}

class NotFoundError extends ApplicationError {
  constructor(message: string, code?: number) {
    super(boom.notFound(message), undefined, code);
  }
}

class ConflictError extends ApplicationError {
  constructor(message: string, code?: number) {
    super(boom.conflict(message), undefined, code);
  }
}

class BadImplementationError extends ApplicationError {
  constructor(message: string, error?: string, code?: number) {
    super(boom.badImplementation(message), error, code);
  }
}

class UnauthorizedError extends ApplicationError {
  constructor(message: string, code?: number) {
    super(boom.unauthorized(message), undefined, code);
  }
}

class BadData extends ApplicationError {
  constructor(message: string, code?: number) {
    super(boom.badData(message), undefined, code);
  }
}

export {
  ApplicationError,
  NotFoundError,
  ConflictError,
  UnauthorizedError,
  BadImplementationError,
  BadRequestError,
  BadData,
};
