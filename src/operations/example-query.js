// here is where the heavy lifting of each route goes.

import pool from '../db-connector.js'

const example_query = async (req) => {
    let res = {}
    let conn;
    const query = "SELECT * FROM Authors;"

    try {
        conn = await pool.getConnection()
        res = await conn.query(query)
    }
    catch (err) {
        throw err;
    }
    finally {
        if (conn) conn.release()
    }

    return res
};

export { example_query }
