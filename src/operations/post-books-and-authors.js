// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_books_and_authors = async (req) => {
    // this function CREATEs a new book in the Books table

    // first build the query
    let { isbn, author_ID } = req.body;
    let query = `INSERT INTO Books_Authors (isbn, author_ID) VALUES ("${isbn}", ${author_ID});`;

    // then do the query
    return do_query(query);
};

export default post_books_and_authors