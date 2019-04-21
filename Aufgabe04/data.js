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
        { name: "Vanille", preis: 30.0 },
        { name: "Schokolade", preis: 30.0 },
        { name: "Erdbeere", preis: 20.0 },
        { name: "Pistazie", preis: 20.0 },
        { name: "Mango", preis: 20.0 },
        { name: "Zitrone", preis: 20.0 },
        { name: "Dealer's Special", preis: 20.0 }
    ];
    eisdealer1.topping = [
        { name: "Sahne", preis: 0.0 },
        { name: "Marshmellows", preis: 5.0 },
        { name: "Nüsse", preis: 5.0 },
        { name: "Oreo", preis: 5.0 }
    ];
    eisdealer1.cream = [
        { name: "Schokolade", preis: 2.0 },
        { name: "Karamell", preis: 2.0 },
        { name: "Erdbeere", preis: 10.0 },
        { name: "Dealer's Special Dip", preis: 10.0 }
    ];
    eisdealer1.streusel = [
        { name: "Bunte", preis: 0.0 },
        { name: "Schokolade", preis: 10.0 },
        { name: "fruity", preis: 5.0 },
        { name: "Glitzer", preis: 5.0 },
        { name: "Kokos", preis: 5.0 }
    ];
    eisdealer1.behaelter = [
        { name: "Waffel", preis: 3.0 },
        { name: "Becher", preis: 3.0 },
        { name: "Kübel", preis: 3.0 }
    ];
    eisdealer1.lieferdienst = [
        { name: "UPS", preis: 5.0 },
        { name: "DHL", preis: 5.0 },
        { name: "Hermes", preis: 5.0 },
        { name: "DPD", preis: 5.0 }
    ];
    eisdealer1.lieferart = [
        { name: "Standard", preis: 0.0 },
        { name: "24h-Express", preis: 5.0 },
        { name: "Morning-Express", preis: 10.0 }
    ];
})(eisdealer1 || (eisdealer1 = {}));
//# sourceMappingURL=data.js.map