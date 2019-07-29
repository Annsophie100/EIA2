/* 
Abschlussaufgabe
Name: Annsophie Rösch
Matrikel: 257727
Datum: 28.07.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert. 
*/

namespace abschluss {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eiaannsophie.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + eingabe + "&punkte=" + score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let alleSpieler: Spieler[] = JSON.parse(xhr.response);
            for (let i: number = 0; i < alleSpieler.length; i++) {
                alleSpieler.sort(sortScores);
                console.log(alleSpieler[i].punkte);
            }
            console.log(alleSpieler);
            for (let i: number = 0; i < 6; i++) {
                //score erstellen
                let div = document.createElement("div");
                document.getElementById("liste").appendChild(div);
                div.innerHTML = alleSpieler[i].name + " :";
                div.innerHTML += alleSpieler[i].punkte;
                console.log(alleSpieler[i].name);
            }

        }
    }

    function sortScores(_x: Spieler, _y: Spieler): number {//Array sortieren
        let scoreX: number = _x.punkte;
        let scoreY: number = _y.punkte;
        if (scoreX < scoreY) {
            return 1;
        }
        if (scoreX > scoreY) {
            return -1;
        }
        return 0;
    }
}