/* 
Aufgabe: 02
Name: Annsophie Rösch
Matrikel: 257727
Datum: 04.04.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace Aufgabe02 {

    document.addEventListener("DOMContentLoaded", init); //installiert einen Event listener, wartet drauf bis die seite geladen ist (der DOM) um init auszuführen.

    //Globale Variablen. Man kann im kompletten Programm darauf zugreifen. Leere Arrays vom Typ String
    let kartendeck: string[];
    let handkarten: string[];
    let kartenstapel: string[];
    let startKarte: string[];
    let main: HTMLElement = document.getElementById("main"); //eine Variable vom Typ HTML Element. Erzeugt Main. Sucht im HTML Main und greift auf id Main zu.

    function init(): void {   // initialisierungsfunktion. Funktion ersten Ranges, ist Übergeordnet. Hauptmethode.
        let cards: string = prompt("Gebe ein wie viele Karten du ziehen möchtest (mind.1, max31"); // Ich mache eine Variable. das Fenster Poppt mit Prompt auf. Im String steht was im Fenster steht.
        let cardsSum: number = parseInt(cards); // Wandelt den eingegebenen String in eine Number um
        if (isNaN(cardsSum) || cardsSum < 1 || cardsSum > 31) { // Prüfbedingung - Wenn es keine Zahl ist oder nicht zu trifft FALSCHE eingabe
            //wenn die eigabe den Falsch bedingungen entspricht, dann passiert location Reload
            alert("Falsche Eingabe.");
            location.reload(); //Aktualisiert und man kann nochmal eine Zahl bei Prompt eigeben. Man könnte auch init machen aber dann steht das Falsche immer Über dem anderen.
        }
        //wenn if nicht zu trifft also die Eingabe krrekt ist wird das Game created.
        else {
            createGame(cardsSum); // Ich übergebe das was der Spieler eigegeben hat.
        }
    }

    function createGame(_cards: number): void { // Cards war Cards Sum und das ist das was der dude eingegeben hat.
        
        // die Bedeutung des Image Codes schreiben und die Imgs im Array speichern.
        kartendeck = [
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
            "img/pi11.jpg", "img/pi12.jpg", "img/pi13.jpg", "img/pi14.jpg" ];
        //calls [shuffleArray] & transfers [kartendeck] as a parameter
        
        //kartendeck mischeln
        let y: number = 0;
        let random: any = null;
        for (let x: number = kartendeck.length - 1; x > 0; x -= 1) {
            y = Math.floor(Math.random() * (x + 1));
            random = kartendeck[x];
            kartendeck[x] = kartendeck[y];
            kartendeck[y] = random;
        }


        //the slice() method returns the selected elements in an array, as a new array object
        //assign sliced out elements, dependet on [_cards] as [handkarten]'s value
        handkarten = kartendeck.slice(0, _cards); // ich teile in die #Hand aus die Anzahl die der Typ wollte aus Kartendeck gemischt
        //assign sliced out element, dependet on [_cards] as [startKartes]'s value
        startKarte = kartendeck.slice(_cards, (_cards + 1)); //hier gehts um den Ablagestapel Eine Karte liegt offen da
        // ich fang wieder damit an was der dude eingegeben hat. Die karte die nach den zb 5 Karten kommt die der dude genommen hat ist dann offen auf dem Ablagestapel
        
        // Neues Array wird aus Elementen vom Kardendeck erstellt. Elemente sind aber noch im Kartendeck gespeichert
        //assign sliced out elements, dependet on [_cards] as [kartenstapel]'s value
        kartenstapel = kartendeck.slice((_cards + 1), kartendeck.length); // die karten in meinem Speicher, die ich noch nicht benutzt habe. ab Karte 7 bis zum Schluss im BSp. Lenh geht nach der Anzahl
        //calls [createSection] & transfers [string] as parameter

        //Funktionsaufruf   DER ORT IN DEM DIE KARTEN ANGEZEIGT WERDEN.

        // Css Ids erstellen
        createSection("stack"); // Nehm Stapel, Rückseitenbild
        createSection("discard"); // Ablagestapel
        createSection("hand"); // auf der Hand
    }

    

    function createSection(_name: string): void {
        //declare [section] & assgin created section Element as it's value
        let section: HTMLElement = document.createElement("section"); // es wird eine Section erstellt
        //define id >> parameter [_name] + [string] => id
        section.id = _name + "Sec"; // wir geben section ne id für css ich kann auch hier auf die id zugreifen mit document get element by id
        //[main] appends [created section] as it's child 
        main.appendChild(section);   // MAin ruft Kind. --> Sektion
        //following commands are dependent on value of parameter [_name]
        switch (_name) {
            //for value ["stack"]
            case "stack":
                //calls [createCard] & transfers [src.string] & [created section] as parameter
                createCard("img/hinten.jpg", document.getElementById(section.id));
                break;
            //for value ["discard"]
            case "discard":
                //calls [createCard] & transfers [first element of startKarte] & [created section] as parameter            
                createCard(startKarte[0], document.getElementById(section.id));
                break;
            //for value ["hand"]
            case "hand": // 5 Karten auf der Hand müssen gemacht werden. weil die ja genauer angezeigt werden müssen
                //runs through array [handkarten]
                for (let i: number = 0; i < handkarten.length; i++) { // ich mach ne variable die ist ne number und die ist null. i muss zb kleiner als 5 sein. wenn nicht ist for zu ende.
                    //calls [createCard] & transfers [element of handkarten, index dependent on run-number] & [created section] as parameter                                
                    createCard(handkarten[i], document.getElementById(section.id)); // erst nullte karte dann 1-4 weil dann nicht mehr kleiner als die Länge. Das created mir dann die Bilder auf die seite.
                }
                break;
        }
    }

    function createCard(_src: string, _parent: HTMLElement): void {   //Macht die karten. sorce und parent in den es reingeladen werden soll. ziehstape, Ablegestapel oder hand.
        //declare [card] & assgin created img Element as it's value
        let card: HTMLImageElement = document.createElement("img"); // Images werden erstellt. Im dokument der passende Tag
        //define src with parameter [_src]
        card.src = _src; //Der card wird die sorce zugeordnet. 
        //the classList property returns the class name(s) of an element, as a DOMTokenList object >> use add() to modify classList property
        //adds color &  number to [classList] of created [img]
        card.classList.add(  //Der String wird beschnitten. img wird weggeschnitten und das was dazwischen liegt bleibt. 
            //the substring() method extracts the characters from a string, between two specified indices, & returns the new sub string
            _src.substring(4, _src.length - 6), //bild
            _src.substring(_src.length - 6, _src.length - 4) //wert
        );

        _parent.appendChild(card); // das erstellte Element muss in den parent reingeladen werden
    }    
}       