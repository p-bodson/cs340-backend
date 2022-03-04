// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_members = async (req) => {
    // this function CREATEs a new member in the Members table

    // first build the query
    let { member_first_name, member_last_name, member_phone } = req.body;
    let query = `INSERT INTO Members (member_first_name, member_last_name, member_phone) 
    VALUES ("${member_first_name}", "${member_last_name}", "${member_phone}");`;

    // then do the query
    return do_query(query);
};

export default post_members