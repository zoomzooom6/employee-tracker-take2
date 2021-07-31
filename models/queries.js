const db = require('../db/connection');

let getUsers = (id, manager_id) => {
    db.query(
        'SELECT * FROM employees WHERE id = ? and manager_id = ?', 
        [id, manager_id],
        function(err, result) {
            if(err) {
                console.log(err.message);
                return;
            }
            console.log(result);
        }
    )
};

module.exports = getUsers;