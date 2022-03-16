// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const delete_rental_items = async (req) => {

    // first build the query
    let { rental_ID, resource_ID } = req.body;
    let query = `DELETE FROM Rental_Items
        WHERE rental_ID=${rental_ID} AND resource_ID=${resource_ID};`;

    // then do the query
    return do_query(query);
};

export default delete_rental_items