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


con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Department Table created");
});