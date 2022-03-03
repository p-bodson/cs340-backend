// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const get_libraries = async (req) => {

    // first build the query

    // establish the shema values to be returned from the query
    const schema_keys = ["library_ID",
    "library_name",
    "library_address"]

    // these dereferences should match schema keys exactly
    let { library_ID,
        library_name,
        library_address } = req.query;

    // search for good keys
    const query_keys = Object.keys(req.query);
    const good_keys = query_keys.filter(key => {
        for (const item of schema_keys) {
            if (key === item) {
                return true;
            }
        }
        return false;
    })
    
    // build the query based on query parameters
    let query = `SELECT library_ID, library_name, library_address 
    FROM Libraries`;

    const parameter_length = good_keys.length;
    if ( parameter_length !== 0 ) query += ` WHERE`

    // go through the good keys and add them to the query
    for (let i = 0; i < parameter_length; i++) {        
        // set the criteria to null after a match is found
        // to avoid adding it twice.
        if (library_ID) {
            query += ` library_ID="${library_ID}"`;
            library_ID = null;
        }
        else if (library_name) {
            query += ` library_name="${library_name}"`;
            library_name = null;
        }
        else if (library_address) {
            query += ` library_address="${library_address}"`;
            library_address = null;
        }

        // AND the filters together
        if ( i < parameter_length - 1) {
          query += ` AND`
        }
    }

    // add the ordering
    query += ` ORDER BY library_ID ASC;`

    // then do the query
    return do_query(query);
};

export default get_libraries