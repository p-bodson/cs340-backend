// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const put_books = async (req) => {
    // this function UPDATEs a new book in the Books table

    // first build the query
    let { isbn, book_title } = req.body;
    let query = `UPDATE Books
    SET book_title="${book_title}"
    WHERE isbn="${isbn}";`;

    // then do the query
    return do_query(query);
};

export default put_books