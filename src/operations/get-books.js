// here is where the heavy lifting of each route goes.

import pool from '../db-connector.js'

const get_books = async (req) => {

    // establish the shema values to be returned from the query
    const schema_keys = ["isbn", 
        "book_title"]

    // these dereferences should match schema keys exactly
    let { isbn,
        book_title } = req.query;

    // search for good keys
    const query_keys = Object.keys(req.query);
    const good_keys = query_keys.filter(key => {
        for (const item of schema_keys) {
            if (key === item) {
                return true;
            }
        }
        return false;
    })
    
    // build the query based on query parameters
    let query = `SELECT isbn, 
        book_title
        FROM Books`;

    const parameter_length = good_keys.length;
    if ( parameter_length !== 0 ) query += ` WHERE`

    // go through the good keys and add them to the query
    for (let i = 0; i < parameter_length; i++) {        
        // set the criteria to null after a match is found
        // to avoid adding it twice.
        if (isbn) {
            query += ` isbn="${isbn}"`;
            isbn = null;
        }
        else if (book_title) {
            query += ` book_title="${book_title}"`;
            book_title = null;
        }

        // AND the filters together
        if ( i < parameter_length - 1) {
          query += ` AND`
        }
    }

    // add the ordering
    query += ` ORDER BY isbn ASC;`

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

export { get_books}