const db = require('../db/connection');
const cTable = require('console.table');

const getUsers = (id, manager_id) => {
    db.query(
        'SELECT e.id, e.first_name, e.last_name, m.first_name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id WHERE e.id = ? and e.manager_id = ?', 
        [id, manager_id],
        function(err, result) {
            if(err) {
                console.log(err.message);
                return;
            }
            console.table(result);
            return result;
        }
    )
};

module.exports = getUsers;