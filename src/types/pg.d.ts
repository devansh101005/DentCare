declare module "pg" {
  import { Pool, Client } from "pg";
  export { Pool, Client };
}
export interface PoolConfig {
  connectionString?: string;
  [key: string]: any;
}
