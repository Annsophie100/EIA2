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
    class Fish1 extends canvas_with_food.MovingObjects {
        constructor(_color1, _color2) {
            super();
            this.setVariables(_color1, _color2);
        }
        setVariables(_color1, _color2) {
            this.xPos = Math.random() * canvas_with_food.crc.canvas.width;
            this.yPos = 50 + Math.random() * 400;
            this.xSpeed = 0.5 + Math.random() * 1.5;
            this.ySpeed = 0;
            //Bewegung entlang der x-Achse
            this.restart = canvas_with_food.crc.canvas.width;
            this.end = (0 - 100);
            this.color1 = _color1;
            this.color2 = _color2;
        }
        move() {
            this.xPos -= this.xSpeed;
            if (this.xPos < this.end) {
                this.xPos = this.restart;
                this.yPos = 50 + Math.random() * 400;
            } //close if
        }
        draw() {
            //Fisch
            //Körper
            canvas_with_food.crc.beginPath();
            canvas_with_food.crc.moveTo(this.xPos, this.yPos);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 30, this.yPos - 20, this.xPos + 60, this.yPos);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 80, this.yPos, this.xPos + 100, this.yPos - 30);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 75, this.yPos, this.xPos + 100, this.yPos + 40);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 80, this.yPos + 10, this.xPos + 60, this.yPos + 10);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 15, this.yPos + 20, this.xPos, this.yPos);
            // create gradient
            var grd = canvas_with_food.crc.createLinearGradient(this.xPos, this.yPos, this.xPos + 50, this.yPos + 10);
            grd.addColorStop(0, this.color1);
            grd.addColorStop(1, this.color2);
            // fill && stroke with gradient
            canvas_with_food.crc.fillStyle = grd;
            canvas_with_food.crc.fill();
            canvas_with_food.crc.closePath();
            canvas_with_food.crc.strokeStyle = grd;
            canvas_with_food.crc.lineWidth = 1;
            canvas_with_food.crc.stroke();
            //Auge
            canvas_with_food.crc.beginPath();
            canvas_with_food.crc.arc(this.xPos + 15, this.yPos - 3, 3, 0, 2 * Math.PI);
            canvas_with_food.crc.strokeStyle = "black";
            canvas_with_food.crc.lineWidth = 2;
            canvas_with_food.crc.stroke();
            canvas_with_food.crc.fillStyle = "white";
            canvas_with_food.crc.fill();
            //Auge - Pupille 
            canvas_with_food.crc.beginPath();
            canvas_with_food.crc.arc(this.xPos + 14, this.yPos - 3, 1.5, 0, 2 * Math.PI);
            canvas_with_food.crc.strokeStyle = "white";
            canvas_with_food.crc.fillStyle = "black";
            canvas_with_food.crc.stroke();
            canvas_with_food.crc.fill();
            //Mund
            canvas_with_food.crc.beginPath();
            canvas_with_food.crc.moveTo(this.xPos + 5, this.yPos + 8);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 15, this.yPos + 13, this.xPos + 20, this.yPos + 3);
            canvas_with_food.crc.strokeStyle = "transparent";
            canvas_with_food.crc.fillStyle = "powderblue";
            canvas_with_food.crc.stroke();
            canvas_with_food.crc.fill();
        }
    }
    canvas_with_food.Fish1 = Fish1;
})(canvas_with_food || (canvas_with_food = {}));
//# sourceMappingURL=Fish1.js.map