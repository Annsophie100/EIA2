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
    class Fish2 extends canvas_seaworldtest.Fish1 {
        constructor(_color1, _color2) {
            super(_color1, _color2);
        }
        draw() {
            //Fisch
            //Körper
            canvas_seaworldtest.crc.beginPath();
            canvas_seaworldtest.crc.moveTo(this.xPos, this.yPos);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 30, this.yPos - 50, this.xPos + 60, this.yPos);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 60, this.yPos, this.xPos + 70, this.yPos - 20);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 50, this.yPos, this.xPos + 70, this.yPos + 30);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 60, this.yPos + 10, this.xPos + 60, this.yPos + 10);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 15, this.yPos + 50, this.xPos, this.yPos);
            // create gradient
            var grd = canvas_seaworldtest.crc.createLinearGradient(this.xPos, this.yPos, this.xPos + 90, this.yPos + 10);
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
            canvas_seaworldtest.crc.arc(this.xPos + 13, this.yPos - 7, 3, 0, 2 * Math.PI);
            canvas_seaworldtest.crc.strokeStyle = "black";
            canvas_seaworldtest.crc.lineWidth = 2;
            canvas_seaworldtest.crc.stroke();
            canvas_seaworldtest.crc.fillStyle = "white";
            canvas_seaworldtest.crc.fill();
            //Auge - Pupille 
            canvas_seaworldtest.crc.beginPath();
            canvas_seaworldtest.crc.arc(this.xPos + 12, this.yPos - 7, 1.5, 0, 2 * Math.PI);
            canvas_seaworldtest.crc.strokeStyle = "white";
            canvas_seaworldtest.crc.fillStyle = "black";
            canvas_seaworldtest.crc.stroke();
            canvas_seaworldtest.crc.fill();
            //Mund
            canvas_seaworldtest.crc.beginPath();
            canvas_seaworldtest.crc.moveTo(this.xPos + 2, this.yPos + 8);
            canvas_seaworldtest.crc.quadraticCurveTo(this.xPos + 13, this.yPos + 13, this.xPos + 20, this.yPos + 2);
            canvas_seaworldtest.crc.strokeStyle = "transparent";
            canvas_seaworldtest.crc.fillStyle = "powderblue";
            canvas_seaworldtest.crc.stroke();
            canvas_seaworldtest.crc.fill();
        }
    }
    canvas_seaworldtest.Fish2 = Fish2;
})(canvas_seaworldtest || (canvas_seaworldtest = {}));
//# sourceMappingURL=subclass_fish2.js.map