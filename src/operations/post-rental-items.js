// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_rental_items = async (req) => {
    // this function CREATEs a new rental_item in the Rental_Items table

    // first build the query
    let { rental_ID, resource_ID, queue_numb, rental_item_status, return_date } = req.body;
    let query = `INSERT INTO Rental_Items (rental_ID, resource_ID, queue_numb, rental_item_status, return_date) 
    VALUES ("${rental_ID}", "${resource_ID}", "${queue_numb}", "${rental_item_status}", "${return_date}");`;

    // then do the query
    return do_query(query);
};

export default post_rental_items