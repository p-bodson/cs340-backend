// here is where the heavy lifting of each route goes.

import do_query from "./do-query.js";

const post_rentals = async (req) => {
    // this function CREATEs a new rental in the Rentals table

    // first build the query
    let { member_ID, library_ID, rental_date } = req.body;
    let query = `INSERT INTO Rentals (member_ID, library_ID, rental_date) 
    VALUES ("${member_ID}", "${library_ID}", "${rental_date}");`;

    // then do the query
    return do_query(query);
};

export default post_rentals