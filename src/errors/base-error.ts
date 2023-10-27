/**
 * The Base Error for all Relo errors.
 *
 * All Relo errors inherit from this class.
 * @class BaseError
 */
export class BaseError extends Error {
  declare cause?: any;
  declare options?: object;

  /**
   * The Base Error constructor.
   * Instantiates the Base Error class with a message.
   *
   * @param {string} message - The message of the error.
   * @param {any} [cause] - The cause of the error.
   * @param {object} [options] - The options of the error.
   * @memberof BaseError
   */
  constructor(message: string, cause?: any, options?: object) {
    super(message);
    this.cause = cause;
    this.options = options;
    this.name = "ReloBaseError";
  }
}
