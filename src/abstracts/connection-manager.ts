import { ConnectionOptions, Relo } from "../relo";
import { AccessDeniedError } from "../errors";
import mysql from "mysql2";
import { type } from "os";

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

  //  private _connect(): Promise<any> {
  //     return new Promise((resolve, reject) => {
  //       this.connection = mysql.createConnection({
  //         host: this.relo.options.host,
  //         user: this.relo.username,
  //         password: this.relo.password,
  //         database: this.relo.database,
  //         port: this.relo.options.port
  //       });

  //       this.connection.on('error', (err: any) => {
  //         reject(err);
  //       });

  //       this.connection.on('end', () => {
  //         reject(new AccessDeniedError(`Access denied for user ${this.relo.username}`));
  //       });

  //       this.connection.on('connect', () => {
  //         console.log(this.connection);
  //         resolve(this.connection);
  //       });
  //     });

  //   }

  // _intiateConnection(): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     this.connection = mysql.createConnection({
  //       host: this.relo.options.host,
  //       user: this.relo.username,
  //       password: this.relo.password,
  //       database: this.relo.database,
  //       port: this.relo.options.port,
  //     });
  //   });
  // }

  // _disconnect(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.connection.end((err: any) => {
  //       if (err) {
  //         reject(err);
  //       }

  //       resolve(this.connection);
  //     });
  //   });
  // }

  private _ping(): Promise<any> {
    const ping = new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: this.relo.options.host,
        user: this.relo.username,
        password: this.relo.password,
        database: this.relo.database,
        port: this.relo.options.port,
      });


      connection.on("error", (err: any) => {
        reject(err);
      });

      connection.on("end", () => {
        reject(
          new AccessDeniedError(`Access denied for user ${this.relo.username}`)
        );
      });

      connection.on("connect", () => {
        resolve(connection);
      });

      // connection.ping();
    });


    return ping;
  }

  private async _connect(): Promise<any> {
    try {
      this.connection = await this._ping();
      this.connection.end();
      return this.connection;
      
      
    } catch (err) {
      throw err;
    }
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
