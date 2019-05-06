/* 
Aufgabe: 04
Name: Annsophie Rösch
Matrikel: 257727
Datum: 21.04.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace eisdealer1 {

    document.addEventListener("DOMContentLoaded", init);
    // eventListener für change bei <input>
    document.addEventListener("input", handleChange);

    // Globale Variablen >> Ticker
    let writeWarenkorb: number = 0;
    let writeMessage: number = 0;
    let writeAdresse: number = 0;


    //_____initial function
    function init(): void {
        // erstellt fieldsets (in "formular")
        fieldsetsErstellen();
    }

    //_____erstellt Fieldsets in div.id == "formular"
    function fieldsetsErstellen(): void {

        // iteriert durch produktKategorien
        for (let i: number = 0; i < produktKategorien.length; i++) {

            // erstellt Fieldset für produktKategorie[i] + legend
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            let legend: HTMLLegendElement = document.createElement("legend");

            // ordnet id, location und innerText zu
            fieldset.id = "fieldset_" + produktKategorien[i];
            fieldset.setAttribute("location", "formular");
            legend.innerText = produktKategorien[i];

            fieldset.appendChild(legend);
            document.getElementById("formular").appendChild(fieldset);

            //erstelle formElemente
            switch (produktKategorien[i]) {
                case ("Eis"):
                    stepperErstellen(eis, fieldset, produktKategorien[i]);
                    break;
                case ("Topping"):
                    checkboxErstellen(topping, fieldset, produktKategorien[i]);
                    break;
                case ("Streusel"):
                    checkboxErstellen(streusel, fieldset, produktKategorien[i]);
                    break;
                case ("Cream"):
                    radioErstellen(cream, fieldset, produktKategorien[i]);
                    break;
                case ("Behälter"):
                    radioErstellen(behaelter, fieldset, produktKategorien[i]);
                    break;
                case ("Lieferdienst"):
                    radioErstellen(lieferdienst, fieldset, produktKategorien[i]);
                    break;
                case ("Lieferart"):
                    radioErstellen(lieferart, fieldset, produktKategorien[i]);
                    break;

                default:
                    break;
            }
        }
    }

    // stepper erstellen ____________________________________
    function stepperErstellen(_produktArray: Produkt[], _fieldset: HTMLFieldSetElement, _produkt: string): void {

        for (let i: number = 0; i < _produktArray.length; i++) {

            // Stepper erstellen
            let stepper: HTMLInputElement = document.createElement("input");
            stepper.type = "number";
            stepper.min = "0";
            stepper.max = "20";
            stepper.step = "1";
            stepper.id = "stepper_" + _produktArray[i].name;

            // Label zu Stepper erstellen
            let label: HTMLParagraphElement = document.createElement("p");
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
    function checkboxErstellen(_produktArray: Produkt[], _fieldset: HTMLFieldSetElement, _produkt: string): void {

        for (let i: number = 0; i < _produktArray.length; i++) {

            // Checkbox erstellen
            let checkBox: HTMLInputElement = document.createElement("input");
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
            let label: HTMLLabelElement = document.createElement("label");
            label.setAttribute("for", checkBox.id);
            label.innerHTML = _produktArray[i].name;

            _fieldset.appendChild(label);

        }

    }

    // radiobutton erstellen ____________________________________
    function radioErstellen(_produktArray: Produkt[], _fieldset: HTMLFieldSetElement, _produkt: string): void {

        for (let i: number = 0; i < _produktArray.length; i++) {

            // RadioButton erstellen
            let radioButt: HTMLInputElement = document.createElement("input");
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
            let label: HTMLLabelElement = document.createElement("label");
            label.setAttribute("for", radioButt.id);
            label.innerHTML = _produktArray[i].name;

            _fieldset.appendChild(label);
        }
    }

    // paragraph erstellen ____________________________________
    function paragraphErstellen(_parent: HTMLDivElement): HTMLParagraphElement {
        let paragraph: HTMLParagraphElement = document.createElement("p");
        paragraph.setAttribute("location", _parent.textContent);
        _parent.appendChild(paragraph);
        return paragraph;
    }

    // Eventfunktion für "change" >> verändert Attribut "show" und schreibt dann die Übersicht neu____________________________________
    function handleChange(_event: Event): void {
        // Variablen
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let inputGroup: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

        switch (target.type) {
            case ("radio"):
                for (let i: number = 0; i < inputGroup.length; i++) {
                    if (inputGroup[i].name == target.name) {
                        inputGroup[i].setAttribute("show", "false");
                    }
                }
                target.setAttribute("show", "true");
                warenkorbSchreiben();
                break;

            case ("checkbox"):
                if (target.checked == true) { target.setAttribute("show", "true"); }
                else { target.setAttribute("show", "false"); }
                warenkorbSchreiben();
                break;

            case ("number"):
                if (target.value == "0") { target.setAttribute("show", "false"); }
                else { target.setAttribute("show", "true"); }
                warenkorbSchreiben();
                break;

            case ("text"):
            case ("email"):
                if (target.checkValidity() == false) { target.setAttribute("show", "false"); }
                else { target.setAttribute("show", "true"); }
                warenkorbSchreiben();
                break;

            default: break;
        }
    }

    //____________echtzeit warenkorb schreiben________________________
    function warenkorbSchreiben(): void {

        // Variablen
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let sideDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("side");
        let warenkorbDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("warenkorb");
        let adresseDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("adresse");

        // wenn der Warenkorb das erste mal geschrieben wird
        if (writeWarenkorb == 0) {

            //sideDiv erscheint
            sideDiv.style.backgroundColor = "#81d5b5";
            sideDiv.style.border = "solid white 2px";

            //erstelle Überschrift für Warenkorb
            console.log("heading");
            let heading: HTMLHeadingElement = document.createElement("h2");
            heading.innerText = "Bestellübersicht:";
            sideDiv.insertBefore(heading, warenkorbDiv);

            // check Button erstellen
            let check: HTMLButtonElement = document.createElement("button");
            check.innerText = "Bestellung prüfen";
            // EventListener für "checkWarenkorb" installieren >> kann nicht früher installiret werden, weil es den button nicht früher gibt
            check.addEventListener("click", checkWarenkorb);
            sideDiv.appendChild(check);
        }

        // warenkorbDiv leeren >> alte Inhalte löschen
        warenkorbDiv.innerText = "";

        // iteriert durch alle <input> Elemente
        for (let i: number = 0; i < inputs.length; i++) {

            // Variablen
            let input: HTMLInputElement = inputs[i];
            let attrName: string = input.getAttribute("sorte");
            let attrProdukt: string = input.getAttribute("produkt");
            let attrShow: string = input.getAttribute("show");
            let attrPreis: string = input.getAttribute("preis");

            // wenn ihr Attribute "show" == "true" ist
            if (attrShow == "true") {

                // für radiobuttons, checkboxen und stepper
                if (input.type == "radio" || input.type == "number" || input.type == "checkbox") {

                    // erstelle <p>
                    let p: HTMLParagraphElement = paragraphErstellen(warenkorbDiv);
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
        let preis: string = preisBerechnen(warenkorbDiv);
        // <p> erstellen und mit Preis füllen
        let p: HTMLParagraphElement = paragraphErstellen(warenkorbDiv);
        p.innerText = "Gesamtpreis: " + preis;

        // Ticker
        writeWarenkorb++;
    }

    //__________berechnet Preis__________________________
    function preisBerechnen(_warenkorbDiv: HTMLDivElement): string {
        // Variablen
        let preis: number = 0;
        let warenkorbPs: HTMLCollectionOf<HTMLParagraphElement> = _warenkorbDiv.getElementsByTagName("p");

        // iteriert durch NodeList
        for (let i: number = 0; i < warenkorbPs.length; i++) {

            // für Nodes mit Attribut "calc" == "true"
            if (warenkorbPs[i].getAttribute("calc") == "true") {
                // Einzelpreis
                let singlePreis: number = parseFloat(warenkorbPs[i].getAttribute("preis"));
                // Stückzahl
                let value: number = Number(warenkorbPs[i].getAttribute("value"));
                //Endpreis += (Einzelpreis x Stückzahl)
                preis += (singlePreis * value);
            }

            // für Nodes mit Attribut "calc" == "false"
            // oder ohne Attribut "calc"
            else { continue; }
        }

        // number in string umwandeln
        let preisString: string = preis.toString() + " €";

        // Rückgabewert Endpreis als string
        return preisString;
    }

    //_________Validierung der Eingaben___________________________
    function checkWarenkorb(_event: Event): void {
        // Variablen
        let messageDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("message");
        let p: HTMLParagraphElement;
        let messageBestellung: string = "";
        let messagePerso: string = "";

        // Variablen für Rückgabewerte
        messageBestellung += checkBestellung();
        messagePerso += checkPerso();

        // wenn zum ersten mal überprüft wird
        if (writeMessage == 0) { p = paragraphErstellen(messageDiv); }
        // bei jedem weiteren Druchlauf
        else { p = <HTMLParagraphElement>document.getElementById("message").children[0]; p.innerText = ""; }

        // Anzeige der Auswertung______________________________________________________
        //alles korrekt
        if (messageBestellung.length == 0 && messagePerso.length == 0) { p.innerText = "\n" + "Alle Angaben korrekt - du kannst bestellen🥳🎉"; }
        //jwls eins länger als 0
        else if (messageBestellung.length > 0 && messagePerso.length == 0) { p.innerText = messageBestellung; }
        else if (messageBestellung.length == 0 && messagePerso.length > 0) { p.innerText = messagePerso; }
        // beide länger als 0
        else { p.innerText = messageBestellung + "\n" + messagePerso; }

        // Ticker
        writeMessage++;
    }

    //_________check Bestellung___________________________
    function checkBestellung(): string {
        let finalString: string = "";
        console.log(finalString.length);
        let check: boolean = false;
        let fieldsetList: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementById("formular").getElementsByTagName("fieldset");

        // iteriert so lange durch fielsetList, bis entweder array zuende ist ODER finalString länger als 0
        for (let i: number = 0; i < fieldsetList.length && finalString.length == 0; i++) {
            let inputList: HTMLCollectionOf<HTMLInputElement> = document.getElementById(fieldsetList[i].id).getElementsByTagName("input");
            let showCounter: number = 0;

            // iteriert durch einzelne inputs bis ende
            for (let j: number = 0; j < inputList.length; j++) {
                // wenn Attribut "show" == "true" ist, wird showCounter hochgezählt
                if (inputList[j].getAttribute("show") == "true") { showCounter++; console.log(showCounter); }
            }

            // wenn showCounter == 0 >> mindestens eine Eingabe Fehlt
            if (showCounter == 0) {
                let produkt: string = inputList[0].getAttribute("produkt");
                // individuelle Nachricht
                switch (produkt) {
                    case ("Eis"): finalString += "Bitte wähle zuerst dein Eis aus.🍦"; break;
                    case ("Cream"): finalString += "Ohne Cream gibts hier kein Eis.🤷🏻‍♀️"; break;
                    case ("Topping"): finalString += "Bitte wähle mind ein Topping🧐"; break;
                    case ("Streusel"): finalString += "Bitte wähle mind eine Streuselart🤔"; break;
                    case ("Behälter"): finalString += "Wähle noch einen Behäler für dein Eis🥶"; break;
                    case ("Lieferdienst"): finalString += "Wähle einen Lieferdienst - nicht die deutsche Bahn🤫"; break;
                    case ("Lieferart"): finalString += "Fast geschafft - bitte wähle noch die Lieferart❄️"; break;
                    default: break;
                }
            }
        }
        // Rückgabewert = Message
        return finalString;
    }

    //_________check Personenangaben___________________________
    function checkPerso(): string {
        let datenInputs: HTMLCollectionOf<HTMLInputElement> = document.getElementById("daten").getElementsByTagName("input");
        let finalString: string = "";
        let check: boolean = false;

        // iteriert durch inputs, bis entweder array durchlaufen ist ODER check true wird
        for (let i: number = 0; i < datenInputs.length && check == false; i++) {
            if (datenInputs[i].checkValidity() == false) { check = true; }
        }
        // nachricht bei falscher eingabe
        if (check == true) { finalString += "Etwas ist bei der Eingabe deiner Daten schief gelaufen🤯"; }
        // rückgabe der adresse bei richtiger eingabe
        else {
            finalString += "\n" + "Deine Lieferadresse 📦" + "\n";
            finalString += datenInputs[0].value + ", " + datenInputs[1].value + "\n" + datenInputs[2].value + " " + datenInputs[3].value + "\n" + datenInputs[4].value + " " + datenInputs[5].value + "\n" + datenInputs[6].value;
        }
        // Rückgabewert = Message
        return finalString;
    }


}//namespace
