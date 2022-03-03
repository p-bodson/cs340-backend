// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const get_books_and_authors = async (req) => {

    // first build the query

    // establish the shema values to be returned from the query
    const schema_keys = ["isbn", 
        "book_title", 
        "author_name", 
        "author_ID"]

    // these dereferences should match schema keys exactly
    let { isbn,
        book_title, 
        author_name, 
        author_ID } = req.query;

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
    let query = `SELECT b.isbn, 
        b.book_title, 
        a.author_name, 
        a.author_ID 
        FROM Books AS b 
        JOIN Books_Authors AS ba 
        ON b.isbn=ba.isbn 
        RIGHT JOIN Authors AS a  
        ON ba.author_id=a.author_id`;

    const parameter_length = good_keys.length;
    if ( parameter_length !== 0 ) query += ` WHERE`

    // go through the good keys and add them to the query
    for (let i = 0; i < parameter_length; i++) {        
        // set the criteria to null after a match is found
        // to avoid adding it twice.
        if (isbn) {
            query += ` b.isbn="${isbn}"`;
            isbn = null;
        }
        else if (book_title) {
            query += ` b.book_title="${book_title}"`;
            book_title = null;
        }
        else if (author_name) {
            query += ` a.author_name="${author_name}"`;
            author_name = null;
        }
        else if (author_ID) {
            query += ` a.author_ID="${author_ID}"`;
            author_ID = null;
        }        

        // AND the filters together
        if ( i < parameter_length - 1) {
          query += ` AND`
        }
    }

    // add the ordering
    query += ` ORDER BY b.isbn DESC;`

    // then do the query
    return do_query(query);
};

export default get_books_and_authors