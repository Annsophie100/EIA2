declare namespace abschluss {
    class MainFish extends MovingObjects {
        constructor(_src: string, _typ: string, _width: number, _height: number, _size: number);
        update(): void;
        draw(): void;
        handleKeyevent(_direction: string): void;
        checkDistanceToOtherObjects(): void;
    }
}
