// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_book = async (req) => {
    // this function CREATEs a new author in the Authors table

    // first build the query
    let { isbn, book_title } = req.body;
    let query = `INSERT INTO Books (isbn, book_title) VALUES ("${isbn}", "${book_title}");`;

    // then do the query
    return do_query(query);
};

export default post_book