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
    class Shark extends abschluss.MovingObjects {
        constructor(_src, _typ, _width, _height) {
            super(_src);
            this.typ = _typ;
            this.img = new Image();
            this.img.src = _src;
            this.xPos = (Math.random() * (-200)) - 350;
            this.yPos = Math.random() * ((abschluss.crc.canvas.height - 64) - 64) + 64;
            this.xSpeed = 1;
            this.ySpeed = 0;
            this.xMax = abschluss.crc.canvas.width;
            this.xMin = -500;
            this.yMax = abschluss.crc.canvas.height;
            this.yMin = 0;
            this.scaleFaktor = 1.5;
            //anpassen groß!!!
            this.size = 1;
            this.scaleVariable = this.size * this.scaleFaktor;
        }
        update() {
            super.draw();
            this.move();
        }
        move() {
            this.xPos += this.xSpeed;
            if (this.xPos >= this.xMax) {
                this.xPos = this.xMin;
            }
        }
    }
    abschluss.Shark = Shark;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=Shark.js.map