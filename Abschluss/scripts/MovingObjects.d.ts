declare namespace abschluss {
    class MovingObjects extends Objects {
        xSpeed: number;
        ySpeed: number;
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        img: HTMLImageElement;
        constructor(_src: string);
        update(): void;
        draw(): void;
        move(): void;
    }
}
