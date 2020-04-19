var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "company"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS skills (skill_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table 'skills' created");
    });

    // add skills to skills table

    const skills = [
        ['Node.JS'],
        ['SQL'],
        ['ReactJs'],
        ['SCRUM'],
        ['Mongo DB']
    ]


    con.query("INSERT INTO skills ( name) VALUES ?", [skills], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });

    con.query('CREATE TABLE IF NOT EXISTS skillsperemp ( emp_no int NOT NULL, skill_id INT);', function (err, result) {
        if (err) throw err;
        console.log("Table 'skilled Employees' created");
    });

    con.query('ALTER TABLE skillsperemp ADD FOREIGN KEY (skill_id) REFERENCES skills(skill_id);', function (err, result) {
        if (err) throw err;
        console.log("Foreing key skill id added ");
    });

    con.query('ALTER TABLE skillsperemp ADD FOREIGN KEY (emp_no) REFERENCES employees(emp_no);', function (err, result) {
        if (err) throw err;
        console.log("Foreing key emp_no added");
    });

    const skillsPerEmployee = [

        [1, 5],
        [2, 1],
        [3, 5],
        [4, 1],
        [5, 5],
        [6, 1],
        [7, 5],
        [8, 1],
        [9, 5],
        [10, 3],

        [1, 1],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 1],
        [6, 3],
        [7, 1],
        [8, 4],
        [9, 3],
        [10, 4]
    ]





    con.query("INSERT INTO skillsperemp ( emp_no, skill_id) VALUES ?", [skillsPerEmployee], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});



// skills per employee data

