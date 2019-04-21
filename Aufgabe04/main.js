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
    //_____initial function
    function init() {
        // erstellt fieldsets (in "formular")
        fieldsetsErstellen();
        // eventListener
        document.getElementsByTagName("body")[0].addEventListener("input", handleChange);
        document.getElementById("uebersicht").addEventListener("click", uebersichtErstellen);
    }
    //_____erstellt Fieldsets in div.id == "formular"
    function fieldsetsErstellen() {
        for (let i = 0; i < eisdealer1.produktKategorien.length; i++) {
            //erstelle Fieldset für produktKategorie[i]
            let fieldset = document.createElement("fieldset");
            let legend = document.createElement("legend");
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
    //____________________________________
    function stepperErstellen(_produktArray, _fieldset, _produkt) {
        for (let i = 0; i < _produktArray.length; i++) {
            // Label zu Stepper erstellen
            let label = document.createElement("p");
            label.innerHTML = _produktArray[i].name;
            _fieldset.appendChild(label);
            // Stepper erstellen
            let stepper = document.createElement("input");
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
    //____________________________________
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
    //____________________________________
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
    function paragraphErstellen(_parent) {
        let paragraph = document.createElement("p");
        paragraph.setAttribute("location", "warenkorb");
        _parent.appendChild(paragraph);
        return paragraph;
    }
    //____________________________________
    function handleChange(_event) {
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
                break;
            default: break;
        }
    }
    //____________echtzeit warenkorb schreiben________________________
    function warenkorbSchreiben() {
        let inputs = document.getElementsByTagName("input");
        let warenkorbDiv = document.getElementById("warenkorb");
        warenkorbDiv.innerText = "";
        let caption = document.createElement("h2");
        caption.innerText = "Warenkorb:";
        warenkorbDiv.appendChild(caption);
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let attrName = input.getAttribute("sorte");
            let attrProdukt = input.getAttribute("produkt");
            let attrShow = input.getAttribute("show");
            let attrPreis = input.getAttribute("preis");
            if (input.type == "radio" || input.type == "number" || input.type == "checkbox") {
                if (attrShow == "true") {
                    let p = paragraphErstellen(warenkorbDiv);
                    let previousP = p.previousSibling;
                    p.setAttribute("preis", attrPreis);
                    switch (attrProdukt) {
                        case ("Eis"):
                            p.innerText = input.value + "x " + attrProdukt + " (Typ: " + attrName + ") à " + attrPreis + " €";
                            console.log(input.value);
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", input.value);
                            break;
                        case ("Cream"):
                            p.innerText = "+ " + attrProdukt + " '" + attrName + "' " + attrPreis + " €";
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", "1");
                            break;
                        case ("Behälter"):
                            p.innerText = attrProdukt + ": " + attrName + " " + attrPreis + " €";
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", "1");
                            break;
                        case ("Topping"):
                        case ("Streusel"):
                            p.innerText = "+ " + attrProdukt + " '" + attrName + "' " + attrPreis + " €";
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", "1");
                            break;
                        case ("Lieferdienst"):
                            p.innerText = "Versand mit " + attrName + " " + attrPreis + " €";
                            p.setAttribute("approved", "true");
                            p.setAttribute("calc", "true");
                            p.setAttribute("value", "1");
                            break;
                        case ("Lieferart"):
                            if (attrName != "Standard") {
                                p.innerText = "zzgl. " + attrName + "-Zuschlag" + " " + attrPreis + " €";
                                p.setAttribute("calc", "true");
                            }
                            else {
                                p.innerText = "kostenloser " + attrName + "versand";
                                p.setAttribute("calc", "true");
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
        let p = paragraphErstellen(warenkorbDiv);
        p.innerText = "Gesamtpreis: " + preis;
        p.style.textDecoration = "overline";
    }
    //__________berechnet Preis__________________________
    function preisBerechnen(_basketDiv) {
        let preis = 0;
        let basketPs = _basketDiv.getElementsByTagName("p");
        for (let i = 0; i < basketPs.length; i++) {
            if (basketPs[i].getAttribute("calc") == "true") {
                // Einzelpreis
                let singlePreis = parseFloat(basketPs[i].getAttribute("preis"));
                // Stückzahl
                let value = Number(basketPs[i].getAttribute("value"));
                //Endpreis += (Einzelpreis x Stückzahl)
                preis += (singlePreis * value);
            }
            else {
                continue;
            }
        }
        let preisString = preis.toString() + " €";
        return preisString;
    }
    //_________alert übersicht___________________________
    function uebersichtErstellen(_event) {
        console.log("alert");
        let produkt = document.getElementById("warenkorb").getElementsByTagName("p");
        console.log(produkt);
        let h = "";
        h += "Bestellübersicht:";
        h += "\n";
        let txt = "";
        for (let i = 0; i < (produkt.length - 1); i++) {
            txt += produkt[i].innerText + "\n";
        }
        let endpreis = "";
        endpreis += produkt[produkt.length - 1].innerText;
        endpreis += "\n";
        let nachricht = h + txt + endpreis;
        window.alert(nachricht);
    }
})(eisdealer1 || (eisdealer1 = {})); //namespace
//# sourceMappingURL=main.js.map