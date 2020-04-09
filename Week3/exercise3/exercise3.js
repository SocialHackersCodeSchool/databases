function getPopulation(cityOrCountry, name, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
        `SELECT Population FROM ${cityOrCountry} WHERE Name = ${name}`,
        function (err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(null, result[0].name);
        }
    );
}


//1.Give an example of a value that can be passed as name that 
//would take advantage of SQL - injection(for example, to insert new fake data in the database)


// If name = name OR 1=1;   => in that case the OR evaluates to true always, so the access will be granted


//2.Rewrite the function so that it is no longer vulnerable to SQL injection


function getPopulation(cityOrCountry, name, cb) {
    // assuming that connection to the database is established and stored as conn
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT Population from ? WHERE Name = ?", [cityOrCountry, name], function (err, result) {
            if (err) CB(err);
            if (result.length == 0) cb(new Error("Not found"))
            console.log(result);
        });
    });


}

//and this is the other solution, but i think it uses another module. please inform me about the right one!! thank you!!



connection.prepare('SELECT Population FROM ? WHERE Name = ?', (err, statement) => {
    // statement.parameters - array of column definitions, length === number of params, here 2
    // statement.columns - array of result column definitions. Can be empty if result schema is dynamic / not known
    // statement.id
    // statement.query

    statement.execute([cityOrCountry, name], (err, rows, columns) => {
        console.log("population selected")
    });

    // note that there is no callback here. There is no statement close ack at protocol level.
    statement.close();
});