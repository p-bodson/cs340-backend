// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const put_libraries = async (req) => {

    // first build the query
    let { library_ID, library_name, library_address } = req.body;

    let query = `UPDATE Libraries
    SET library_name="${library_name}", 
    library_address="${library_address}"
    WHERE library_ID=${library_ID};`;

    // then do the query
    return do_query(query);
};

export default put_libraries