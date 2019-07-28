declare namespace abschluss {
    class Shark extends MovingObjects {
        constructor(_src: string, _typ: string, _width: number, _height: number);
        update(): void;
        move(): void;
    }
}
