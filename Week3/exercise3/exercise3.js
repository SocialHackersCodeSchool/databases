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
    conn.query(
        `PREPARE getPopulation FROM SELECT population FROM idone where name = idtwo;`,
        function (err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(null, result[0].name);
        }

    conn.query(
            `SET @idone = ${cityOrCountry};`,
            function (err, result) {
                if (err) cb(err);
                if (result.length == 0) cb(new Error("Not found"));
                cb(null, result[0].name);
            }
    conn.query(
                `SET @idtwo = ${name};`,
                function (err, result) {
                    if (err) cb(err);
                    if (result.length == 0) cb(new Error("Not found"));
                    cb(null, result[0].name);
                }

    conn.query(
                    `EXECUTE getPopulation USING @idone, @idtwo`,
                    function (err, result) {
                        if (err) cb(err);
                        if (result.length == 0) cb(new Error("Not found"));
                        cb(null, result[0].name);
                    }
                );
}

