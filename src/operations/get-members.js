// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const get_members = async (req) => {

    // first build the query

    // establish the shema values to be returned from the query
    const schema_keys = ["member_ID",
    "member_first_name",
    "member_last_name",
    "member_phone"]

    // these dereferences should match schema keys exactly
    let { member_ID,
    member_first_name,
    member_last_name,
    member_phone } = req.query;

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
    let query = `SELECT member_ID, member_first_name, member_last_name, member_phone 
    FROM Members`;

    const parameter_length = good_keys.length;
    if ( parameter_length !== 0 ) query += ` WHERE`

    // go through the good keys and add them to the query
    for (let i = 0; i < parameter_length; i++) {        
        // set the criteria to null after a match is found
        // to avoid adding it twice.
        if (member_ID) {
            query += ` member_ID="${member_ID}"`;
            member_ID = null;
        }
        else if (member_first_name) {
            query += ` member_first_name="${member_first_name}"`;
            member_first_name = null;
        }
        else if (member_last_name) {
            query += ` member_last_name="${member_last_name}"`;
            member_last_name = null;
        }
        else if (member_phone) {
            query += ` member_phone="${member_phone}"`;
            member_phone = null;
        }

        // AND the filters together
        if ( i < parameter_length - 1) {
          query += ` AND`
        }
    }

    // add the ordering
    query += ` ORDER BY member_ID ASC;`

    // then do the query
    return do_query(query);
};

export default get_members