// here is where the heavy lifting of each route goes.

import pool from '../db-connector.js'

const get_books_and_authors = async (req) => {

    const { isbn,
        book_title, 
        author_name, 
        author_ID } = req.query;

    let res = {}
    let conn;

    let query = `SELECT b.isbn, 
        b.book_title, 
        a.author_name, 
        a.author_ID 
        FROM Books AS b 
        JOIN Books_Authors AS ba 
        ON b.isbn=ba.isbn 
        RIGHT JOIN Authors AS a  
        ON ba.author_id=a.author_id`

    // build the query based on query parameters

    if (isbn) {
        query = query + ` WHERE b.isbn=${'"' + isbn + '"'}`
    }
    //if (book_title) {
    //    query = query + ` b.book_title=${book_title}`
    //}
    //if (author_name) {
    //    query = query + ` a.author_name=${author_name}`
    //}
    //if (author_ID) {
    //    query = query + ` a.author_ID=${author_ID}`
    //}

    // add the ordering
    query = query + ` ORDER BY b.book_title ASC;`

    console.log(query);

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