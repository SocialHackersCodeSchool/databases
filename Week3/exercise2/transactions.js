var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "company"
});

con.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Database connected');
});




// transaction begins here

function flatify(dept_no, emp_no) {

    /* Begin transaction */
    connection.beginTransaction(function (err) {
        if (err) { throw err; }
        connection.query(`update departments SET manager = ${emp_no} WHERE dept_no = ${dept_no}; `, function (err, result) {
            if (err) {
                connection.rollback(function () {
                    throw err;
                });
            }

            var log = result.insertId;

            connection.query('INSERT INTO log SET logid=?', log, function (err, result) {
                if (err) {
                    connection.rollback(function () {
                        throw err;
                    });
                }
                connection.commit(function (err) {
                    if (err) {
                        connection.rollback(function () {
                            throw err;
                        });
                    }
                    console.log('Transaction Complete.');
                    connection.end();
                });
            });
        });
    });
    /* End transaction */

}