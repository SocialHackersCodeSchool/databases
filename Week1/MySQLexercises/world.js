'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password: '4yKt7ckYAQ',
    port: 3306,
    database : 'world'
});

connection.connect((err) =>{
    if(err){
        console.log(err.message);
    } else {
        console.log('connected!');
    }
});

connection.query('select name from country where population > 8000000;', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.query('select name from country where name LIKE "%land%";', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.query('select name from city where population between 500000 and 1000000;', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.query('select name from country where continent = "europe";', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.query('select * from country order by SurfaceArea desc;', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.query('select name from city where countryCode = "nld";', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.query('select population from city where name = "Rotterdam";', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.query('select name from country order by SurfaceArea desc limit 10;', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.query('select name from city order by population desc limit 10;', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.query('select sum(population) from country;', (error, result) => {
    if(error) throw error.message;
    console.log(result);
});

connection.end();

