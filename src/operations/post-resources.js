// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_resources = async (req) => {
    // this function CREATEs a new book in the Books table

    // first build the query
    let { isbn, library_ID, quantity_available, quantity_checked_out } = req.body;
    let query = `INSERT INTO Resources (isbn, library_ID, 
        quantity_available, quantity_checked_out)
        VALUES ("${isbn}", ${library_ID}, ${quantity_available}, ${quantity_checked_out});`;

    // then do the query
    return do_query(query);
};

export default post_resources