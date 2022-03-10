// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const delete_rentals = async (req) => {

    // first build the query
    let { rental_ID } = req.body;
    let query = `DELETE FROM Rentals
        WHERE rental_ID=${rental_ID};`;

    // then do the query
    return do_query(query);
};

export default delete_rentals