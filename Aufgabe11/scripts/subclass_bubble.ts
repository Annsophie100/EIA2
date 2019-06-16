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

    export class Bubble extends MovingObjects {

        radius: number;

        constructor(_xPos: number, _yPos: number) {
            super();
            this.setStartPosition(_xPos, _yPos);
            this.setBorders();
            this.setSpeed();
            this.setStyle();
        }

        setStartPosition(_xPos: number, _yPos: number): void {
            this.xPos = _xPos;
            this.yPos = _yPos;
        }

        setBorders(): void {
            //entlang y-Achse
            this.restart = crc.canvas.height - 80;
            this.end = 0;
        }

        setSpeed(): void {
            this.ySpeed = 0.5 + Math.random() * 0.5;
            this.xSpeed = 0;
        }

        setStyle(): void {
            this.radius = Math.random() * (5 - 2) + 2;
            this.color1 = "rgb(206, 220, 226, 0.8)";
            this.color2 = "Transparent";
        }

        move(): void {
            this.xPos += this.xSpeed;
            this.yPos -= this.ySpeed;

            if (this.yPos < this.end) {
                this.yPos = this.restart;
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