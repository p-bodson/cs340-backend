// here is where the heavy lifting of each route goes.

import do_query from './do-query.js'

const get_authors = async (req) => {

    // first build the query

    // establish the shema values to be returned from the query
    const schema_keys = ["author_name",
        "author_ID"]

    // these dereferences should match schema keys exactly
    let { author_name, 
        author_ID } = req.query;

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
    let query = `SELECT author_ID, 
        author_name
        FROM Authors`;

    const parameter_length = good_keys.length;
    if ( parameter_length !== 0 ) query += ` WHERE`

    // go through the good keys and add them to the query
    for (let i = 0; i < parameter_length; i++) {        
        // set the criteria to null after a match is found
        // to avoid adding it twice.
        if (author_name) {
            query += ` author_name="${author_name}"`;
            author_name = null;
        }
        else if (author_ID) {
            query += ` author_ID="${author_ID}"`;
            author_ID = null;
        }        

        // AND the filters together
        if ( i < parameter_length - 1) {
          query += ` AND`
        }
    }

    // add the ordering
    query += ` ORDER BY author_ID ASC;`

    // then do the query
    return do_query(query);
};

export default get_authors