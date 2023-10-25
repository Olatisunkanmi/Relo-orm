import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import "jest";
import { constants } from "../src/utils";
import { get } from "node:https";

export { ConnectionManager } from "../src/abstracts/connection-manager";
export { Relo } from "../src/relo";

export function getTestDialect(): string {
    const envDialect = process.env.DIALECT ?? "";  // 
  
    if (envDialect === "mysql") {
      return "mysql2"; // mysql2 is a drop-in replacement for mysql
    }
  
    if (!getSupportedDialects().includes(envDialect)) {
      throw new Error(`The dialect ${envDialect} is not supported. Supported dialects are: ${getSupportedDialects().join(', ')}`);
    }
  
    return envDialect;
  }
  
  export function getSupportedDialects(): string[] {
    return constants.SupportedDialects as string[];
  }