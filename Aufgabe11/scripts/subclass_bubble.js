/*
Aufgabe 11: Canvas Inheritance
Name: Annsophie Rösch
Matrikel: 257727
Datum: 16/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var canvas_seaworldtest;
(function (canvas_seaworldtest) {
    class Bubble extends canvas_seaworldtest.MovingObjects {
        constructor(_xPos, _yPos) {
            super();
            this.setStartPosition(_xPos, _yPos);
            this.setBorders();
            this.setSpeed();
            this.setStyle();
        }
        setStartPosition(_xPos, _yPos) {
            this.xPos = _xPos;
            this.yPos = _yPos;
        }
        setBorders() {
            //entlang y-Achse
            this.restart = canvas_seaworldtest.crc.canvas.height - 80;
            this.end = 0;
        }
        setSpeed() {
            this.ySpeed = 0.5 + Math.random() * 0.5;
            this.xSpeed = 0;
        }
        setStyle() {
            this.radius = Math.random() * (5 - 2) + 2;
            this.color1 = "rgb(206, 220, 226, 0.8)";
            this.color2 = "Transparent";
        }
        move() {
            this.xPos += this.xSpeed;
            this.yPos -= this.ySpeed;
            if (this.yPos < this.end) {
                this.yPos = this.restart;
            }
        }
        draw() {
            canvas_seaworldtest.crc.beginPath();
            canvas_seaworldtest.crc.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
            canvas_seaworldtest.crc.strokeStyle = this.color2;
            canvas_seaworldtest.crc.stroke();
            canvas_seaworldtest.crc.fillStyle = this.color1;
            canvas_seaworldtest.crc.fill();
            canvas_seaworldtest.crc.closePath();
        }
    }
    canvas_seaworldtest.Bubble = Bubble;
})(canvas_seaworldtest || (canvas_seaworldtest = {}));
//# sourceMappingURL=subclass_bubble.js.map