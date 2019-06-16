declare namespace canvas_seaworldtest {
    class Bubble extends MovingObjects {
        radius: number;
        constructor(_xPos: number, _yPos: number);
        setStartPosition(_xPos: number, _yPos: number): void;
        setBorders(): void;
        setSpeed(): void;
        setStyle(): void;
        move(): void;
        draw(): void;
    }
}
