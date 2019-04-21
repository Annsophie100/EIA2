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

    //interface für Produkte
    export interface Produkt {
        name: string;
        preis: number;
    };

    //Array mit allen ProduktKategorien
    export let produktKategorien: string[] = [
        "Eis", "Topping", "Cream", "Streusel",
        "Behälter", "Lieferdienst", "Lieferart"
    ];

    // einzelne Arrays der Produkte mit allen Sorten
    export let eis: Produkt[] = [
        { name: "Vanille", preis: 2.0 },
        { name: "Schokolade", preis: 2.0 },
        { name: "Erdbeere", preis: 2.0 },
        { name: "Pistazie", preis: 3.0 },
        { name: "Mango", preis: 3.0 },
        { name: "Zitrone", preis: 3.0 },
        { name: "Dealer's Special", preis: 5.0 }
    ];

    export let topping: Produkt[] = [
        { name: "Sahne", preis: 1.0 },
        { name: "Marshmellows", preis: 2.0 },
        { name: "Nüsse", preis: 2.0 },
        { name: "Oreo", preis: 3.0 }
    ];

    export let cream: Produkt[] = [
        { name: "Schokolade", preis: 1.5 },
        { name: "Karamell", preis: 1.5 },
        { name: "Erdbeere", preis: 1.5 },
        { name: "Dealer's Special Dip", preis: 2.0 }
    ];

    export let streusel: Produkt[] = [
        { name: "Bunte", preis: 0.5 },
        { name: "Schokolade", preis: 0.5 },
        { name: "fruity", preis: 0.5 },
        { name: "Glitzer", preis: 0.7 },
        { name: "Kokos", preis: 0.9 }
    ];

    export let behaelter: Produkt[] = [
        { name: "Waffel", preis: 0.5 },
        { name: "Becher", preis: 1.0 },
        { name: "Kübel", preis: 3.0 }
    ];

    export let lieferdienst: Produkt[] = [
        { name: "UPS", preis: 2.5 },
        { name: "DHL", preis: 2.5 },
        { name: "Hermes", preis: 3.0 },
        { name: "DPD", preis: 4.5 }
    ];

    export let lieferart: Produkt[] = [
        { name: "Standard", preis: 0.0 },
        { name: "24h-Express", preis: 5.0 },
        { name: "Morning-Express", preis: 7.0 }
    ];

}