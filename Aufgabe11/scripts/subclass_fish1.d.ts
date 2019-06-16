declare namespace canvas_seaworldtest {
    class Fish1 extends MovingObjects {
        constructor(_color1: string, _color2: string);
        setStartPosition(): void;
        setSpeed(): void;
        setBorders(): void;
        setColors(_color1: string, _color2: string): void;
        move(): void;
        draw(): void;
    }
}
