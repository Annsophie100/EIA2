/*
Abschlussaufgabe
Name: Annsophie Rösch
Matrikel: 257727
Datum: 28.07.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert.
*/
var abschluss;
(function (abschluss) {
    class MainFish extends abschluss.MovingObjects {
        constructor(_src, _typ, _width, _height, _size) {
            super(_src);
            this.typ = _typ;
            this.xPos = abschluss.crc.canvas.width * 0.5;
            this.yPos = abschluss.crc.canvas.height * 0.5;
            this.xSpeed = 10;
            this.ySpeed = 10;
            this.xMax = abschluss.crc.canvas.width;
            this.xMin = 0;
            this.yMax = abschluss.crc.canvas.height;
            this.yMin = 0;
            this.width = _width;
            this.height = _height;
            this.size = _size;
        }
        update() {
            this.draw();
            this.checkDistanceToOtherObjects();
        }
        draw() {
            //console.log("draw");
            abschluss.crc.beginPath();
            abschluss.crc.drawImage(this.img, this.xPos, this.yPos, this.width * this.size, this.height * this.size);
            abschluss.crc.closePath();
        }
        handleKeyevent(_direction) {
            //console.log("fire direction move");
            switch (_direction) {
                //left
                case "left":
                    this.xPos -= this.xSpeed;
                    if (this.xPos <= this.xMin) {
                        this.xPos = this.xMin;
                    }
                    super.draw();
                    break;
                //top
                case "top":
                    this.yPos -= this.ySpeed;
                    if (this.yPos <= this.yMin) {
                        this.yPos = this.yMin;
                    }
                    super.draw();
                    break;
                //right
                case "right":
                    this.xPos += this.xSpeed;
                    if (this.xPos >= this.xMax) {
                        this.xPos = this.xMax;
                    }
                    super.draw();
                    break;
                //down
                case "down":
                    this.yPos += this.ySpeed;
                    if (this.yPos >= this.yMax) {
                        this.yPos = this.yMax;
                    }
                    super.draw();
                    break;
                default: break;
            }
        }
        checkDistanceToOtherObjects() {
            for (let i = 1; i < abschluss.allO.length; i++) {
                if (abschluss.allO[i].typ == "enemy0" || abschluss.allO[i].typ == "enemy1" || abschluss.allO[i].typ == "enemy2" || abschluss.allO[i].typ == "enemy3" || abschluss.allO[i].typ == "shark" || abschluss.allO[i].typ == "food") {
                    let distanceX = abschluss.allO[i].xPos + abschluss.allO[i].width - this.xPos;
                    let distanceY = (abschluss.allO[i].yPos + abschluss.allO[i].height / 2) - (this.yPos + this.height / 2);
                    let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
                    //console.log("distance " + distance);
                    if (distance < 10) {
                        if (abschluss.allO[i].size > this.size || abschluss.allO[i].typ == "shark") {
                            //console.log("GAME OVVVVVVVVVER");
                            abschluss.death = true;
                        }
                        else if (abschluss.allO[i].size <= this.size && abschluss.allO[i].typ != "food") {
                            //console.log("eat Fish");
                            abschluss.allO[i].xPos = 0 - abschluss.allO[i].width;
                            this.size += 0.2;
                            switch (abschluss.allO[i].size) {
                                case 0:
                                    abschluss.score += 10;
                                    break;
                                case 1:
                                    abschluss.score += 20;
                                    break;
                                case 2:
                                    abschluss.score += 30;
                                    break;
                                case 3:
                                    abschluss.score += 50;
                                    break;
                                default: break;
                            }
                        }
                        else if (abschluss.allO[i].typ == "food") {
                            //console.log("eat Food");
                            abschluss.allO.splice(i, 1);
                            this.size += 0.2;
                            abschluss.score += 10;
                        }
                    }
                }
            }
        }
    }
    abschluss.MainFish = MainFish;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=MainFish.js.map