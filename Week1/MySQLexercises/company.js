'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '4yKt7ckYAQ',
  database: 'company'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }else{
      console.log('Connected!');
  }
 
  connection.query('CREATE DATABASE IF NOT EXISTS company', (err, results) => {
    if(err) throw err;
    console.log('Company Database Created', results);
  });
 
  let employees = 'CREATE TABLE IF NOT EXISTS employees (emp_no int primary key auto_increment, emp_name varchar(255) not null, salary int not null,reports_to varchar(525) not null)';
  connection.query(employees, (err, results) => {
      if(err) throw err;
      console.log('Employees table created!', results);
  });

  let sql = "INSERT INTO employees (emp_name, salary, reports_to) VALUES ?";
  let values = [
    ['Jallow', 5000, 'Managing Director'],
    ['James', 2000, 'Houman Resources Management'],
    ['John', 1000, 'Managing Director'],
    ['Zarah', 5000, 'Managing Director'],
    ['sara', 2000, 'Houman Resources Management'],
    ['Baldeh', 4000, 'Managing Director'],
    ['Stef', 3000, 'Managing Director'],
    ['Jallow', 5000, 'Product Management'],
    ['Ben', 2000, 'Managing Director'],
    ['Mike', 5000, 'Product Management']
  ];
  connection.query(sql, [values], (err, results) =>{
    if (err) throw err;
    console.log("Number of records inserted to employees table: " + results.affectedRows);
  });

  let department = 'CREATE TABLE IF NOT EXISTS Departments (dept_no int primary key auto_increment, dept_name varchar(255), manager varchar(255))';
  connection.query(department, (err, results) => {
    if(err) throw err; 
    console.log('Department table created!', results);
  });
  
  let sql_department = "INSERT INTO Departments (dept_name, manager) VALUES ?";
  let values_dept = [
    ['Information and Techonolgy ', 'Jallow'],
    ['Reserch and Development', 'Alexis'],
    ['Purchasing and Development', 'Alexandra'],
    ['Houman Resources Management', 'Zarah'],
    ['Accounting and Finance', 'Kriakos'],
    ['Organisational', 'Baldeh'],
    ['Product and Manufacturing', 'Stef'],
    ['Operation', 'Mike'],
    ['Sales and Marketing', 'Ben'],
    ['Public Relation', 'Jallow']
  ];
  connection.query(sql_department, [values_dept], (err, results) =>{
    if (err) throw err;
    console.log("Number of records inserted into department table: " + results.affectedRows);
  });

  let proj = 'CREATE TABLE IF NOT EXISTS Projects (proj_no int primary key auto_increment, proj_name varchar(255), starting_date date not null, ending_date date not null)';
  connection.query(proj, (err, results) => {
      if(err) throw err;
      console.log('Project table created!', results);
  });

  let sql_pro = "INSERT INTO Projects (proj_name, starting_date, ending_date) VALUES ?";
  let values_pro = [
    ['Information and Techonolgy ', '2020/02/01', '2020/06/02'],
    ['Reserch and Development', '2010/02/03', '2020/09/30'],
    ['Purchasing and Development', '2019/03/31', '2019/06/06'],
    ['Houman Resources Management', '2019/12/12', '2020/10/10'],
    ['Accounting and Finance', '2018/11/21', '2019/04/08'],
    ['Organisational', '2020/02/02', '2020/12/15'],
    ['Product and Manufacturing', '2020/11/04', '2020/11/06'],
    ['Operation', '2010/09/09', '2012/09/09'],
    ['Sales and Marketing', '2020/05/01', '2020/10/10'],
    ['Public Relation', '2011/10/24', '2021/10/25']
  ];
  connection.query(sql_pro, [values_pro], (err, results) =>{
    if (err) throw err;
    console.log("Number of records inserted into project table: " + results.affectedRows);
  });

  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });

});