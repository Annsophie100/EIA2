declare namespace canvas_with_food {
    class Bubble extends MovingObjects {
        radius: number;
        constructor(_xPos: number, _yPos: number);
        setVariables(_xPos: number, _yPos: number): void;
        move(): void;
        draw(): void;
    }
}
