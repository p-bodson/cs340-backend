// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const delete_authors = async (req) => {
    // this function DELETEs an author in the Authors table

    // first build the query
    let { author_ID } = req.body;
    let query = `DELETE FROM Authors WHERE author_ID=${author_ID};`;

    // then do the query
    return do_query(query);
};

export default delete_authors