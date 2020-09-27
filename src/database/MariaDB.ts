import mariadb from "mariadb";
import { Contrato } from "../contrato/model/Contrato";

export class MariaDB {
    private _pool: mariadb.Pool = mariadb.createPool({
        host: process.env.MA_HOST,
        user: process.env.MA_USER,
        password: process.env.MA_PASS,
        database: process.env.MA_DB,
        port: Number(process.env.MA_PORT)
    });

    async query(sql: string, param: Array<unknown>) {
        return this._pool.getConnection().then(conn => {
            return conn.query(sql, param);
        });
    }
}
