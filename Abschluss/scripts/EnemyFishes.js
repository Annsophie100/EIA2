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
        constructor(_src, _typ, _width, _height, _size) {
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
            this.width = _width;
            this.height = _height;
            this.size = _size;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.xPos += this.xSpeed;
            if (this.xPos >= this.xMax) {
                this.xPos = this.xMin;
            }
        }
        draw() {
            //console.log("draw");
            abschluss.crc.beginPath();
            abschluss.crc.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
            abschluss.crc.closePath();
        }
    }
    abschluss.EnemyFishes = EnemyFishes;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=EnemyFishes.js.map