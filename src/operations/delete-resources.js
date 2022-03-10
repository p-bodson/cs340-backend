// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const delete_resources = async (req) => {
    // this function DELETEs a new book in the Books table

    // first build the query
    let { resource_ID } = req.body;
    let query = `DELETE FROM Resources
        WHERE resource_ID=${resource_ID};`;

    // then do the query
    return do_query(query);
};

export default delete_resources