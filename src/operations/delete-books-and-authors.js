// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const delete_books_and_authors = async (req) => {
    // this function DELETEs a new book in the Books table

    // first build the query
    let { isbn, author_ID} = req.body;
    let query = `DELETE FROM Books_Authors WHERE isbn="${isbn}" AND author_ID=${author_ID};`;

    // then do the query
    return do_query(query);
};

export default delete_books_and_authors