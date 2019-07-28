/* 
Abschlussaufgabe
Name: Annsophie Rösch
Matrikel: 257727
Datum: 28.07.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert. 
*/

namespace abschluss {

    export class Bubble extends MovingObjects {

        radius: number;
        color1: string;
        color2: string;

        constructor(_xPos: number, _yPos: number) {
            super("no");
            this.setVariables(_xPos, _yPos);
        }

        setVariables(_xPos: number, _yPos: number): void {
            this.xPos = _xPos;
            this.yPos = _yPos;

            //Bewegung entlang y-Achse
            this.xMax = crc.canvas.width;
            this.xMin = 0;
            this.yMax = crc.canvas.height;
            this.yMin = 0;

            this.ySpeed = 0.5 + Math.random() * 0.5;
            this.xSpeed = 0;

            this.radius = Math.random() * (5 - 2) + 2;
            this.color1 = "rgb(206, 220, 226, 0.8)";
            this.color2 = "Transparent";
        }

        move(): void {
            this.xPos += this.xSpeed;
            this.yPos -= this.ySpeed;

            if (this.yPos < this.yMin) {
                this.yPos = this.yMax;
            }
        }

        draw(): void {
            crc.beginPath();
            crc.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
            crc.strokeStyle = this.color2;
            crc.stroke();
            crc.fillStyle = this.color1;
            crc.fill();
            crc.closePath();
        }

    }

}