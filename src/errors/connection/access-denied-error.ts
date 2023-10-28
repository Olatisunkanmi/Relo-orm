import { ConnectionError } from "../connection-error";


/**
 * Thrown when a connection to a database is refused due to insufficient privileges.
 */
export class AccessDeniedError extends Error  {
  constructor(message?: string) {
    super(message);
    this.name = "ReloAccessDeniedError";
    this.message = message ?? "Access denied for user";
    // this.stack = "";
  }
}
