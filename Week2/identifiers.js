var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "week2"
});



//employee fields employeeNo---full name ---salary ---- adress --- manager(id)


let employeeStats = [
    [1, "Nikos Spiropoulos", 30000, "5 Yew Trees", null],
    [2, "Hohn Abbey", 33000, "18 Hilversum Crescent", 1],
    [3, "Maria Morena", 35000, "10 Manor Road", 1],
    [4, "Can Sierra", 20000, "27A Throgmorton Street", 2],
    [5, "Khloe Guzman", 10000, "36 Sutherland Place", null],
    [6, "Edmund Fitzpatrick", 32000, "136 Claverham Road", null],
    [7, "Devonte Rosario", 50000, "Flat 9, Oatfield House", 2],
    [8, "Jannah Mooney", 22000, "Rosewood, Grove Crescent", 1],
    [9, "Mohammed Diaz", 17000, "8 Wrensfield, Hemel Hempstead", null],
    [10, "Tanner Wooten", 13000, "14 Hertford Road, Great Amwell", 1],
    [11, "Suzanna Chapman", 17000, "133 Turnberry Road", 12],
    [12, "Keegan Lewis", 10000, "Panepistimiou 277", 3],
    [13, "Domonic Bryant", 30000, "3 Ashview Close", null],
    [14, "Imaan Partridge", 31000, " Old Habbey 54", 3],
    [15, "Nevie-Mae Sherman", 31000, " Excusions 54", 5],
    [16, "Vivaan Vasquez", 17000, "Saint Clifford St", 5],
    [17, "Tammy Wainwright", 50000, "Bahamian 23", 3],
    [18, "Jordanne Farrell", 30000, "Grove Street 2", null],
    [19, "Maxine Walters", 30500, "Bikini Bottom", 5],
    [20, "Tasmin Hope", 30750, "Rochay Sixtons 21", 5]
]






con.connect(function (err) {
    if (err) throw err;

    console.log("Connected!");
    var sql = "DROP DATABASE IF EXISTS week2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database Dropped!");
    });

    var sql = "CREATE DATABASE week2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database Created!");
    });

    var sql = "USE week2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database Is Being Used!");
    });


    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS employee (employee_no INT AUTO_INCREMENT PRIMARY KEY, full_name VARCHAR(255), salary BIGINT(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });



    con.query("ALTER TABLE employee ADD COLUMN  manager INT;", function (err, result) {
        if (err) throw err;
        console.log("Manager Column Added");
    })

    con.query("ALTER TABLE employee ADD FOREIGN KEY (manager) REFERENCES employee (employee_no);", function (err, result) {
        if (err) throw err;
        console.log("Foreign Key Added !");
    })


    con.query("SET FOREIGN_KEY_CHECKS=0", function (err, result) {
        if (err) throw err;
        console.log("Foreign Key checks successfully disabled!");
    });



    con.query("INSERT INTO employee (employee_no, full_name, salary, address, manager) VALUES ?", [employeeStats], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });





});

