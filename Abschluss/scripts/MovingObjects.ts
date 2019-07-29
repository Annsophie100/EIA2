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

    export class MovingObjects extends Objects {

        xSpeed: number;
        ySpeed: number;
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
        
        img: HTMLImageElement;

        constructor(_src: string) {
            super();
            this.img = new Image();
            this.img.src = _src;
        }

        update(): void {
            this.draw();
            this.move();
        }

        draw(): void {
            
        }

        move(): void {
        }

    }

}