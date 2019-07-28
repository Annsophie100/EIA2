declare namespace abschluss {
    class MainFish extends MovingObjects {
        constructor(_src: string, _typ: string, _width: number, _height: number);
        update(): void;
        handleKeyevent(_direction: string): void;
        checkDistanceToOtherObjects(): void;
        handleCollisionWith(_collisionObject: Objects, _placement: number): void;
    }
}
