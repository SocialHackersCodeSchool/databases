

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "week2"
});

con.connect(function (err) {
    if (err) throw err;

    //Write a query that retrieves all employees and their corresponding manager's full name.



    con.query("select a.full_name 'A', b.full_name 'B' from employee a join employee b on a.employee_no = b.manager;", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
    });


    //Write a query that retrieves all employees and their working department title. If no employee worked in a specific department, return the department too.

    con.query("SELECT full_name, title FROM employee JOIN department ON employee.dept_no - department.dept_no;", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
    });
});