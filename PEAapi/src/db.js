import { createPool } from "mysql2/promise";

export const pool = createPool({ //equivalente a create connection
    host: 'localhost',
    user: 'root',
    password: 'alberto99',
    port: 3306,
    database: 'peabd'
})