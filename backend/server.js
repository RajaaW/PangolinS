const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://pangolin:pangolin@cluster0-5mkpj.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "pangolin";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
    extended: true
}));

var database, collection;

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, {
        useNewUrlParser: true
    }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("pangolins");
        console.log("Connected to " + DATABASE_NAME + "!");
    });
});

app.post("/person", (req, res) => {
    collection.insert(req.body, (error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
});

app.get("/people", (req, res) => {
    collection.find({}).toArray((error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
});

app.get("/person/:id", (req, res) => {
    collection.findOne({
        "_id": new ObjectId(req.params.id)
    }, (error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
});
