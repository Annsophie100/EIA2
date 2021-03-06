"use strict";
/*
Aufgabe: 06 - Konzeption
Name: Annsophie Rösch
Matrikel: 257727
Datum: 01.05.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// importiert Datei als http
const Http = require("http");
// eröffnen von Namespace
var A061_Konzept;
(function (A061_Konzept) {
    // Konsolenausgabe von string "Starting server"
    console.log("Starting server");
    // process.env.PORT ist eine Nummer, der port definiert den Server, der man selbst ist (process.env = Umgebung des Prozesses)
    let port = Number(process.env.PORT);
    // falls der port nicht definiert ist/ es keinen port gibt (! = logical not)
    if (!port)
        // soll port 8100 sein, damit man sich mit port verbinden kann
        port = 8100;
    // erstelle Variable mit dem Namen Server vom Typ Http.Server; 
    // deren Wert die Methode Http.createServer() ist
    let server = Http.createServer();
    // Listener auf Server installieren; hört auf "request" >> Funktion "handleRequest" aufgerufen
    server.addListener("request", handleRequest);
    // Listener auf Server installieren; hört auf "listening" >> Funktion "handleListen" aufgerufen
    server.addListener("listening", handleListen);
    // checkt, welcher port benutzt wird
    server.listen(port);
    // Funktion "handleListen" wird erstellt; kein Rückgabewert
    function handleListen() {
        // Konsolenausgabe von string "Listening"
        console.log("Listening");
    }
    // Funktion "handleRequest" wird erstellt; kein Rückgabewert
    // Parameter: _request: Http.IncomingMessage, _response: Http.ServerResponse
    // gibt bei einer incomingMessage eine ServerResponse zurück
    function handleRequest(_request, _response) {
        // Konsolenausgabe von string "I heare voices!"
        console.log("I hear voices!");
        // dem Header werden die Werte für "content-type" zugeteilt >> "text/html; charset=utf-8" 
        // >> um die Nachricht auszugeben
        _response.setHeader("content-type", "text/html; charset=utf-8");
        // dem Header werden die Wert für Access-Control-Allow-Origin zugeteilt >> "*" (alle)
        // >> erlaubt die Aussage des Nutzers mit der Quelle zu teilen
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Schreibt was "_request.url" ist
        _response.write(_request.url);
        // schreibt "_request.url" auch in console
        console.log(_request.url);
        // Konversation wird beendet
        _response.end();
    }
})(A061_Konzept || (A061_Konzept = {}));
//# sourceMappingURL=Server.js.map