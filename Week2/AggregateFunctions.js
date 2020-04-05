var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "week2"
});

con.connect(function (err) {
    if (err) throw err;
    //All department numbers and the number of employees working there.
    con.query("SELECT full_name, title from employee join department on employee.dept_no = department.dept_no;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });


    //Sum of the salaries of all employees.
    con.query("SELECT sum(salary) from employee;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

    //Average of the salaries of all employees.

    con.query("SELECT AVG(salary) from employee;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

    //Sum of the salaries of the employees per department.
    con.query("SELECT title, SUM(SALARY) FROM employee join department on employee.dept_no = department.dept_no GROUP BY title;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

    //Minimum and maximum od the salaries per department.
    con.query("SELECT title, min(SALARY), max(SALARY) FROM employee join department on employee.dept_no = department.dept_no GROUP BY title;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

    //For each salary value, return the number of employees paid.

    con.query("SELECT SALARY, COUNT(*) FROM employee GROUP BY salary;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

















});
