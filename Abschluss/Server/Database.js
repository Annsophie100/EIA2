"use strict";
/*
Abschlussaufgabe
Name: Annsophie Rösch
Matrikel: 257727
Datum: 28.07.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "test";
let db;
let spieler;
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://testuser:123@testeia-an5by.mongodb.net/game";
    databaseName = "game";
}
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        spieler = db.collection("score");
    }
}
function insert(_doc) {
    spieler.insertOne(_doc, handleInsert);
}
exports.insert = insert;
function handleInsert(_e) {
    console.log("Database insertion returned an >> " + _e);
}
function findAll(_callback) {
    var cursor = spieler.find();
    console.log(spieler.find());
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, _spielerArr) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(_spielerArr));
    }
}
exports.findAll = findAll;
function search(_callback, _find) {
    let matrikelnummer = Number(_find);
    spieler.find({ "matrikel": matrikelnummer }).toArray(prepareAnswer);
    function prepareAnswer(_e, _spielerArr) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(_spielerArr));
    }
}
exports.search = search;
//# sourceMappingURL=Database.js.map