declare namespace canvas_with_food {
    class Fish1 extends MovingObjects {
        constructor(_color1: string, _color2: string);
        setVariables(_color1: string, _color2: string): void;
        move(): void;
        draw(): void;
    }
}
