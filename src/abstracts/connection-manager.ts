import { ConnectionOptions, Relo } from "../relo";

export interface Connection {
  uuid?: string;
}

export interface ConnectionManagerConstructor {
  new (relo: Relo): ConnectionManager;
}



export abstract class ConnectionManager {

  //connect instance of Relo to database
  protected async _connect(config: ConnectionOptions): Promise<Connection> {
    console.log("Connecting to database...");
    throw new Error("Method not implemented.");
  }

  //disconnect instance of Relo from database
  protected async _disconnect(): Promise<void> {
    console.log("Disconnecting from database...");
    throw new Error("Method not implemented.");
  }
}
