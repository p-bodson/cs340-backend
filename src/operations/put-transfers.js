// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const put_transfers = async (req) => {

    // first build the query
    let { transfer_ID, source_library_ID, destination_library_ID,
        transfer_date } = req.body;

    let query = `UPDATE Transfers
    SET source_Library_ID=${source_library_ID}, 
    destination_library_ID=${destination_library_ID}, 
    transfer_date="${transfer_date}"
    WHERE transfer_ID=${transfer_ID};`;

    // then do the query
    return do_query(query);
};

export default put_transfers