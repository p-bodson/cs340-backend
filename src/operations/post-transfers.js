// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_transfers = async (req) => {
    // this function CREATEs a new transfer in the Transfers table

    // first build the query
    let { source_library_ID, destination_library_ID, transfer_date } = req.body;
    let query = `INSERT INTO Transfers (source_library_ID, destination_library_ID, transfer_date) 
    VALUES ("${source_library_ID}", "${destination_library_ID}", "${transfer_date}");`;

    // then do the query
    return do_query(query);
};

export default post_transfers