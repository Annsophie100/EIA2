/*
Aufgabe: 03
Name: Annsophie Rösch
Matrikel: 257727
Datum: 07.04.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var MauMau2;
(function (MauMau2) {
    document.addEventListener("DOMContentLoaded", init);
    //_______________________________________________________________________
    //Globale Variablen.
    let kartenSpeicher;
    let kartenMixed;
    let kartenHand;
    let kartenStapel;
    let kartenAblage;
    //________________________________________________________________________
    //Hauptprogramm startet
    //Abfrage bei Seitenaufruf
    function init() {
        console.log("call init");
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
        //install EventListener on body | [keydown] releasing [tasteChecken]
        document.body.addEventListener("keydown", tasteChecken);
        //kartenDeck mit Bildern befüllen
        kartenSpeicher = [
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
            "img/pi11.jpg", "img/pi12.jpg", "img/pi13.jpg", "img/pi14.jpg"];
        //Funktion um Karten zu mischen >> neues Array kartenMixed wir befüllt
        kartenMischen();
        //Hand mit Karten befüllen
        kartenHand = kartenMixed.slice(0, _karten);
        //kartenAblage befüllen
        kartenAblage = kartenMixed.slice(_karten, (_karten + 1));
        //KartenStapel befüllen
        kartenStapel = kartenMixed.slice((_karten + 1), kartenMixed.length);
        //_____________________________________________________________________________
        //Funktionsaufruf   
        spielAbschnitt("stapel"); // Nehm Stapel, Rückseitenbild
        spielAbschnitt("ablage"); // kartenAblage
        spielAbschnitt("sortieren"); // Button erstellen
        spielAbschnitt("hand"); // auf der Hand
    }
    //_____________________________________________________________________________
    function kartenMischen() {
        let erfolgreicherDurchlauf = 0;
        let gesamtDurchlauf = 0;
        do {
            //console.log("NEUER DURCHLAUF; bis jetzt:");
            //console.log("erfolgreicherDurchlauf: " + erfolgreicherDurchlauf);
            //console.log("gesamtDurchlauf: " + gesamtDurchlauf);
            // pik random index von Deck
            let random;
            random = Math.floor(Math.random() * kartenSpeicher.length);
            //console.log(random);
            //console.log("picked " + kartenSpeicher[random]);
            //im ersten durchlauf --> kartenMixed noch leer
            if (gesamtDurchlauf == 0) {
                //console.log("erster Durchlauf");
                kartenMixed = kartenSpeicher.slice(random, (random + 1));
                //console.log("start filling mixed array");
                //console.log("erste Karte: " + kartenSpeicher[random]);
                erfolgreicherDurchlauf++;
                gesamtDurchlauf++;
            }
            else {
                //console.log(gesamtDurchlauf + "er gesamtDurchlauf");
                //check, ob schon in kartenMixed vorhanden
                let check = kartenMixed.indexOf(kartenSpeicher[random], 0);
                //prüfen
                //"noch nicht da"
                if (check == -1) {
                    //wir zu kartenMixed gepusht
                    kartenMixed.push(kartenSpeicher[random]);
                    //console.log("Karte noch nicht da");
                    //console.log("neue Karte: " + kartenSpeicher[random]);
                    //console.log("neues Array: " + kartenMixed);
                    erfolgreicherDurchlauf++;
                    gesamtDurchlauf++;
                }
                else {
                    //nix passiert
                    //console.log("karten schon da");
                    gesamtDurchlauf++;
                    continue;
                }
            }
        } while (kartenMixed.length < kartenSpeicher.length);
    }
    //Hier werden die verschiedenen Spielabschnitte generiert und demnach deren Karten
    function spielAbschnitt(_art) {
        let section = document.createElement("section");
        section.id = _art + "Section";
        document.getElementById("main").appendChild(section);
        switch (_art) {
            case "stapel":
                karteErstellen("img/hinten.jpg", document.getElementById(section.id));
                break;
            case "ablage":
                karteErstellen(kartenAblage[0], document.getElementById(section.id));
                break;
            //new____________
            case "sortieren":
                let sortierButton = document.createElement("button");
                sortierButton.id = "sortierButton";
                sortierButton.innerHTML = "sortieren";
                sortierButton.addEventListener("click", kartenSortieren);
                document.getElementById(section.id).appendChild(sortierButton);
                break;
            //new ende_________
            case "hand":
                for (let i = 0; i < kartenHand.length; i++) {
                    karteErstellen(kartenHand[i], document.getElementById(section.id));
                }
                break;
            default: break;
        }
    }
    function karteErstellen(_src, _section) {
        console.log("karte erstellen" + _src);
        let karte = document.createElement("img");
        karte.src = _src;
        karte.classList.add(_src.substring(4, _src.length - 6), _src.substring(_src.length - 6, _src.length - 4));
        //new__________________________
        //following commands are dependent on value of parameter [_parent.id]
        switch (_section.id) {
            //for value ["stackSec"]
            case "stapelSection":
                //install EventListener on [card] | [click] releasing [takeCard]
                karte.addEventListener("click", karteNehmen);
                console.log("INSTALL LISTENER");
                break;
            //for value ["handSec"]
            case "handSection":
                //install EventListener on [card] | [click] releasing [playCard]           
                karte.addEventListener("click", karteSpielen);
                console.log("INSTALL LISTENER");
                break;
            default: break;
        }
        _section.appendChild(karte);
    }
    //______________Events____________________________________________    
    function tasteChecken(_event) {
        //if(condition space is pressed key)
        if (_event.keyCode == 32) {
            // call [takeCard] & transfer [_event] as a parameter 
            karteNehmen(_event);
        }
    }
    //_____Karten sortieren____________________________________________
    function kartenSortieren(_event) {
        //the sort() method sorts the items of an array [cardContentHand] in alphabetical order
        kartenHand.sort();
        //the removeChild() method removes a specified child node of the specified element
        //main removes it's child Element [handSec] & it'S children
        document.getElementById("main").removeChild(document.getElementById("handSection"));
        //calls [createSection] & transfers parameter ["hand"]
        spielAbschnitt("hand");
    }
    //_____Karte nehmen (von stapel auf hand)__________________________
    function karteNehmen(_event) {
        console.log("fire karte Nehmen");
        //declare [takenCard] & assgin [cardContentStack.pop()] as it's value
        //the pop() method removes the last element of an array, & returns that element
        let genommeneKarte = kartenStapel.pop();
        //if(condition for an empty [cardContentStack] array)
        if (kartenStapel.length < 1) {
            //[true]
            //remove EventListener from body | [keydown] releasing [spaceDown]
            document.body.removeEventListener("keydown", tasteChecken);
            //remove EventListener from img in [stackSec] | [click] releasing [takeCard]
            //first get element by id [stackSec], then refer to it's first an only child
            //because the [img] itself has no id this indirect way is necessary to get access to the [stackSec<img]
            document.getElementById("ablageSection").firstChild.removeEventListener("click", karteNehmen);
        }
        //the push() method adds new items to the end of an array, & returns the new length
        //push [takenCard] at the end of [cardContentHand]
        kartenHand.push(genommeneKarte);
        //call [createCard] & transfer parameters [takenCard] & [handSec]
        karteErstellen(genommeneKarte, document.getElementById("handSection"));
    }
    //_____Karte spielen (von hand auf ablage)___________________________
    function karteSpielen(_event) {
        console.log("fire karte Spielen");
        //declare [kartenTarget] & assgin [_event.target] as it's value
        let kartenTarget = _event.target;
        //declare [arrayPosition] & assgin [array.IndexOf([kartenTarget.src])] as it's value
        //the indexOf() method searches the array for the specified item, & returns its position
        let arrayPosition = kartenHand.indexOf(kartenTarget.src);
        //the splice() method adds/removes items to/from an array, & returns the removed item(s)
        //splices out the index element number which is [_event.target]
        kartenHand.splice(arrayPosition, 1);
        //push() [kartenTarget.src] at the end of [cardContentDiscard]
        kartenAblage.push(kartenTarget.src);
        //[handSec] removes [_event.target] & it's children
        kartenTarget.parentNode.removeChild(kartenTarget);
        //remove EventListener from kartenTarget | [click] releasing [playCard]
        kartenTarget.removeEventListener("click", karteSpielen);
        //[discardSec] appends [kartenTarget] a it's child
        document.getElementById("ablageSection").appendChild(kartenTarget);
    }
})(MauMau2 || (MauMau2 = {})); //namespace zu      
//# sourceMappingURL=MauMau2.js.map