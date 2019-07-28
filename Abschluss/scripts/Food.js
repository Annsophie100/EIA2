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
    class Food extends abschluss.MovingObjects {
        constructor(_src, _typ, _width, _height) {
            super(_src);
            this.typ = _typ;
            this.xPos = Math.random() * abschluss.crc.canvas.width;
            this.yPos = 0;
            this.xSpeed = 0;
            this.ySpeed = 2;
            this.xMax = abschluss.crc.canvas.width;
            this.xMin = 0;
            this.yMax = abschluss.crc.canvas.height;
            this.yMin = 0;
        }
        update() {
            this.move();
            super.draw();
        }
        move() {
            console.log("fire move food");
            this.yPos += this.ySpeed;
            if (this.yPos > this.yMax) {
                this.yPos == this.yMax;
            }
        }
    }
    abschluss.Food = Food;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=Food.js.map