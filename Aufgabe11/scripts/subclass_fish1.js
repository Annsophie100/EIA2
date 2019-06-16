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
    class Fish1 extends canvas_seaworldtest.MovingObjects {
        constructor(_color1, _color2) {
            super();
            this.setStartPosition();
            this.setSpeed();
            this.setBorders();
            this.setColors(_color1, _color2);
        }
        setStartPosition() {
            this.xPos = Math.random() * canvas_seaworldtest.crc.canvas.width;
            this.yPos = 50 + Math.random() * 400;
        }
        setSpeed() {
            this.xSpeed = 0.5 + Math.random() * 1.5;
            this.ySpeed = 0;
        }
        setBorders() {
            //entlang der x-Achse
            this.restart = canvas_seaworldtest.crc.canvas.width;
            this.end = (0 - 100);
        }
        setColors(_color1, _color2) {
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
            canvas_seaworldtest.crc.beginPath();
            canvas_seaworldtest.crc.moveTo(this.xPos, this.yPos);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 30, this.yPos - 20, this.xPos + 60, this.yPos);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 80, this.yPos, this.xPos + 100, this.yPos - 30);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 75, this.yPos, this.xPos + 100, this.yPos + 40);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 80, this.yPos + 10, this.xPos + 60, this.yPos + 10);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 15, this.yPos + 20, this.xPos, this.yPos);
            // create gradient
            var grd = canvas_seaworldtest.crc.createLinearGradient(this.xPos, this.yPos, this.xPos + 50, this.yPos + 10);
            grd.addColorStop(0, this.color1);
            grd.addColorStop(1, this.color2);
            // fill && stroke with gradient
            canvas_seaworldtest.crc.fillStyle = grd;
            canvas_seaworldtest.crc.fill();
            canvas_seaworldtest.crc.closePath();
            canvas_seaworldtest.crc.strokeStyle = grd;
            canvas_seaworldtest.crc.lineWidth = 1;
            canvas_seaworldtest.crc.stroke();
            //Auge
            canvas_seaworldtest.crc.beginPath();
            canvas_seaworldtest.crc.arc(this.xPos + 15, this.yPos - 3, 3, 0, 2 * Math.PI);
            canvas_seaworldtest.crc.strokeStyle = "black";
            canvas_seaworldtest.crc.lineWidth = 2;
            canvas_seaworldtest.crc.stroke();
            canvas_seaworldtest.crc.fillStyle = "white";
            canvas_seaworldtest.crc.fill();
            //Auge - Pupille 
            canvas_seaworldtest.crc.beginPath();
            canvas_seaworldtest.crc.arc(this.xPos + 14, this.yPos - 3, 1.5, 0, 2 * Math.PI);
            canvas_seaworldtest.crc.strokeStyle = "white";
            canvas_seaworldtest.crc.fillStyle = "black";
            canvas_seaworldtest.crc.stroke();
            canvas_seaworldtest.crc.fill();
            //Mund
            canvas_seaworldtest.crc.beginPath();
            canvas_seaworldtest.crc.moveTo(this.xPos + 5, this.yPos + 8);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 15, this.yPos + 13, this.xPos + 20, this.yPos + 3);
            canvas_seaworldtest.crc.strokeStyle = "transparent";
            canvas_seaworldtest.crc.fillStyle = "powderblue";
            canvas_seaworldtest.crc.stroke();
            canvas_seaworldtest.crc.fill();
        }
    }
    canvas_seaworldtest.Fish1 = Fish1;
})(canvas_seaworldtest || (canvas_seaworldtest = {}));
//# sourceMappingURL=subclass_fish1.js.map