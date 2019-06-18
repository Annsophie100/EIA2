declare namespace canvas_with_food {
    class MovingObjects {
        xPos: number;
        yPos: number;
        xSpeed: number;
        ySpeed: number;
        restart: number;
        end: number;
        color1: string;
        color2: string;
        constructor();
        move(): void;
        draw(): void;
    }
}
