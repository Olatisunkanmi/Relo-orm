import { BaseError } from "./base-error";

/**
 * A base class for all connection related errors.
 */

export class ConnectionError extends BaseError {
  constructor(parent?: Error) {
    super(parent ? parent.message : "Connection Error", parent);
    this.name = "ReloConnectionError";
  }
}
