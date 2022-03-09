// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const delete_books = async (req) => {
    // this function UPDATEs a new book in the Books table

    // first build the query
    let { isbn } = req.body;
    let query = `DELETE FROM Books WHERE isbn="${isbn}";`;

    // then do the query
    return do_query(query);
};

export default delete_books