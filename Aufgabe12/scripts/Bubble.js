/*
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Annsophie Rösch
Matrikel: 257727
Datum: 23/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var canvas_with_food;
(function (canvas_with_food) {
    class Bubble extends canvas_with_food.MovingObjects {
        constructor(_xPos, _yPos) {
            super();
            this.setVariables(_xPos, _yPos);
        }
        setVariables(_xPos, _yPos) {
            this.xPos = _xPos;
            this.yPos = _yPos;
            //Bewegung entlang y-Achse
            this.restart = canvas_with_food.crc.canvas.height - 80;
            this.end = 0;
            this.ySpeed = 0.5 + Math.random() * 0.5;
            this.xSpeed = 0;
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
            canvas_with_food.crc.beginPath();
            canvas_with_food.crc.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
            canvas_with_food.crc.strokeStyle = this.color2;
            canvas_with_food.crc.stroke();
            canvas_with_food.crc.fillStyle = this.color1;
            canvas_with_food.crc.fill();
            canvas_with_food.crc.closePath();
        }
    }
    canvas_with_food.Bubble = Bubble;
})(canvas_with_food || (canvas_with_food = {}));
//# sourceMappingURL=Bubble.js.map