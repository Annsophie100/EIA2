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

    export class Shark extends MovingObjects {

        constructor(_src: string, _typ: string, _width: number, _height: number, _size: number) {
            super(_src);
            this.typ = _typ;
            this.img = new Image();
            this.img.src = _src;

            this.xPos = (Math.random() * (-200)) - 350;
            this.yPos = Math.random() * ((crc.canvas.height - 64) - 64) + 64;

            this.xSpeed = 1;
            this.ySpeed = 0;

            this.xMax = crc.canvas.width;
            this.xMin = -500;
            this.yMax = crc.canvas.height;
            this.yMin = 0;

            this.width = _width;
            this.height = _height;
            this.size = _size;

        }

        update(): void {
            this.draw();
            this.move();
        }

        move(): void {
            this.xPos += this.xSpeed;
            if (this.xPos >= this.xMax) {
                this.xPos = this.xMin;
            }
        }
        
        draw(): void {
            //console.log("draw");
            crc.beginPath();
            crc.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
            crc.closePath();
        }
    }
}
