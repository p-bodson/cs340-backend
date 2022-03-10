// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const put_authors = async (req) => {
    // this function UPDATEs an author in the Authors table

    // first build the query
    let { author_ID, author_name } = req.body;
    let query = `UPDATE Authors
    SET author_name="${author_name}"
    WHERE author_ID="${author_ID}";`;

    // then do the query
    return do_query(query);
};

export default put_authors