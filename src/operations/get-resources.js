// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const get_resources = async (req) => {

    // first build the query

    // establish the shema values to be returned from the query
    const schema_keys = ["isbn", 
        "book_title", 
        "library_ID", 
        "library_name",
        "resource_ID",
        "quantity_checked_out",
        "quantity_available"
    ]

    // these dereferences should match schema keys exactly
    let { isbn, 
        book_title, 
        library_ID, 
        library_name,
        resource_ID,
        quantity_checked_out,
        quantity_available } = req.query;

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
    let query = `SELECT r.resource_ID, 
            b.isbn,
            b.book_title,
            l.library_ID,
            l.library_name,
            r.quantity_available,
            r.quantity_checked_out
        FROM Resources AS r 
        JOIN Books AS b 
        ON r.isbn=b.isbn
        JOIN Libraries AS l
        ON r.library_ID=l.library_ID`;

    const parameter_length = good_keys.length;
    if ( parameter_length !== 0 ) query += ` WHERE`

    // go through the good keys and add them to the query
    for (let i = 0; i < parameter_length; i++) {        
        // set the criteria to null after a match is found
        // to avoid adding it twice.
        if (isbn) {
            query += ` b.isbn="${isbn}"`;
            isbn = null;
        }
        else if (book_title) {
            query += ` b.book_title="${book_title}"`;
            book_title = null;
        }
        else if (resource_ID) {
            query += ` r.resource_ID="${resource_ID}"`;
            resource_ID = null;
        }
        else if (quantity_available) {
            query += ` r.quantity_available="${quantity_available}"`;
            quantity_available = null;
        }
        else if (quantity_checked_out) {
            query += ` r.quantity_checked_out="${quantity_checked_out}"`;
            quantity_checked_out = null;
        }
        else if (library_ID) {
            query += ` l.library_ID="${library_ID}"`;
            library_ID = null;
        }
        else if (library_name) {
            query += ` l.library_name="${library_name}"`;
            library_name = null;
        }            

        // AND the filters together
        if ( i < parameter_length - 1) {
          query += ` AND`
        }
    }

    // add the ordering
    query += ` ORDER BY r.resource_ID DESC;`

    // then do the query
    return do_query(query);
};

export default get_resources