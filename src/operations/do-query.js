// here is where the heavy lifting of each route goes.

import pool from '../db-connector.js'

const do_query = async (query) => {

    // start the database access
    let res = {}
    let conn;
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

export default do_query