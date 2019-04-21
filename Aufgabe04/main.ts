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

    // Globale Variablen >> Ticker
    let writeWarenkorb: number = 0;
    let writeMessage: number = 0;


    //_____initial function
    function init(): void {

        // erstellt fieldsets (in "formular")
        fieldsetsErstellen();

        // eventListener für change bei <input>
        document.getElementsByTagName("body")[0].addEventListener("input", handleChange);
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

            // Label zu Stepper erstellen
            let label: HTMLParagraphElement = document.createElement("p");
            label.innerHTML = _produktArray[i].name;
            _fieldset.appendChild(label);

            // Stepper erstellen
            let stepper: HTMLInputElement = document.createElement("input");
            stepper.type = "number";
            stepper.min = "0";
            stepper.max = "20";
            stepper.step = "1";
            stepper.id = "stepper_" + _produktArray[i].name;

            // Attribute, die zur Darstellung des Warenkobs benötigt werden
            stepper.setAttribute("sorte", _produktArray[i].name);
            stepper.setAttribute("produkt", _produkt);
            stepper.setAttribute("preis", _produktArray[i].preis.toString());

            // "show" Attribut zur darstellung des Warenkorbs >> wird in "true" geändert, wenn input element ausgewählt wurde
            stepper.setAttribute("show", "false");

            //append stepper to fieldset
            _fieldset.appendChild(stepper);

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
        let inputGroup: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");

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

            //case für persönliche Daten noch offen   
            case ("text"): break;

            default: break;
        }
    }

    //____________echtzeit warenkorb schreiben________________________
    function warenkorbSchreiben(): void {
        
        // Variablen
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let warenkorbDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("warenkorb");
        
        // wenn der Warenkorb das erste mal geschrieben wird
        if (writeWarenkorb == 0) {
            //erstelle Überschrift für Warenkorb
            let heading: HTMLHeadingElement = document.createElement("h3");
            heading.innerText = "Bestellübersicht:";
            document.getElementById("side").insertBefore(heading, warenkorbDiv);

            // check Button erstellen
            let check: HTMLButtonElement = document.createElement("button");
            check.innerText = "Bestellung prüfen";
            // EventListener für "checkWarenkorb" installieren
            check.addEventListener("click", checkWarenkorb);
            document.getElementById("side").appendChild(check);
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

            // für radiobuttons, checkboxen und stepper
            if (input.type == "radio" || input.type == "number" || input.type == "checkbox") {

                // wenn ihr Attribute "show" == "true" ist
                if (attrShow == "true") {

                    // erstelle <p>
                    let p: HTMLParagraphElement = paragraphErstellen(warenkorbDiv);
                    // setzte ihren preis als Attribut für <p> >> zur Berechnung des Endpreises
                    p.setAttribute("preis", attrPreis);

                    // Zuordnen der nötigen Attribute + erstellen des innerTextes für das <p>
                    switch (attrProdukt) {

                        case ("Eis"):
                            p.innerText = input.value + "x " + attrProdukt + " (Typ: " + attrName + ") à " + attrPreis + " €";
                            console.log(input.value);
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
        // <p> ersteölen und mit Preis füllen
        let p: HTMLParagraphElement = paragraphErstellen(warenkorbDiv);
        p.innerText = "Gesamtpreis: " + preis;
        p.style.textDecoration = "overline";

        // Ticker
        writeWarenkorb++;
    }

    //__________berechnet Preis__________________________
    function preisBerechnen(_warenkorbDiv: HTMLDivElement): string {
        // Variablen
        let preis: number = 0;
        let warenkorbPs: NodeListOf<HTMLParagraphElement> = _warenkorbDiv.getElementsByTagName("p");

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
        let warenkorbPs: NodeListOf<HTMLParagraphElement> = document.getElementById("warenkorb").getElementsByTagName("p");
        let messageDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("message");
        let p: HTMLParagraphElement;
        let message: string = "";

        // Message = Rückgabewert von checkVollst()
        message = checkVollst(warenkorbPs);

        // wenn zum ersten mal überprüft wird
        if (writeMessage == 0) { p = paragraphErstellen(messageDiv); }
        // bei jedem weiteren Druchlauf
        else { p = <HTMLParagraphElement>document.getElementById("message").children[0]; p.innerText = ""; }

        // Anzeige der Auswertung______________________________________________________
        // bei fehleneden Angaben
        if (message.length > 0) { p.innerText = message; }
        // wenn alles korrekt ist
        else { p.innerText = "\n" + "🎉Alle Angaben korrekt - du kannst bestellen🥳"; }

        // Ticker
        writeMessage++;
    }

    //_________check Vollständigkeit___________________________
    function checkVollst(_warenkorbPs: NodeListOf<HTMLParagraphElement>): string {

        let finalString: string = "";

        // Prüfvariablen
        let eisTest: boolean = false;
        let toppingTest: boolean = false;
        let creamTest: boolean = false;
        let streuselTest: boolean = false;
        let behaelterTest: boolean = false;
        let lieferdienstTest: boolean = false;
        let lieferartTest: boolean = false;

        // iteriert duruch NodeList, setzt bei vorhandenen Produkten die Prüfvariable auf "true"
        for (let i: number = 0; i < (_warenkorbPs.length - 1); i++) {
            if (_warenkorbPs[i].hasAttribute("produkt") == true) {
                let produktAttr: string = _warenkorbPs[i].getAttribute("produkt");
                switch (produktAttr) {
                    case ("Eis"): eisTest = true; break;
                    case ("Cream"): creamTest = true; break;
                    case ("Behälter"): behaelterTest = true; break;
                    case ("Topping"): toppingTest = true; break;
                    case ("Streusel"): streuselTest = true; break;
                    case ("Lieferdienst"): lieferdienstTest = true; break;
                    case ("Lieferart"): lieferartTest = true; break;
                    default: break;
                }
            }
        }
        // individualisierte Nachricht für Prüfvariablen mit "false" wird hier erstellt
        if (eisTest == false) { finalString += "Du hast das wichtigste vergessen!" + "\n" + "- bitte Eissorte wählen🍦" + "\n"; }
        if (toppingTest == false) { finalString += "Sicher kein Topping?😉" + "\n" + "- bitte Topping wählen" + "\n"; }
        if (creamTest == false) { finalString += "Wähle eine Cream🤩" + "\n" + "- bitte Cream wählen" + "\n"; }
        if (streuselTest == false) { finalString += "Ein Eis ohne Streusel " + "\n" + "- was ist das schon?!🧐" + "\n"; }
        if (behaelterTest == false) { finalString += "Sicher keinen Behälter?🤨" + "\n" + "- bitte Behälter wählen" + "\n"; }
        if (lieferdienstTest == false) { finalString += "Bitte wähle einen Lieferdienst" + "\n" + "- nicht die deutsche Bahn🤫" + "\n"; }
        if (lieferartTest == false) { finalString += "Bitte wähle eine Lieferart aus🥶" + "\n"; }

        // Rückgabewert = Message
        return finalString;
    }


}//namespace
