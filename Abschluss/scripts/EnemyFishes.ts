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

    export class EnemyFishes extends MovingObjects {

        constructor(_src: string, _typ: string, _width: number, _height: number) {
            super(_src);
            this.typ = _typ;

            this.xPos = (Math.random() * (-200)) - 350;
            this.yPos = Math.random() * crc.canvas.height;

            this.xSpeed = 1 + Math.random() * 1.5;
            this.ySpeed = 0;

            this.xMax = crc.canvas.width;
            this.xMin = (Math.random() * (-200)) - 350;;
            this.yMax = crc.canvas.height;
            this.yMin = 0;

            this.scaleFaktor = 1.5;

            this.size = 1;
            this.scaleVariable = this.size * this.scaleFaktor;
        }

        update(): void {
            this.move();
            super.draw();
        }

        move(): void {
            this.xPos += this.xSpeed;
            if (this.xPos >= this.xMax) {
                this.xPos = this.xMin;
            }
        }

    }

}