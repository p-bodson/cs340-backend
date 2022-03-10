// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const put_members = async (req) => {

    // first build the query
    let { member_ID, member_first_name, 
        member_last_name, member_phone } = req.body;

    let query = `UPDATE Members
    SET member_first_name="${member_first_name}", 
    member_last_name="${member_last_name}", 
    member_phone="${member_phone}"
    WHERE member_ID=${member_ID};`;

    // then do the query
    return do_query(query);
};

export default put_members