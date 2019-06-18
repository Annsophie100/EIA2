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
    class Fish2 extends canvas_with_food.Fish1 {
        constructor(_color1, _color2) {
            super(_color1, _color2);
        }
        draw() {
            //Fisch
            //Körper
            canvas_with_food.crc.beginPath();
            canvas_with_food.crc.moveTo(this.xPos, this.yPos);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 30, this.yPos - 50, this.xPos + 60, this.yPos);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 60, this.yPos, this.xPos + 70, this.yPos - 20);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 50, this.yPos, this.xPos + 70, this.yPos + 30);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 60, this.yPos + 10, this.xPos + 60, this.yPos + 10);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 15, this.yPos + 50, this.xPos, this.yPos);
            // create gradient
            var grd = canvas_with_food.crc.createLinearGradient(this.xPos, this.yPos, this.xPos + 90, this.yPos + 10);
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
            canvas_with_food.crc.arc(this.xPos + 13, this.yPos - 7, 3, 0, 2 * Math.PI);
            canvas_with_food.crc.strokeStyle = "black";
            canvas_with_food.crc.lineWidth = 2;
            canvas_with_food.crc.stroke();
            canvas_with_food.crc.fillStyle = "white";
            canvas_with_food.crc.fill();
            //Auge - Pupille 
            canvas_with_food.crc.beginPath();
            canvas_with_food.crc.arc(this.xPos + 12, this.yPos - 7, 1.5, 0, 2 * Math.PI);
            canvas_with_food.crc.strokeStyle = "white";
            canvas_with_food.crc.fillStyle = "black";
            canvas_with_food.crc.stroke();
            canvas_with_food.crc.fill();
            //Mund
            canvas_with_food.crc.beginPath();
            canvas_with_food.crc.moveTo(this.xPos + 2, this.yPos + 8);
            canvas_with_food.crc.quadraticCurveTo(this.xPos + 13, this.yPos + 13, this.xPos + 20, this.yPos + 2);
            canvas_with_food.crc.strokeStyle = "transparent";
            canvas_with_food.crc.fillStyle = "powderblue";
            canvas_with_food.crc.stroke();
            canvas_with_food.crc.fill();
        }
    }
    canvas_with_food.Fish2 = Fish2;
})(canvas_with_food || (canvas_with_food = {}));
//# sourceMappingURL=Fish2.js.map