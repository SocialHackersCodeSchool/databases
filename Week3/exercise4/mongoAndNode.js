var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://spiropoulos94:mongodb1994@firstcluster-kckgn.mongodb.net/test?retryWrites=true&w=majority";


const myCity = {
    Name: "Irakleio",
    CountryCode: "GR",
    District: "Crete",
    Population: "150525"

}

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("world");

    dbo.collection("city").insertOne(myCity, function (err, res) {
        if (err) throw err;
        console.log("1 city inserted");

    })

    dbo.collection("city").find({ Name: 'Irakleio' }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);

    })

    dbo.collection("city").updateOne({ Name: "Irakleio" }, { $set: { Population: "250654" } }, function (err, res) {
        if (err) throw err;
        console.log("1 city updated");


    })


    dbo.collection("city").deleteMany({ Name: "Irakleio" }, function (err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();

    })


})