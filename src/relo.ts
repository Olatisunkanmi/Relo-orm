interface options {
    database?: string;
    username?: string;
    password?: string;
    options?: object;
    uri?: string;
}

export class Relo {
  /**
   *  The Relo constructor.
   * Instantiates the Relo class with the name of the database.
   *
   * @param {string} [database] - The name of the database.
   * @param {string} [username] - The username of the database.
   * @param {string} [password] - The password of the database.
   * @param {object} [options] - The options of the database.
   * @param {string} [uri] - The uri of the database.
   */
 constructor(...args: any[]){
    console.log("Relo constructor called");
    console.log(args);
 }
}
