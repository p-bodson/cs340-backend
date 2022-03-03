// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_author = async (req) => {
    // this function CREATEs a new author in the Authors table

    // first build the query
    let { author_name } = req.body;
    let query = `INSERT INTO Authors (author_name) VALUES ("${author_name}");`;  

    // then do the query
    return do_query(query);
};

export default post_author