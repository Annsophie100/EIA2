"use strict";
/*
Aufgabe: 07
Name: Annsophie Rösch
Matrikel: 257727
Datum: 12.05.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var L07_Server;
(function (L07_Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        for (let key in url.query) {
            let responseString = "";
            switch (key) {
                case ("Eis"):
                    responseString += key + "sorte: " + url.query[key];
                    console.log(responseString);
                    break;
                case ("Streusel"):
                case ("Topping"):
                    responseString += key + ": " + url.query[key];
                    console.log(responseString);
                    break;
                case ("Cream"):
                case ("Lieferart"):
                case ("Lieferdienst"):
                    responseString += key + ": " + url.query[key];
                    console.log(responseString);
                    break;
                case ("Behaelter"):
                    responseString += url.query[key];
                    console.log(responseString);
                    break;
                default: break;
            }
            _response.write("<p>" + responseString + "</p>");
            console.log(_request.url);
        }
        _response.end();
    }
})(L07_Server || (L07_Server = {})); //namespace wird geschlossen
//# sourceMappingURL=server.js.map