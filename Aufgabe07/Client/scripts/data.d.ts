declare namespace eisdealer2 {
    interface Produkt {
        name: string;
        preis: number;
        inputType: string;
    }
    interface Produktliste {
        [produktArt: string]: Produkt[];
    }
    let produktListeGesamt: Produktliste;
}
