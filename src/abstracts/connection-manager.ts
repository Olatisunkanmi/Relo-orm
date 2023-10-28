import { ConnectionOptions, Relo } from "../relo";
import { AccessDeniedError } from "../errors";
import mysql from "mysql2";

// export interface Connection {
//   uuid?: string;
// }

// export interface ConnectionManagerConstructor {
//   new (relo: Relo): ConnectionManager;
// }

export abstract class ConnectionIndex {
  protected connection: any;

  constructor(protected relo: Relo) {
    this.relo = relo;
    this.connection = {};
  }

  _connect(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection = mysql.createConnection({
        host: this.relo.options.host,
        user: this.relo.username,
        password: this.relo.password,
        database: this.relo.database,
        port: this.relo.options.port
      });

      // console.log('connection', this.connection);

      this.connection.on('error', (err: any) => {
        reject(err);
      });

      this.connection.on('end', () => {
        reject(new AccessDeniedError(`Access denied for user ${this.relo.username}`));
      });

      this.connection.on('connect', () => {
        console.log('connected');
        resolve(this.connection);
      });

      // this.connection.connect((err: any) => {
      //   if (err) {
      //     reject(new AccessDeniedError(err.message));
      //   }

      //   resolve(this.connection);
      // });
    });
  }

  _disconnect(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.end((err: any) => {
        if (err) {
          reject(err);
        }

        resolve(this.connection);
      });
    });
  }

  async connect(): Promise<any> {
    return await this._connect();
  }

  async disconnect(): Promise<any> {
    return await this._disconnect();
  }
}

export class ConnectionManager extends ConnectionIndex {
  constructor(relo: Relo) {
    super(relo);
  }


}
