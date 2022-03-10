// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const put_rentals = async (req) => {

    // first build the query
    let { rental_ID, member_ID, library_ID,
        rental_date } = req.body;

    let query = `UPDATE Rentals
    SET member_ID=${member_ID}, library_ID=${library_ID}, 
    rental_date="${rental_date}"
    WHERE rental_ID=${rental_ID};`;

    // then do the query
    return do_query(query);
};

export default put_rentals