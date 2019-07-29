/*
Abschlussaufgabe
Name: Annsophie Rösch
Matrikel: 257727
Datum: 28.07.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert.
*/
var abschluss;
(function (abschluss) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eiaannsophie.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + abschluss.eingabe + "&punkte=" + abschluss.score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    abschluss.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    abschluss.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let alleSpieler = JSON.parse(xhr.response);
            for (let i = 0; i < alleSpieler.length; i++) {
                alleSpieler.sort(sortScores);
                console.log(alleSpieler[i].punkte);
            }
            console.log(alleSpieler);
            for (let i = 0; i < 6; i++) {
                //score erstellen
                let div = document.createElement("div");
                document.getElementById("liste").appendChild(div);
                div.innerHTML = alleSpieler[i].name + " :";
                div.innerHTML += alleSpieler[i].punkte;
                console.log(alleSpieler[i].name);
            }
        }
    }
    function sortScores(_x, _y) {
        let scoreX = _x.punkte;
        let scoreY = _y.punkte;
        if (scoreX < scoreY) {
            return 1;
        }
        if (scoreX > scoreY) {
            return -1;
        }
        return 0;
    }
})(abschluss || (abschluss = {}));
//# sourceMappingURL=DBClient.js.map