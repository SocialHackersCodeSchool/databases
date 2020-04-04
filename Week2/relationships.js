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


con.query("SELECT * FROM employee;", function (err, result) {
    if (err) throw err;
    console.log("all selected!!S");
});