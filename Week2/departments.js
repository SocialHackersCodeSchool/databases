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

//console.log("Connected!");
//var sql = "DROP DATABASE IF EXISTS week2";
//con.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("Database Dropped!");
//});
//
//var sql = "CREATE DATABASE week2";
//con.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("Database Created!");
//});
//
//var sql = "USE week2";
//con.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("Database Is Being Used!");
//});
//
//
//
//con.query("USE WEEK2", function (err, result) {
//    if (err) throw err;
//    console.log("all selected!!S");
//});

//department with fields:(dept_no(Primary Key), title, description, address)`


con.query("CREATE TABLE IF NOT EXISTS department (dept_no INT NOT NULL, title VARCHAR(255) , description TEXT, address varchar(255) , PRIMARY KEY (dept_no));", function (err, result) {
    if (err) throw err;
    console.log("Table Created");
});

let departments = [
    [1, "Logistics", "Manages economics", "Building A"],
    [2, "HR ", "Manages employees", "Building B"],
    [3, "Commercial", "Manages Sales", "Building C"]
]

con.query("INSERT INTO department (dept_no, title, description, address) VALUES ?", [departments], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted at departments table: " + result.affectedRows);
});