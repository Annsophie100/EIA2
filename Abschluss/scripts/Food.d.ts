declare namespace abschluss {
    class Food extends MovingObjects {
        constructor(_src: string, _typ: string, _width: number, _height: number, _size: number);
        update(): void;
        move(): void;
        draw(): void;
    }
}
