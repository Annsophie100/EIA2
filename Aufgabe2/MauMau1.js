/*
Aufgabe: 02
Name: Annsophie Rösch
Matrikel: 257727
Datum: 07.04.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Aufgabe02;
(function (Aufgabe02) {
    document.addEventListener("DOMContentLoaded", init);
    //_______________________________________________________________________
    //Globale Variablen.
    let kartenDeck;
    let handKarten;
    let kartenStapel;
    let ablageStapel;
    //________________________________________________________________________
    //Hauptprogramm startet
    //Abfrage bei Seitenaufruf
    function init() {
        let karten = prompt("Gebe ein wie viele Karten du ziehen möchtest (mind.1, max31");
        let kartenTotal = parseInt(karten);
        if (isNaN(kartenTotal) || kartenTotal < 1 || kartenTotal > 31) {
            alert("Falsche Eingabe. Versuche es doch noch einmal.");
            location.reload();
        }
        else {
            spielGeneration(kartenTotal);
        }
    }
    //_________________________________________________________________________
    //bereitet die Datenstruktur für das Spiel vor
    function spielGeneration(_karten) {
        //kartenDeck mit Bildern befüllen
        kartenDeck = [
            // 11=bube | 12=dame | 13=könig | 14=ass
            //herz
            "img/he07.jpg", "img/he08.jpg", "img/he09.jpg", "img/he10.jpg",
            "img/he11.jpg", "img/he12.jpg", "img/he13.jpg", "img/he14.jpg",
            //karo
            "img/ka07.jpg", "img/ka08.jpg", "img/ka09.jpg", "img/ka10.jpg",
            "img/ka11.jpg", "img/ka12.jpg", "img/ka13.jpg", "img/ka14.jpg",
            //kreuz
            "img/kr07.jpg", "img/kr08.jpg", "img/kr09.jpg", "img/kr10.jpg",
            "img/kr11.jpg", "img/kr12.jpg", "img/kr13.jpg", "img/kr14.jpg",
            //pik
            "img/pi07.jpg", "img/pi08.jpg", "img/pi09.jpg", "img/pi10.jpg",
            "img/pi11.jpg", "img/pi12.jpg", "img/pi13.jpg", "img/pi14.jpg"
        ];
        //____________________________________________________________________________       
        //kartenDeck mischeln
        let y = 0;
        let temp = null;
        for (let x = kartenDeck.length - 1; x > 0; x -= 1) {
            y = Math.floor(Math.random() * (x + 1));
            temp = kartenDeck[x];
            kartenDeck[x] = kartenDeck[y];
            kartenDeck[y] = temp;
        }
        //_____________________________________________________________________________
        //Hand mit Karten befüllen
        handKarten = kartenDeck.slice(0, _karten);
        //ablagestapel befüllen
        ablageStapel = kartenDeck.slice(_karten, (_karten + 1));
        //KartenStapel befüllen
        kartenStapel = kartenDeck.slice((_karten + 1), kartenDeck.length);
        //_____________________________________________________________________________
        //Funktionsaufruf   
        spielAbschnitt("stapel"); // Nehm Stapel, Rückseitenbild
        spielAbschnitt("ablage"); // Ablagestapel
        spielAbschnitt("hand"); // auf der Hand
    }
    //_____________________________________________________________________________
    //Hier werden die verschiedenen Spielabschnitte generiert und demnach deren Karten
    function spielAbschnitt(_art) {
        let section = document.createElement("section");
        section.id = _art + "Section";
        document.getElementById("main").appendChild(section);
        switch (_art) {
            case "stapel":
                createCard("img/hinten.jpg", document.getElementById(section.id));
                break;
            case "ablage":
                createCard(ablageStapel[0], document.getElementById(section.id));
                break;
            case "hand":
                for (let i = 0; i < handKarten.length; i++) {
                    createCard(handKarten[i], document.getElementById(section.id));
                }
                break;
        }
    }
    function createCard(_src, _parent) {
        let card = document.createElement("img");
        card.src = _src;
        card.classList.add(_src.substring(4, _src.length - 6), _src.substring(_src.length - 6, _src.length - 4));
        _parent.appendChild(card);
    }
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=MauMau1.js.map