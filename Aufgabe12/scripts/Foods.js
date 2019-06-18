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
    class Foods extends canvas_with_food.MovingObjects {
        constructor(_xPos, _yPos, _color1) {
            super();
            this.setVariables(_xPos, _yPos, _color1);
        }
        setVariables(_xPos, _yPos, _color1) {
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.ySpeed = 0.4 + Math.random() * 0.3;
            this.xSpeed = (0 - 0.2) + Math.random() * 0.2;
            this.end = 560 + Math.random() * 40;
            this.radius = 2 + Math.random() * 4;
            this.color1 = _color1;
        }
        move() {
            this.xPos += this.xSpeed;
            this.yPos += this.ySpeed;
            //Futter stoppt
            if (this.yPos > this.end) {
                this.ySpeed -= this.ySpeed;
                this.xSpeed -= this.xSpeed;
            }
        }
        draw() {
            canvas_with_food.crc.beginPath();
            canvas_with_food.crc.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
            canvas_with_food.crc.strokeStyle = this.color1;
            canvas_with_food.crc.stroke();
            canvas_with_food.crc.fillStyle = this.color1;
            canvas_with_food.crc.fill();
            canvas_with_food.crc.closePath();
        }
    }
    canvas_with_food.Foods = Foods;
})(canvas_with_food || (canvas_with_food = {}));
//# sourceMappingURL=Foods.js.map