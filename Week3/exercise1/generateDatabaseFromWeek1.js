const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'company'
});

connection.connect();

const employees = [
    [1, 'Alexis Zhang', 12000, 'Victoria Marquez'],
    [2, 'Leana Rolland', 30000, 'Corey Phillips'],
    [3, 'Caroline Ross', 140000, 'Cameron Brown'],
    [4, 'Toivo Wuori', 90000, 'Madeleine Melchior'],
    [5, 'Angeles Nunez', 20000, 'Roméo Rodriguez'],
    [6, 'Christianus Cools', 150000, 'Vilde Kyllingstad'],
    [7, 'Tina Guerin', 50000, 'Madeleine Melchior'],
    [8, 'Marvin Garrett', 34000, 'Adam Kowalski'],
    [9, 'Jovelino Ribeiro', 73000, 'Madeleine Melchior'],
    [10, 'Madeleine Melchior', 600500, 'Ella Bergeron']
];

const departments = [
    [1, 'Administrative', 'Luke Skywalker'],
    [2, 'Marketing', 'Claas Wieczorek'],
    [3, 'Engineering', 'Lino da Rocha'],
    [4, 'Finance', 'Veera Ylitalo'],
    [5, 'Product Management', 'Dale Turner'],
    [6, 'Customer Support', 'Manuel Clark'],
    [7, 'Government Relations', 'Adam Kowalski'],
    [8, 'Legal Relations', 'Adèle Duval'],
    [9, 'Account Management', 'Paula Vargas'],
    [10, 'Risk Management', 'Angela Moss']
];

const projects = [
    [1, 'Webtrace', new Date('2018-06-15'), new Date('2019-01-23')],
    [2, 'Systron', new Date('2016-03-29'), new Date('2017-05-02')],
    [3, 'Kropper', new Date('2014-04-06'), new Date('2016-11-20')],
    [4, 'Vendware', new Date('2019-03-04'), new Date('2010-03-19')],
    [5, 'Bannerlord', new Date('2012-09-12'), new Date('2010-03-31')],
    [6, 'Playabl', new Date('2015-02-27'), new Date('2017-03-03')],
    [7, 'PlayablLite', new Date('2019-03-10'), new Date('2019-11-20')],
    [8, 'Kensei', new Date('2015-08-04'), new Date('2018-03-17')],
    [9, 'Koru', new Date('2018-09-12'), new Date('2010-06-21')],
    [10, 'Beathy', new Date('2020-01-01'), new Date('2020-06-27')]
];

connection.query(
    'CREATE TABLE Employees (emp_no INT PRIMARY KEY, emp_name TEXT, salary INT, reports_to TEXT);',
    (error, results) => {
        if (error) throw error;
        console.log(results);
    });

connection.query(
    'CREATE TABLE Departments (dept_no INT, dept_name TEXT, manager TEXT);',
    (error, results) => {
        if (error) throw error;
        console.log(results);
    });

connection.query(
    'CREATE TABLE Projects (proj_no INT, proj_name TEXT, starting_date DATE, ending_date DATE);',
    (error, results) => {
        if (error) throw error;
        console.log(results);
    });

connection.query(
    `INSERT INTO Employees (emp_no, emp_name, salary, reports_to) VALUES ?`, [employees], (err) => {
        console.error(err)
    }
);

connection.query(
    `INSERT INTO Departments (dept_no, dept_name, manager) VALUES ?`, [departments], (err) => {
        console.error(err);
    }
);

connection.query(`
  INSERT INTO Projects (proj_no, proj_name, starting_date, ending_date) VALUES ?`, [projects], (err) => {
    console.error(err);
}
);

connection.end();
