/* 
Aufgabe: 03
Name: Annsophie Rösch
Matrikel: 257727
Datum: 14.04.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace MauMau2 {

    document.addEventListener("DOMContentLoaded", init);
    //_______________________________________________________________________
    //Globale Variablen.
    let kartenSpeicher: string[];
    let kartenMixed: string[];
    let kartenHand: string[];
    let kartenStapel: string[];
    let kartenAblage: string[];
    //________________________________________________________________________
    //Hauptprogramm startet
    //Abfrage bei Seitenaufruf
    function init(): void {
        console.log("call init");
        let karten: string = prompt("Gebe ein wie viele Karten du ziehen möchtest (mind.1, max31");
        let kartenTotal: number = parseInt(karten);
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
    function spielGeneration(_karten: number): void {

        //install EventListener für Leertaste >> Karte nehmen
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
    //_____neue mischfunktion___________________
    function kartenMischen(): void {
        let erfolgreicherDurchlauf: number = 0;
        let gesamtDurchlauf: number = 0;
        do {
            let random: number;
            // Zufallszahl zwischen 0(inklusive) und 32(exklusive)
            random = Math.floor(Math.random() * kartenSpeicher.length);

            //im ersten Durchlauf >> kartenMixed noch leer
            if (gesamtDurchlauf == 0) {
                kartenMixed = kartenSpeicher.slice(random, (random + 1));
                erfolgreicherDurchlauf++;
                gesamtDurchlauf++;
            }
            //in allen anderen Durchläufen
            else {
                //prüfen
                let check: number = kartenMixed.indexOf(kartenSpeicher[random], 0);
                //"noch nicht da" >> indexOf() gibt für nicht auffindbare Inhalte "-1" zurück
                if (check == -1) {
                    //wir zu kartenMixed gepusht
                    kartenMixed.push(kartenSpeicher[random]);
                    erfolgreicherDurchlauf++;
                    gesamtDurchlauf++;
                }
                // Karte wird von indexOf() in kartenMixed gefunden
                else {
                    //nichts passiert
                    gesamtDurchlauf++;
                    continue;
                }
            }
        }
        // Laufbedingung_____________________________________
        while (kartenMixed.length < kartenSpeicher.length);
    }

    //______________________________________________________________________________________________
    //Hier werden die verschiedenen Spielabschnitte generiert und demnach deren Karten

    function spielAbschnitt(_art: string): void {
        let section: HTMLElement = document.createElement("section");
        section.id = _art + "Section";
        document.getElementById("main").appendChild(section);
        switch (_art) {
            case "stapel":
                karteErstellen("img/hinten.jpg", document.getElementById(section.id));
                break;
            case "ablage":
                karteErstellen(kartenAblage[0], document.getElementById(section.id));
                break;
            case "hand":
                for (let i: number = 0; i < kartenHand.length; i++) {
                    karteErstellen(kartenHand[i], document.getElementById(section.id));
                }
                break;
            //neuer case___________
            case "sortieren":
                let sortierButton: HTMLButtonElement = document.createElement("button");
                sortierButton.id = "sortierButton";
                sortierButton.innerHTML = "sortieren";
                //Eventlistener auf Button installieren 
                sortierButton.addEventListener("click", kartenSortieren);
                document.getElementById(section.id).appendChild(sortierButton);
                break;
            //___________________
            default: break;
        }
    }

    function karteErstellen(_src: string, _section: HTMLElement): void {
        console.log("karte erstellen" + _src);
        let karte: HTMLImageElement = document.createElement("img");
        karte.src = _src;
        karte.classList.add(
            _src.substring(4, _src.length - 6),
            _src.substring(_src.length - 6, _src.length - 4)
        );

        //neu >> EventListener auf Karten installieren________________
        switch (_section.id) {
            case "stapelSection":
                karte.addEventListener("click", karteNehmen);
                console.log("INSTALL LISTENER");
                break;
            case "handSection":        
                karte.addEventListener("click", karteSpielen);
                console.log("INSTALL LISTENER");
                break;
            default: break;
        }
        //____________________________________________________________
        _section.appendChild(karte);
    }

    //______________Events____________________________________________    

    //_____gedrückte Taste anhand von keyCode checken
    function tasteChecken(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) {
            karteNehmen(_event);
        }
    }

    //_____Karten sortieren____________________________________________
    function kartenSortieren(_event: MouseEvent): void {
        kartenHand.sort();
        // löschen "alter" Handkarten
        document.getElementById("main").removeChild(document.getElementById("handSection"));
        // generieren "neuer", sortierter Handkarten
        spielAbschnitt("hand");
    }

    //_____Karte nehmen (von stapel auf hand)__________________________
    function karteNehmen(_event: Event): void {
        let genommeneKarte: string = kartenStapel.pop();
        // wenn Kartenstapel leer
        if (kartenStapel.length < 1) {
            // EventListener deinstallieren (space + click)
            document.body.removeEventListener("keydown", tasteChecken);
            document.getElementById("ablageSection").firstChild.removeEventListener("click", karteNehmen);
        }
        //Karte in Handarray pushen & diese erstellen
        kartenHand.push(genommeneKarte);
        karteErstellen(genommeneKarte, document.getElementById("handSection"));
    }

    //_____Karte spielen (von hand auf ablage)___________________________
    function karteSpielen(_event: MouseEvent): void {
        //event.target ausfindig machen & danach im array suchen
        let kartenTarget: HTMLImageElement = <HTMLImageElement>_event.target;
        let arrayPosition: number = kartenHand.indexOf(kartenTarget.src);
        //geclickte Karte aus Handarray auschneiden und in Ablage pushen
        kartenHand.splice(arrayPosition, 1);
        kartenAblage.push(kartenTarget.src);
        // Karte von Hand löschen & Eventlistener für click deinstallieren
        kartenTarget.parentNode.removeChild(kartenTarget);
        kartenTarget.removeEventListener("click", karteSpielen);
        //gespielte Karte in neue Section "umspeichern"
        document.getElementById("ablageSection").appendChild(kartenTarget);
    }
}     