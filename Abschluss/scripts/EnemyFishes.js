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
    class EnemyFishes extends abschluss.MovingObjects {
        constructor(_src, _typ, _width, _height) {
            super(_src);
            this.typ = _typ;
            this.xPos = (Math.random() * (-200)) - 350;
            this.yPos = Math.random() * abschluss.crc.canvas.height;
            this.xSpeed = 1 + Math.random() * 1.5;
            this.ySpeed = 0;
            this.xMax = abschluss.crc.canvas.width;
            this.xMin = (Math.random() * (-200)) - 350;
            ;
            this.yMax = abschluss.crc.canvas.height;
            this.yMin = 0;
            this.scaleFaktor = 1.5;
            this.size = 1;
            this.scaleVariable = this.size * this.scaleFaktor;
        }
        update() {
            this.move();
            super.draw();
        }
        move() {
            this.xPos += this.xSpeed;
            if (this.xPos >= this.xMax) {
                this.xPos = this.xMin;
            }
        }
    }
    abschluss.EnemyFishes = EnemyFishes;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=EnemyFishes.js.map