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

        constructor(_src: string, _typ: string, _width: number, _height: number, _size: number) {
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

            this.width = _width;
            this.height = _height;

            this.size = _size;
        }

        update(): void {
            this.draw();
            this.checkDistanceToOtherObjects();
        }

        draw(): void {
            //console.log("draw");
            crc.beginPath();
            crc.drawImage(this.img, this.xPos, this.yPos, this.width * this.size, this.height * this.size);
            crc.closePath();
        }

        handleKeyevent(_direction: string): void {

            //console.log("fire direction move");
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

            for (let i: number = 1; i < allO.length; i++) {
                if (allO[i].typ == "enemy0" || allO[i].typ == "enemy1" || allO[i].typ == "enemy2" || allO[i].typ == "enemy3" || allO[i].typ == "shark" || allO[i].typ == "food") {

                    let distanceX: number = allO[i].xPos + allO[i].width - this.xPos;
                    let distanceY: number = (allO[i].yPos + allO[i].height / 2) - (this.yPos + this.height / 2);

                    let distance: number = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

                    //console.log("distance " + distance);

                    if (distance < 30) {
                        if (allO[i].size > this.size || allO[i].typ == "shark") {
                            //console.log("GAME OVVVVVVVVVER");
                            highscore == true;
                        }

                        else if (allO[i].size <= this.size && allO[i].typ != "food") {
                            //console.log("eat Fish");

                            allO[i].xPos = 0 - allO[i].width;
                            this.size += 0.2;

                            switch (allO[i].size) {
                                case 0:
                                    score += 10;
                                    break;

                                case 1:
                                    score += 20;
                                    break;

                                case 2:
                                    score += 30;
                                    break;

                                case 3:
                                    score += 50;
                                    break;
                                default: break;
                            }
                        }

                        else if (allO[i].typ == "food") {
                            //console.log("eat Food");

                            allO.splice(i, 1);
                            this.size += 0.2;
                            score += 10;

                        }
                    }
                }
            }
        }
    }
}
