import Pg from "pg";

export type PostgresQueryResult = Pg.QueryResult;
export class Postgres {
    private _pool: Pg.Pool = new Pg.Pool({
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DB,
        password: process.env.PG_PASS,
        port: Number(process.env.PG_PORT)
    });

    async query(sql: string, param: Array<unknown>): Promise<Pg.QueryResult> {
        return this._pool.query(sql, param);
    }
}