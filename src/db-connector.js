// here is where the db interface is created

import mariadb from 'mariadb'

const pool = mariadb.createPool({
    connectionLimit : 10,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASSWORD,
    port            : process.env.DB_PORT,
    database        : process.env.DB_NAME,
    compress        : true
})


export default pool