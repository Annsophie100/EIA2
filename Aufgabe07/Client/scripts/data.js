/*
Aufgabe: 07
Name: Annsophie Rösch
Matrikel: 257727
Datum: 12.05.2019
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var a07_eisdealer;
(function (a07_eisdealer) {
    // Befüllen der Produktliste
    a07_eisdealer.produktListeGesamt = {
        "Eis": [
            { name: "Vanille", preis: 2.0, inputType: "number" },
            { name: "Schokolade", preis: 2.0, inputType: "number" },
            { name: "Erdbeere", preis: 2.0, inputType: "number" },
            { name: "Pistazie", preis: 3.0, inputType: "number" },
            { name: "Mango", preis: 3.0, inputType: "number" },
            { name: "Zitrone", preis: 3.0, inputType: "number" },
            { name: "Dealer's Special", preis: 5.0, inputType: "number" }
        ],
        "Topping": [
            { name: "Sahne", preis: 1.0, inputType: "checkBox" },
            { name: "Marshmellows", preis: 2.0, inputType: "checkBox" },
            { name: "Nuesse", preis: 2.0, inputType: "checkBox" },
            { name: "Oreo", preis: 3.0, inputType: "checkBox" }
        ],
        "Cream": [
            { name: "Schokolade", preis: 1.5, inputType: "radio" },
            { name: "Karamell", preis: 1.5, inputType: "radio" },
            { name: "Erdbeere", preis: 1.5, inputType: "radio" },
            { name: "Dealer's Special Dip", preis: 2.0, inputType: "radio" }
        ],
        "Streusel": [
            { name: "Bunte", preis: 0.5, inputType: "checkBox" },
            { name: "Schokolade", preis: 0.5, inputType: "checkBox" },
            { name: "Fruity", preis: 0.5, inputType: "checkBox" },
            { name: "Glitzer", preis: 0.7, inputType: "checkBox" },
            { name: "Kokos", preis: 0.9, inputType: "checkBox" }
        ],
        "Behaelter": [
            { name: "Waffel", preis: 0.5, inputType: "radio" },
            { name: "Becher", preis: 1.0, inputType: "radio" },
            { name: "Kuebel", preis: 3.0, inputType: "radio" }
        ],
        "Lieferdienst": [
            { name: "UPS", preis: 2.5, inputType: "radio" },
            { name: "DHL", preis: 2.5, inputType: "radio" },
            { name: "Hermes", preis: 3.0, inputType: "radio" },
            { name: "DPD", preis: 4.5, inputType: "radio" }
        ],
        "Lieferart": [
            { name: "Standard", preis: 0.0, inputType: "radio" },
            { name: "24h-Express", preis: 5.0, inputType: "radio" },
            { name: "Morning-Express", preis: 7.0, inputType: "radio" }
        ]
    };
})(a07_eisdealer || (a07_eisdealer = {})); //namespace zu
//# sourceMappingURL=data.js.map