// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_transfer_items = async (req) => {
    // this function CREATEs a new transfer_item in the Transfer_Items table

    // first build the query
    let { resource_ID, quantity, transfer_item_status } = req.body;
    let query = `INSERT INTO Rental_Items (resource_ID, quantity, transfer_item_status) 
    VALUES ("${resource_ID}", "${quantity}", "${transfer_item_status}");`;

    // then do the query
    return do_query(query);
};

export default post_transfer_items