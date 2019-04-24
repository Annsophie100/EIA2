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
    ;
    //Array mit allen ProduktKategorien
    eisdealer1.produktKategorien = [
        "Eis", "Topping", "Cream", "Streusel",
        "Behälter", "Lieferdienst", "Lieferart"
    ];
    // einzelne Arrays der Produkte mit allen Sorten
    eisdealer1.eis = [
        { name: "Vanille", preis: 2.0 },
        { name: "Schokolade", preis: 2.0 },
        { name: "Erdbeere", preis: 2.0 },
        { name: "Pistazie", preis: 3.0 },
        { name: "Mango", preis: 3.0 },
        { name: "Zitrone", preis: 3.0 },
        { name: "Dealer's Special", preis: 5.0 }
    ];
    eisdealer1.topping = [
        { name: "Sahne", preis: 1.0 },
        { name: "Marshmellows", preis: 2.0 },
        { name: "Nüsse", preis: 2.0 },
        { name: "Oreo", preis: 3.0 }
    ];
    eisdealer1.cream = [
        { name: "Schokolade", preis: 1.5 },
        { name: "Karamell", preis: 1.5 },
        { name: "Erdbeere", preis: 1.5 },
        { name: "Dealer's Special Dip", preis: 2.0 }
    ];
    eisdealer1.streusel = [
        { name: "Bunte", preis: 0.5 },
        { name: "Schokolade", preis: 0.5 },
        { name: "Fruity", preis: 0.5 },
        { name: "Glitzer", preis: 0.7 },
        { name: "Kokos", preis: 0.9 }
    ];
    eisdealer1.behaelter = [
        { name: "Waffel", preis: 0.5 },
        { name: "Becher", preis: 1.0 },
        { name: "Kübel", preis: 3.0 }
    ];
    eisdealer1.lieferdienst = [
        { name: "UPS", preis: 2.5 },
        { name: "DHL", preis: 2.5 },
        { name: "Hermes", preis: 3.0 },
        { name: "DPD", preis: 4.5 }
    ];
    eisdealer1.lieferart = [
        { name: "Standard", preis: 0.0 },
        { name: "24h-Express", preis: 5.0 },
        { name: "Morning-Express", preis: 7.0 }
    ];
})(eisdealer1 || (eisdealer1 = {}));
//# sourceMappingURL=data.js.map