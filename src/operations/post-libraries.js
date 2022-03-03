// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_libraries = async (req) => {
    // this function CREATEs a new library in the Libraries table

    // first build the query
    let { library_name, library_address } = req.body;
    let query = `INSERT INTO Libraries (library_name, library_address) 
    VALUES ("${library_name}", "${library_address}");`;

    // then do the query
    return do_query(query);
};

export default post_libraries