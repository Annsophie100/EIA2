/*
Aufgabe: 04
Name: Annsophie Rösch
Matrikel: 257727
Datum: 21.04.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var eisdealer1;
(function (eisdealer1) {
    document.addEventListener("DOMContentLoaded", init);
    // eventListener für change bei <input>
    document.addEventListener("input", handleChange);
    // Globale Variablen >> Ticker
    let writeWarenkorb = 0;
    let writeMessage = 0;
    let writeAdresse = 0;
    //_____initial function
    function init() {
        // erstellt fieldsets (in "formular")
        fieldsetsErstellen();
    }
    //_____erstellt Fieldsets in div.id == "formular"
    function fieldsetsErstellen() {
        // iteriert durch produktKategorien
        for (let i = 0; i < eisdealer1.produktKategorien.length; i++) {
            // erstellt Fieldset für produktKategorie[i] + legend
            let fieldset = document.createElement("fieldset");
            let legend = document.createElement("legend");
            // ordnet id, location und innerText zu
            fieldset.id = "fieldset_" + eisdealer1.produktKategorien[i];
            fieldset.setAttribute("location", "formular");
            legend.innerText = eisdealer1.produktKategorien[i];
            fieldset.appendChild(legend);
            document.getElementById("formular").appendChild(fieldset);
            //erstelle formElemente
            switch (eisdealer1.produktKategorien[i]) {
                case ("Eis"):
                    stepperErstellen(eisdealer1.eis, fieldset, eisdealer1.produktKategorien[i]);
                    break;
                case ("Topping"):
                    checkboxErstellen(eisdealer1.topping, fieldset, eisdealer1.produktKategorien[i]);
                    break;
                case ("Streusel"):
                    checkboxErstellen(eisdealer1.streusel, fieldset, eisdealer1.produktKategorien[i]);
                    break;
                case ("Cream"):
                    radioErstellen(eisdealer1.cream, fieldset, eisdealer1.produktKategorien[i]);
                    break;
                case ("Behälter"):
                    radioErstellen(eisdealer1.behaelter, fieldset, eisdealer1.produktKategorien[i]);
                    break;
                case ("Lieferdienst"):
                    radioErstellen(eisdealer1.lieferdienst, fieldset, eisdealer1.produktKategorien[i]);
                    break;
                case ("Lieferart"):
                    radioErstellen(eisdealer1.lieferart, fieldset, eisdealer1.produktKategorien[i]);
                    break;
                default:
                    break;
            }
        }
    }
    // stepper erstellen ____________________________________
    function stepperErstellen(_produktArray, _fieldset, _produkt) {
        for (let i = 0; i < _produktArray.length; i++) {
            // Stepper erstellen
            let stepper = document.createElement("input");
            stepper.type = "number";
            stepper.min = "0";
            stepper.max = "20";
            stepper.step = "1";
            stepper.id = "stepper_" + _produktArray[i].name;
            // Label zu Stepper erstellen
            let label = document.createElement("p");
            label.innerHTML = _produktArray[i].name;
            _fieldset.appendChild(label);
            // Attribute, die zur Darstellung des Warenkobs benötigt werden
            stepper.setAttribute("sorte", _produktArray[i].name);
            stepper.setAttribute("produkt", _produkt);
            stepper.setAttribute("preis", _produktArray[i].preis.toString());
            // "show" Attribut zur darstellung des Warenkorbs >> wird in "true" geändert, wenn input element ausgewählt wurde
            stepper.setAttribute("show", "false");
            //append stepper to fieldset
            _fieldset.appendChild(stepper);
            _fieldset.appendChild(label);
        }
    }
    // checkbox erstellen ____________________________________
    function checkboxErstellen(_produktArray, _fieldset, _produkt) {
        for (let i = 0; i < _produktArray.length; i++) {
            // Checkbox erstellen
            let checkBox = document.createElement("input");
            checkBox.type = "checkBox";
            checkBox.value = _produktArray[i].name;
            checkBox.name = "checkGroup_" + _produkt;
            checkBox.id = "checkBox_" + _produktArray[i].name;
            // Attribute, die zur Darstellung des Warenkobs benötigt werden
            checkBox.setAttribute("sorte", _produktArray[i].name);
            checkBox.setAttribute("produkt", _produkt);
            checkBox.setAttribute("preis", _produktArray[i].preis.toString());
            // "show" Attribut zur darstellung des Warenkorbs >> wird in "true" geändert, wenn input element ausgewählt wurde
            checkBox.setAttribute("show", "false");
            _fieldset.appendChild(checkBox);
            // Label zu checkbox erstellen
            let label = document.createElement("label");
            label.setAttribute("for", checkBox.id);
            label.innerHTML = _produktArray[i].name;
            _fieldset.appendChild(label);
        }
    }
    // radiobutton erstellen ____________________________________
    function radioErstellen(_produktArray, _fieldset, _produkt) {
        for (let i = 0; i < _produktArray.length; i++) {
            // RadioButton erstellen
            let radioButt = document.createElement("input");
            radioButt.type = "radio";
            radioButt.value = _produktArray[i].name;
            radioButt.name = "radioGroup_" + _produkt;
            radioButt.id = "radioButton_" + _produktArray[i].name;
            // Attribute, die zur Darstellung des Warenkobs benötigt werden
            radioButt.setAttribute("sorte", _produktArray[i].name);
            radioButt.setAttribute("produkt", _produkt);
            radioButt.setAttribute("preis", _produktArray[i].preis.toString());
            // "show" Attribut zur darstellung des Warenkorbs >> wird in "true" geändert, wenn input element ausgewählt wurde
            radioButt.setAttribute("show", "false");
            _fieldset.appendChild(radioButt);
            // Label zu Radiobutton erstellen
            let label = document.createElement("label");
            label.setAttribute("for", radioButt.id);
            label.innerHTML = _produktArray[i].name;
            _fieldset.appendChild(label);
        }
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
        let adresseDiv = document.getElementById("adresse");
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
            // EventListener für "checkWarenkorb" installieren >> kann nicht früher installiret werden, weil es den button nicht früher gibt
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
                    // Zuordnen der nötigen Attribute + erstellen des innerTextes für das <p>
                    switch (attrProdukt) {
                        case ("Eis"):
                            p.innerText = input.value + "x " + attrProdukt + " (Typ: " + attrName + ") à " + attrPreis + " €";
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", input.value);
                            p.setAttribute("produkt", attrProdukt);
                            break;
                        case ("Cream"):
                            p.innerText = "+ " + attrProdukt + " '" + attrName + "' " + attrPreis + " €";
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", "1");
                            p.setAttribute("produkt", attrProdukt);
                            break;
                        case ("Behälter"):
                            p.innerText = attrProdukt + ": " + attrName + " " + attrPreis + " €";
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", "1");
                            p.setAttribute("produkt", attrProdukt);
                            break;
                        case ("Topping"):
                        case ("Streusel"):
                            p.innerText = "+ " + attrProdukt + " '" + attrName + "' " + attrPreis + " €";
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", "1");
                            p.setAttribute("produkt", attrProdukt);
                            break;
                        case ("Lieferdienst"):
                            p.innerText = "Versand mit " + attrName + " " + attrPreis + " €";
                            p.setAttribute("approved", "true");
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", "1");
                            p.setAttribute("produkt", attrProdukt);
                            break;
                        case ("Lieferart"):
                            if (attrName != "Standard") {
                                p.innerText = "zzgl. " + attrName + "-Zuschlag" + " " + attrPreis + " €";
                                p.setAttribute("calc", "true");
                                p.setAttribute("produkt", attrProdukt);
                            }
                            else {
                                p.innerText = "kostenloser " + attrName + "versand";
                                p.setAttribute("calc", "true");
                                p.setAttribute("produkt", attrProdukt);
                            }
                            p.setAttribute("value", "1");
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
        else {
            p = document.getElementById("message").children[0];
            p.innerText = "";
        }
        // Anzeige der Auswertung______________________________________________________
        //alles korrekt
        if (messageBestellung.length == 0 && messagePerso.length == 0) {
            p.innerText = "\n" + "Alle Angaben korrekt - du kannst bestellen🥳🎉";
        }
        else if (messageBestellung.length > 0 && messagePerso.length == 0) {
            p.innerText = messageBestellung;
        }
        else if (messageBestellung.length == 0 && messagePerso.length > 0) {
            p.innerText = messagePerso;
        }
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
        let check = false;
        let fieldsetList = document.getElementById("formular").getElementsByTagName("fieldset");
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
        else {
            finalString += "\n" + "Deine Lieferadresse 📦" + "\n";
            finalString += datenInputs[0].value + ", " + datenInputs[1].value + "\n" + datenInputs[2].value + " " + datenInputs[3].value + "\n" + datenInputs[4].value + " " + datenInputs[5].value + "\n" + datenInputs[6].value;
        }
        // Rückgabewert = Message
        return finalString;
    }
})(eisdealer1 || (eisdealer1 = {})); //namespace
//# sourceMappingURL=main.js.map