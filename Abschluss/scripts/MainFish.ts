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

    export class MainFish extends MovingObjects {

        constructor(_src: string, _typ: string, _width: number, _height: number) {
            super(_src);

            this.typ = _typ;

            this.xPos = crc.canvas.width * 0.5;
            this.yPos = crc.canvas.height * 0.5;

            this.xSpeed = 10;
            this.ySpeed = 10;

            this.xMax = crc.canvas.width;
            this.xMin = 0;
            this.yMax = crc.canvas.height;
            this.yMin = 0;

            this.scaleFaktor = 1.5;
            this.size = 1;
            this.scaleVariable = this.size * this.scaleFaktor;
        }

        update(): void {
            super.draw();
        }

        handleKeyevent(_direction: string): void {

            console.log("fire direction move");
            switch (_direction) {

                //left
                case "left":
                    this.xPos -= this.xSpeed
                    if (this.xPos <= this.xMin) {
                        this.xPos = this.xMin;
                    }
                    super.draw();
                    break;

                //top
                case "top":
                    this.yPos -= this.ySpeed
                    if (this.yPos <= this.yMin) {
                        this.yPos = this.yMin;
                    }
                    super.draw();
                    break;

                //right
                case "right":
                    this.xPos += this.xSpeed
                    if (this.xPos >= this.xMax) {
                        this.xPos = this.xMax;
                    }
                    super.draw();
                    break;

                //down
                case "down":
                    this.yPos += this.ySpeed
                    if (this.yPos >= this.yMax) {
                        this.yPos = this.yMax;
                    }
                    super.draw();
                    break;

                default: break;
            }
        }

        checkDistanceToOtherObjects(): void {

            for (let i: number = 0; i < allO.length; i++) {
                if (allO[i] instanceof EnemyFishes || allO[i] instanceof Food || allO[i] instanceof Shark) {
                    let distanceX: number;
                    let distanceY: number;
                    // c´distance
                    if (distanceX < 5 || distanceY < 5) {
                        this.handleCollisionWith(allO[i], i);
                    }
                    else {
                    }
                }
                else {
                }
            }
            //check distance (xPos und yPos vergleichen)
            //irrelevant
            //< 5
            // handleCollision(_allObj[i], i);
        }

        handleCollisionWith(_collisionObject: Objects, _placement: number): void {
            if (_collisionObject instanceof EnemyFishes && _collisionObject.size > this.size || _collisionObject instanceof Shark) {
                //wenn enemy && größer oder shark

                //sterben
                //remove mainFish von array
                allO.splice(0, 1);
                highscore == true;

            }
            else if (_collisionObject instanceof EnemyFishes && _collisionObject.size < this.size || _collisionObject instanceof Food) {
                //wenn food||enemy und kleiner

                // fressen
                // remove i from array
                allO.splice(_placement - 1, _placement);
                // size++;
                // score++
            }
        }
    }
}