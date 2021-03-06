"use strict";
/*
Aufgabe: 06-2
Name: Annsophie Rösch
Matrikel: 257727
Datum: 05.05.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// importiert Datei als http
const Http = require("http");
var eisdealer_server;
(function (eisdealer_server) {
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
        console.log("Eiszzzzzzzeit!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        _response.end();
    }
})(eisdealer_server || (eisdealer_server = {}));
//# sourceMappingURL=Server.js.map