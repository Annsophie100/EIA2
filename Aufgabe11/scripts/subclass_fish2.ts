/* 
Aufgabe 11: Canvas Inheritance
Name: Annsophie Rösch
Matrikel: 257727
Datum: 16/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace canvas_seaworldtest {

    export class Fish2 extends Fish1 {

        constructor(_color1: string, _color2: string) {
            super(_color1, _color2);
        }

        draw(): void {
            //Fisch

            //Körper
            crc.beginPath();
            crc.moveTo(this.xPos, this.yPos);
            crc.quadraticCurveTo(this.xPos + 30, this.yPos - 50, this.xPos + 60, this.yPos);
            crc.quadraticCurveTo(this.xPos + 60, this.yPos, this.xPos + 70, this.yPos - 20);
            crc.quadraticCurveTo(this.xPos + 50, this.yPos, this.xPos + 70, this.yPos + 30);
            crc.quadraticCurveTo(this.xPos + 60, this.yPos + 10, this.xPos + 60, this.yPos + 10);
            crc.quadraticCurveTo(this.xPos + 15, this.yPos + 50, this.xPos, this.yPos);

            // create gradient
            var grd = crc.createLinearGradient(this.xPos, this.yPos, this.xPos + 90, this.yPos + 10);
            grd.addColorStop(0, this.color1);
            grd.addColorStop(1, this.color2);

            // fill && stroke with gradient
            crc.fillStyle = grd;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = grd;
            crc.lineWidth = 1;
            crc.stroke();

            //Auge
            crc.beginPath();
            crc.arc(this.xPos + 13, this.yPos - 7, 3, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 2;
            crc.stroke();
            crc.fillStyle = "white";
            crc.fill();

            //Auge - Pupille 
            crc.beginPath();
            crc.arc(this.xPos + 12, this.yPos - 7, 1.5, 0, 2 * Math.PI);
            crc.strokeStyle = "white";
            crc.fillStyle = "black";
            crc.stroke();
            crc.fill();


            //Mund
            crc.beginPath();
            crc.moveTo(this.xPos + 2, this.yPos + 8);
            crc.quadraticCurveTo(this.xPos + 13, this.yPos + 13, this.xPos + 20, this.yPos + 2);
            crc.strokeStyle = "transparent";
            crc.fillStyle = "powderblue";
            crc.stroke();
            crc.fill();

        }

    }
}