// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const delete_libraries = async (req) => {

    // first build the query
    let { library_ID } = req.body;
    let query = `DELETE FROM Libraries
        WHERE library_ID=${library_ID};`;

    // then do the query
    return do_query(query);
};

export default delete_libraries