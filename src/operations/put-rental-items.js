// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const put_rental_items = async (req) => {

    // first build the query
    let { rental_ID, resource_ID, queue_numb, rental_item_status, return_date } = req.body;

    let query = `UPDATE Rental_Items
    SET queue_numb="${queue_numb}",
    rental_item_status="${rental_item_status}", 
    return_date="${return_date}"
    WHERE rental_ID=${rental_ID} AND resource_ID="${resource_ID}";`;

    // then do the query
    return do_query(query);
};

export default put_rental_items