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
    var sql = "CREATE TABLE IF NOT EXISTS employee (employee_no INT AUTO_INCREMENT PRIMARY KEY, full_name VARCHAR(255), salary BIGINT(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });



    con.query("ALTER TABLE employee ADD COLUMN manager VARCHAR(255);", function (err, result) {
        if (err) throw err;
        console.log("Manager Column Added");
    })

    //adding a foreing key which is gonna BE managers column

    con.query("ALTER TABLE employee ADD CONSTRAINT MANAGER FOREIGN KEY(manager) REFERENCES employee (manager);;", function (err, result) {
        if (err) throw err;
        console.log("Manager Column Added");
    })

});