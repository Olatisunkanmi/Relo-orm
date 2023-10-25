import { ReloIndex  } from "./init";

export interface ConnectionOptions {
  database?: string; // The name of the database.
  username?: string; // The username of the database.
  password?: string; // The password of the database.
  options?: object; // The options of the database.
  uri?: string; // The uri of the database.
}



export class Relo extends ReloIndex {

}