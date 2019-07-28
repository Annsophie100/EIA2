declare namespace abschluss {
    interface Animal {
        src: string;
        width: number;
        height: number;
    }
    interface Animalliste {
        [animalArt: string]: Animal[];
    }
    let animalListeGesamt: Animalliste;
}
