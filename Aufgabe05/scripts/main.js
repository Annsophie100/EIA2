/*
Aufgabe: 05
Name: Annsophie Rösch
Matrikel: 257727
Datum: 28.04.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var eisdealer2;
(function (eisdealer2) {
    document.addEventListener("DOMContentLoaded", init);
    // eventListener für change bei <input>
    document.addEventListener("input", handleChange);
    // Globale Variablen >> Ticker
    let writeWarenkorb = 0;
    let writeMessage = 0;
    let writeAdresse = 0;
    //_____erstellt Fieldsets in div.id == "formularDyn"
    function init() {
        //for loop durch "äußeres array", also keys (Eis, Topping, Streusel...)
        //"for every key in produktliste"
        for (let produktArt in eisdealer2.produktListeGesamt) {
            //variable für "inneres array" => array of Produkt
            let produktListeEinzeln = eisdealer2.produktListeGesamt[produktArt];
            let parentFieldset = fieldsetErstellenProdukte(document.getElementById("formularDyn"), produktArt);
            // iteriert durch produktListeEinzeln
            for (let i = 0; i < produktListeEinzeln.length; i++) {
                inputErstellen(parentFieldset, produktListeEinzeln[i], produktArt);
            }
        }
    }
    //_____creates fieldset >> returns created fieldset: HTMLFieldSetElement
    function fieldsetErstellenProdukte(_parent, _produkt) {
        //create fieldset & legend
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        //give fieldset an id and set an Attribute
        fieldset.id = "fieldset_" + _produkt;
        fieldset.setAttribute("location", "formularDyn");
        //give legend a innerText
        legend.innerText = _produkt;
        //append legend to fieldset && fieldset to _parent
        fieldset.appendChild(legend);
        _parent.appendChild(fieldset);
        //returns <fieldset>
        return fieldset;
    }
    //_________Hier werden die Inputs generiert
    function inputErstellen(_parent, _produktEinzeln, _produktArt) {
        let input = document.createElement("input");
        input.type = _produktEinzeln.inputType;
        input.id = _produktEinzeln.inputType + "_" + _produktEinzeln.name;
        let label;
        if (_produktEinzeln.inputType == "number") {
            input.min = "0";
            input.max = "20";
            input.step = "1";
            label = document.createElement("p");
        }
        else {
            input.value = _produktEinzeln.name;
            input.name = _produktEinzeln.inputType + "Group_" + _produktArt;
            label = document.createElement("label");
        }
        label.setAttribute("for", input.id);
        label.innerHTML = _produktEinzeln.name;
        // Attribute, die zur Darstellung des Warenkobs benötigt werden
        input.setAttribute("sorte", _produktEinzeln.name);
        input.setAttribute("produkt", _produktArt);
        input.setAttribute("preis", _produktEinzeln.preis.toString());
        // "show" Attribut zur darstellung des Warenkorbs >> wird in "true" geändert, wenn input element ausgewählt wurde
        input.setAttribute("show", "false");
        //append stepper to fieldset
        _parent.appendChild(input);
        _parent.appendChild(label);
    }
    // paragraph erstellen ____________________________________
    function paragraphErstellen(_parent) {
        let paragraph = document.createElement("p");
        paragraph.setAttribute("location", _parent.textContent);
        _parent.appendChild(paragraph);
        return paragraph;
    }
    // Eventfunktion für "change" >> verändert Attribut "show" und schreibt dann die Übersicht neu____________________________________
    function handleChange(_event) {
        // Variablen
        let target = _event.target;
        let inputGroup = document.getElementsByTagName("input");
        switch (target.type) {
            case ("radio"):
                for (let i = 0; i < inputGroup.length; i++) {
                    if (inputGroup[i].name == target.name) {
                        inputGroup[i].setAttribute("show", "false");
                    }
                }
                target.setAttribute("show", "true");
                warenkorbSchreiben();
                break;
            case ("checkbox"):
                if (target.checked == true) {
                    target.setAttribute("show", "true");
                }
                else {
                    target.setAttribute("show", "false");
                }
                warenkorbSchreiben();
                break;
            case ("number"):
                if (target.value == "0") {
                    target.setAttribute("show", "false");
                }
                else {
                    target.setAttribute("show", "true");
                }
                warenkorbSchreiben();
                break;
            case ("text"):
            case ("email"):
                if (target.checkValidity() == false) {
                    target.setAttribute("show", "false");
                }
                else {
                    target.setAttribute("show", "true");
                }
                warenkorbSchreiben();
                break;
            default: break;
        }
    }
    //____________echtzeit warenkorb schreiben________________________
    function warenkorbSchreiben() {
        // Variablen
        let inputs = document.getElementsByTagName("input");
        let sideDiv = document.getElementById("side");
        let warenkorbDiv = document.getElementById("warenkorb");
        // wenn der Warenkorb das erste mal geschrieben wird
        if (writeWarenkorb == 0) {
            //sideDiv erscheint
            sideDiv.style.backgroundColor = "#81d5b5";
            sideDiv.style.border = "solid white 2px";
            //erstelle Überschrift für Warenkorb
            console.log("heading");
            let heading = document.createElement("h2");
            heading.innerText = "Bestellübersicht:";
            sideDiv.insertBefore(heading, warenkorbDiv);
            // check Button erstellen
            let check = document.createElement("button");
            check.innerText = "Bestellung prüfen";
            // EventListener für "checkWarenkorb" installieren >> kann nicht früher installiert werden, weil es den button nicht früher gibt
            check.addEventListener("click", checkWarenkorb);
            sideDiv.appendChild(check);
        }
        // warenkorbDiv leeren >> alte Inhalte löschen
        warenkorbDiv.innerText = "";
        // iteriert durch alle <input> Elemente
        for (let i = 0; i < inputs.length; i++) {
            // Variablen
            let input = inputs[i];
            let attrName = input.getAttribute("sorte");
            let attrProdukt = input.getAttribute("produkt");
            let attrShow = input.getAttribute("show");
            let attrPreis = input.getAttribute("preis");
            // wenn ihr Attribute "show" == "true" ist
            if (attrShow == "true") {
                // für radiobuttons, checkboxen und stepper
                if (input.type == "radio" || input.type == "number" || input.type == "checkbox") {
                    // erstelle <p>
                    let p = paragraphErstellen(warenkorbDiv);
                    // setzte ihren preis als Attribut für <p> >> zur Berechnung des Endpreises
                    p.setAttribute("preis", attrPreis);
                    p.setAttribute("produkt", attrProdukt);
                    p.setAttribute("calc", "true");
                    p.setAttribute("value", "1");
                    // Zuordnen der nötigen Attribute + erstellen des innerTextes für das <p>
                    switch (attrProdukt) {
                        case ("Eis"):
                            p.innerText = input.value + "x " + attrProdukt + " (Typ: " + attrName + ") à " + attrPreis + " €";
                            p.setAttribute("value", input.value);
                            break;
                        case ("Topping"):
                        case ("Cream"):
                        case ("Streusel"):
                            p.innerText = "+ " + attrProdukt + " '" + attrName + "' " + attrPreis + " €";
                            break;
                        case ("Behälter"):
                            p.innerText = attrProdukt + ": " + attrName + " " + attrPreis + " €";
                            break;
                        case ("Lieferdienst"):
                            p.innerText = "Versand mit " + attrName + " " + attrPreis + " €";
                            break;
                        case ("Lieferart"):
                            if (attrName != "Standard") {
                                p.innerText = "zzgl. " + attrName + "-Zuschlag" + " " + attrPreis + " €";
                            }
                            else {
                                p.innerText = "kostenloser " + attrName + "versand";
                            }
                            break;
                        default: break;
                    }
                }
            }
        }
        // Gesamtpreis darstellen
        let preis = preisBerechnen(warenkorbDiv);
        // <p> erstellen und mit Preis füllen
        let p = paragraphErstellen(warenkorbDiv);
        p.innerText = "Gesamtpreis: " + preis;
        // Ticker
        writeWarenkorb++;
    }
    //__________berechnet Preis__________________________
    function preisBerechnen(_warenkorbDiv) {
        // Variablen
        let preis = 0;
        let warenkorbPs = _warenkorbDiv.getElementsByTagName("p");
        // iteriert durch NodeList
        for (let i = 0; i < warenkorbPs.length; i++) {
            // für Nodes mit Attribut "calc" == "true"
            if (warenkorbPs[i].getAttribute("calc") == "true") {
                // Einzelpreis
                let singlePreis = parseFloat(warenkorbPs[i].getAttribute("preis"));
                // Stückzahl
                let value = Number(warenkorbPs[i].getAttribute("value"));
                //Endpreis += (Einzelpreis x Stückzahl)
                preis += (singlePreis * value);
            }
            // für Nodes mit Attribut "calc" == "false"
            // oder ohne Attribut "calc"
            else {
                continue;
            }
        }
        // number in string umwandeln
        let preisString = preis.toString() + " €";
        // Rückgabewert Endpreis als string
        return preisString;
    }
    //_________Validierung der Eingaben___________________________
    function checkWarenkorb(_event) {
        // Variablen
        let messageDiv = document.getElementById("message");
        let p;
        let messageBestellung = "";
        let messagePerso = "";
        // Variablen für Rückgabewerte
        messageBestellung += checkBestellung();
        messagePerso += checkPerso();
        // wenn zum ersten mal überprüft wird
        if (writeMessage == 0) {
            p = paragraphErstellen(messageDiv);
        }
        // bei jedem weiteren Druchlauf
        else {
            p = document.getElementById("message").children[0];
            p.innerText = "";
        }
        // Anzeige der Auswertung______________________________________________________
        //alles korrekt
        if (messageBestellung.length == 0 && messagePerso.length == 0) {
            p.innerText = "\n" + "Alle Angaben korrekt - du kannst bestellen🥳🎉";
        }
        //jwls eins länger als 0
        else if (messageBestellung.length > 0 && messagePerso.length == 0) {
            p.innerText = messageBestellung;
        }
        else if (messageBestellung.length == 0 && messagePerso.length > 0) {
            p.innerText = messagePerso;
        }
        // beide länger als 0
        else {
            p.innerText = messageBestellung + "\n" + messagePerso;
        }
        // Ticker
        writeMessage++;
    }
    //_________check Bestellung___________________________
    function checkBestellung() {
        let finalString = "";
        console.log(finalString.length);
        let fieldsetList = document.getElementById("formularDyn").getElementsByTagName("fieldset");
        // iteriert so lange durch fielsetList, bis entweder array zuende ist ODER finalString länger als 0
        for (let i = 0; i < fieldsetList.length && finalString.length == 0; i++) {
            let inputList = document.getElementById(fieldsetList[i].id).getElementsByTagName("input");
            let showCounter = 0;
            // iteriert durch einzelne inputs bis ende
            for (let j = 0; j < inputList.length; j++) {
                // wenn Attribut "show" == "true" ist, wird showCounter hochgezählt
                if (inputList[j].getAttribute("show") == "true") {
                    showCounter++;
                    console.log(showCounter);
                }
            }
            // wenn showCounter == 0 >> mindestens eine Eingabe Fehlt
            if (showCounter == 0) {
                let produkt = inputList[0].getAttribute("produkt");
                // individuelle Nachricht
                switch (produkt) {
                    case ("Eis"):
                        finalString += "Bitte wähle zuerst dein Eis aus.🍦";
                        break;
                    case ("Cream"):
                        finalString += "Ohne Cream gibts hier kein Eis.🤷🏻‍♀️";
                        break;
                    case ("Topping"):
                        finalString += "Bitte wähle mind ein Topping🧐";
                        break;
                    case ("Streusel"):
                        finalString += "Bitte wähle mind eine Streuselart🤔";
                        break;
                    case ("Behälter"):
                        finalString += "Wähle noch einen Behäler für dein Eis🥶";
                        break;
                    case ("Lieferdienst"):
                        finalString += "Wähle einen Lieferdienst - nicht die deutsche Bahn🤫";
                        break;
                    case ("Lieferart"):
                        finalString += "Fast geschafft - bitte wähle noch die Lieferart❄️";
                        break;
                    default: break;
                }
            }
        }
        // Rückgabewert = Message
        return finalString;
    }
    //_________check Personenangaben___________________________
    function checkPerso() {
        let datenInputs = document.getElementById("daten").getElementsByTagName("input");
        let finalString = "";
        let check = false;
        // iteriert durch inputs, bis entweder array durchlaufen ist ODER check true wird
        for (let i = 0; i < datenInputs.length && check == false; i++) {
            if (datenInputs[i].checkValidity() == false) {
                check = true;
            }
        }
        // nachricht bei falscher eingabe
        if (check == true) {
            finalString += "Etwas ist bei der Eingabe deiner Daten schief gelaufen🤯";
        }
        // rückgabe der adresse bei richtiger eingabe
        else {
            finalString += "\n" + "Deine Lieferadresse 📦" + "\n";
            finalString += datenInputs[0].value + ", " + datenInputs[1].value + "\n" + datenInputs[2].value + " " + datenInputs[3].value + "\n" + datenInputs[4].value + " " + datenInputs[5].value + "\n" + datenInputs[6].value;
        }
        // Rückgabewert = Message
        return finalString;
    }
})(eisdealer2 || (eisdealer2 = {})); //namespace
//# sourceMappingURL=main.js.map