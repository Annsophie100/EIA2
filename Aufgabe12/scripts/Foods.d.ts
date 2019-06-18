declare namespace canvas_with_food {
    class Foods extends MovingObjects {
        radius: number;
        constructor(_xPos: number, _yPos: number, _color1: string);
        setVariables(_xPos: number, _yPos: number, _color1: string): void;
        move(): void;
        draw(): void;
    }
}
