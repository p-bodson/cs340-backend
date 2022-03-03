// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const get_transfers = async (req) => {

    // first build the query

    // establish the shema values to be returned from the query
    const schema_keys = ["transfer_ID",
    "source_library_ID",
    "destination_library_ID",
    "transfer_date"]

    // these dereferences should match schema keys exactly
    let { transfer_ID,
    source_library_ID,
    destination_library_ID,
    transfer_date } = req.query;

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
    let query = `SELECT transfer_ID, source_library_ID, destination_library_ID, transfer_date 
    FROM Transfers`;

    const parameter_length = good_keys.length;
    if ( parameter_length !== 0 ) query += ` WHERE`

    // go through the good keys and add them to the query
    for (let i = 0; i < parameter_length; i++) {        
        // set the criteria to null after a match is found
        // to avoid adding it twice.
        if (transfer_ID) {
            query += ` transfer_ID="${transfer_ID}"`;
            transfer_ID = null;
        }
        else if (source_library_ID) {
            query += ` source_library_ID="${source_library_ID}"`;
            source_library_ID = null;
        }
        else if (destination_library_ID) {
            query += ` destination_library_ID="${destination_library_ID}"`;
            destination_library_ID = null;
        }
        else if (transfer_date) {
            query += ` transfer_date="${transfer_date}"`;
            transfer_date = null;
        }

        // AND the filters together
        if ( i < parameter_length - 1) {
          query += ` AND`
        }
    }

    // add the ordering
    query += ` ORDER BY transfer_ID ASC;`

    // then do the query
    return do_query(query);
};

export default get_transfers