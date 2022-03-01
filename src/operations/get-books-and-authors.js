// here is where the heavy lifting of each route goes.

import pool from '../db-connector.js'

const get_books_and_authors = async (req) => {
    let res = {}
    let conn;

    const query = `SELECT b.isbn, 
        b.book_title, 
        a.author_name, 
        a.author_ID 
        FROM Books AS b 
        JOIN Books_Authors AS ba 
        ON b.isbn=ba.isbn 
        RIGHT JOIN Authors AS a  
        ON ba.author_id=a.author_id 
        ORDER BY b.book_title ASC;` 

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

export { get_books_and_authors }