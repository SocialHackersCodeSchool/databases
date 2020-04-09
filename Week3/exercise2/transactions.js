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
    con.beginTransaction(function (err) {
        if (err) { throw err; }
        con.query(`update departments SET manager = ${emp_no} WHERE dept_no = ${dept_no}; `, function (err, result) {
            if (err) {
                con.rollback(function () {
                    throw err;
                });
            }



            con.query(`update employees SET reports_to = ${emp_no} WHERE department = ${dept_no}; `, function (err, result) {
                if (err) {
                    connection.rollback(function () {
                        throw err;
                    });
                }
                con.commit(function (err) {
                    if (err) {
                        con.rollback(function () {
                            throw err;
                        });
                    }
                    console.log('Transaction Complete.');
                    con.end();
                });
            });
        });
    });
    /* End transaction */

}

//testing the flatify function
flatify(2, 5);