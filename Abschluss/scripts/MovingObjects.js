/*
Abschlussaufgabe
Name: Annsophie Rösch
Matrikel: 257727
Datum: 28.07.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert.
*/
var abschluss;
(function (abschluss) {
    class MovingObjects extends abschluss.Objects {
        constructor(_src) {
            super();
            this.img = new Image();
            this.img.src = _src;
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
        }
        move() {
        }
    }
    abschluss.MovingObjects = MovingObjects;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=MovingObjects.js.map