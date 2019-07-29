/* 
Abschlussaufgabe
Name: Annsophie Rösch
Matrikel: 257727
Datum: 28.07.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert. 
*/

import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "test";
let db: Mongo.Db;
let spieler: Mongo.Collection;

if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://testuser:123@testeia-an5by.mongodb.net/game";
    databaseName = "game";
}

Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        spieler = db.collection("score");
    }
}

export function insert(_doc: Spieler): void {
    spieler.insertOne(_doc, handleInsert);
}

function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned an >> " + _e);
}

export function findAll(_callback: Function): void {
    var cursor: Mongo.Cursor = spieler.find();
    console.log(spieler.find());
    cursor.toArray(prepareAnswer);

    function prepareAnswer(_e: Mongo.MongoError, _spielerArr: Spieler[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(_spielerArr));
    }
}

export function search(_callback: Function, _find: string): void {
    let matrikelnummer: number = Number(_find);
    spieler.find({ "matrikel": matrikelnummer }).toArray(prepareAnswer);


    function prepareAnswer(_e: Mongo.MongoError, _spielerArr: Spieler[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(_spielerArr));
    }
}