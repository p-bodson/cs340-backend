// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const get_rental_items = async (req) => {

    // first build the query

    // establish the schema values to be returned from the query
    const schema_keys = ["rental_ID",
    "resource_ID",
    "queue_numb",
    "rental_item_status",
    "return_date"]

    // these dereferences should match schema keys exactly
    let { rental_ID,
    resource_ID,
    queue_numb,
    rental_item_status,
    return_date } = req.query;

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
    let query = `SELECT rental_ID, resource_ID, queue_numb, rental_item_status, return_date 
    FROM Rental_Items`;

    const parameter_length = good_keys.length;
    if ( parameter_length !== 0 ) query += ` WHERE`

    // go through the good keys and add them to the query
    for (let i = 0; i < parameter_length; i++) {        
        // set the criteria to null after a match is found
        // to avoid adding it twice.
        if (rental_ID) {
            query += ` rental_ID="${rental_ID}"`;
            rental_ID = null;
        }
        else if (resource_ID) {
            query += ` resource_ID="${resource_ID}"`;
            resource_ID = null;
        }
        else if (queue_numb) {
            query += ` queue_numb="${queue_numb}"`;
            queue_numb = null;
        }
        else if (rental_item_status) {
            query += ` rental_item_status="${rental_item_status}"`;
            rental_item_status = null;
        } else if (return_date) {
            query += ` return_date="${return_date}"`;
            return_date = null;
        }
        // AND the filters together
        if ( i < parameter_length - 1) {
          query += ` AND`
        }
    }

    // add the ordering
    query += ` ORDER BY resource_ID ASC;`

    // then do the query
    return do_query(query);
};

export default get_rental_items