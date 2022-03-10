// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const delete_transfers = async (req) => {

    // first build the query
    let { transfer_ID } = req.body;
    let query = `DELETE FROM Transfers
        WHERE transfer_ID=${transfer_ID};`;

    // then do the query
    return do_query(query);
};

export default delete_transfers