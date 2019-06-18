/* 
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Annsophie Rösch
Matrikel: 257727
Datum: 23/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace canvas_with_food {

    export class Fish1 extends MovingObjects {

        constructor(_color1: string, _color2: string) {
            super();
            this.setVariables(_color1, _color2);
        }

        setVariables(_color1: string, _color2: string): void {
            this.xPos = Math.random() * crc.canvas.width;
            this.yPos = 50 + Math.random() * 400;

            this.xSpeed = 0.5 + Math.random() * 1.5;
            this.ySpeed = 0;

            //Bewegung entlang der x-Achse
            this.restart = crc.canvas.width;
            this.end = (0 - 100);

            this.color1 = _color1;
            this.color2 = _color2;
        }

        move(): void {
            this.xPos -= this.xSpeed;
            if (this.xPos < this.end) {
                this.xPos = this.restart;
                this.yPos = 50 + Math.random() * 400;
            }//close if
        }

        draw(): void {
            //Fisch

            //Körper
            crc.beginPath();
            crc.moveTo(this.xPos, this.yPos);
            crc.quadraticCurveTo(this.xPos + 30, this.yPos - 20, this.xPos + 60, this.yPos);
            crc.quadraticCurveTo(this.xPos + 80, this.yPos, this.xPos + 100, this.yPos - 30);
            crc.quadraticCurveTo(this.xPos + 75, this.yPos, this.xPos + 100, this.yPos + 40);
            crc.quadraticCurveTo(this.xPos + 80, this.yPos + 10, this.xPos + 60, this.yPos + 10);
            crc.quadraticCurveTo(this.xPos + 15, this.yPos + 20, this.xPos, this.yPos);

            // create gradient
            var grd = crc.createLinearGradient(this.xPos, this.yPos, this.xPos + 50, this.yPos + 10);
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
            crc.arc(this.xPos + 15, this.yPos - 3, 3, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 2;
            crc.stroke();
            crc.fillStyle = "white";
            crc.fill();

            //Auge - Pupille 
            crc.beginPath();
            crc.arc(this.xPos + 14, this.yPos - 3, 1.5, 0, 2 * Math.PI);
            crc.strokeStyle = "white";
            crc.fillStyle = "black";
            crc.stroke();
            crc.fill();


            //Mund
            crc.beginPath();
            crc.moveTo(this.xPos + 5, this.yPos + 8);
            crc.quadraticCurveTo(this.xPos + 15, this.yPos + 13, this.xPos + 20, this.yPos + 3);
            crc.strokeStyle = "transparent";
            crc.fillStyle = "powderblue";
            crc.stroke();
            crc.fill();

        }

    }
}