declare namespace abschluss {
    class Bubble extends MovingObjects {
        radius: number;
        color1: string;
        color2: string;
        constructor(_src: string, _xPos: number, _yPos: number);
        setVariables(_xPos: number, _yPos: number): void;
        move(): void;
        draw(): void;
    }
}
