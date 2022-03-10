// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const delete_members = async (req) => {

    // first build the query
    let { member_ID } = req.body;
    let query = `DELETE FROM Members
        WHERE member_ID=${member_ID};`;

    // then do the query
    return do_query(query);
};

export default delete_members