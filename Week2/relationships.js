var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "week2"

});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


con.query("USE WEEK2", function (err, result) {
    if (err) throw err;
    console.log("all selected!!S");
});

//department with fields:(dept_no(Primary Key), title, description, address)`


con.query("CREATE TABLE department (dept_no INT NOT NULL, title VARCHAR(255) , description TEXT, address varchar(255) , PRIMARY KEY (dept_no));", function (err, result) {
    if (err) throw err;
    console.log("Table Created");
});

let departments = [
    [1, "Logistics", "Manages salaries for employees", "Building A"],
    [1, "Logistics", "Manages salaries for employees", "Building A"],
    [1, "Logistics", "Manages salaries for employees", "Building A"]
]

