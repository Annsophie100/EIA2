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
    class Bubble extends abschluss.MovingObjects {
        constructor(_src, _xPos, _yPos) {
            super(_src);
            this.setVariables(_xPos, _yPos);
        }
        setVariables(_xPos, _yPos) {
            this.xPos = _xPos;
            this.yPos = _yPos;
            //Bewegung entlang y-Achse
            this.xMax = abschluss.crc.canvas.width;
            this.xMin = 0;
            this.yMax = abschluss.crc.canvas.height;
            this.yMin = 0;
            this.ySpeed = 0.5 + Math.random() * 0.5;
            this.xSpeed = 0;
            this.radius = Math.random() * (5 - 2) + 2;
            this.color1 = "rgb(206, 220, 226, 0.8)";
            this.color2 = "Transparent";
        }
        move() {
            this.xPos += this.xSpeed;
            this.yPos -= this.ySpeed;
            if (this.yPos < this.yMin) {
                this.yPos = this.yMax;
            }
        }
        draw() {
            abschluss.crc.beginPath();
            abschluss.crc.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
            abschluss.crc.strokeStyle = this.color2;
            abschluss.crc.stroke();
            abschluss.crc.fillStyle = this.color1;
            abschluss.crc.fill();
            abschluss.crc.closePath();
        }
    }
    abschluss.Bubble = Bubble;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=Bubble.js.map