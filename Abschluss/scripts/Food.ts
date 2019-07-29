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

    export class Food extends MovingObjects {

        constructor(_src: string, _typ: string, _width: number, _height: number, _size: number) {
            super(_src);
            this.typ = _typ;

            this.xPos = Math.random() * crc.canvas.width;
            this.yPos = -100;

            this.xSpeed = 0;
            this.ySpeed = 2;

            this.xMax = crc.canvas.width;
            this.xMin = 0;
            this.yMax = crc.canvas.height;
            this.yMin = 0;

            this.size = _size;
        }

        update(): void {
            this.move();
            this.draw();

        }

        move(): void {
            console.log("fire move food");
            this.yPos += this.ySpeed;
            if (this.yPos > this.yMax) {
                this.yPos == this.yMax;
            }

        }

        draw(): void {
            console.log("draw food");
            crc.beginPath();
            crc.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
            crc.closePath();
        }

    }

}