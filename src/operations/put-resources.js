// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const put_resources = async (req) => {
    // this function UPDATEs a rsource in the Resources table

    // first build the query
    let { resource_ID, isbn, library_ID, quantity_available,
        quantity_checked_out } = req.body;

    let query = `UPDATE Resources
    SET isbn="${isbn}", library_ID=${library_ID}, 
    quantity_available=${quantity_available},
    quantity_checked_out=${quantity_checked_out}
    WHERE resource_ID=${resource_ID};`;

    // then do the query
    return do_query(query);
};

export default put_resources