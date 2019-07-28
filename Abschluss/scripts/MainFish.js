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
        constructor(_src, _typ, _width, _height) {
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
            this.scaleFaktor = 1.5;
            this.size = 1;
            this.scaleVariable = this.size * this.scaleFaktor;
        }
        update() {
            super.draw();
        }
        handleKeyevent(_direction) {
            console.log("fire direction move");
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
            for (let i = 0; i < abschluss.allO.length; i++) {
                if (abschluss.allO[i] instanceof abschluss.EnemyFishes || abschluss.allO[i] instanceof abschluss.Food || abschluss.allO[i] instanceof abschluss.Shark) {
                    let distanceX;
                    let distanceY;
                    // c´distance
                    if (distanceX < 5 || distanceY < 5) {
                        this.handleCollisionWith(abschluss.allO[i], i);
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
        handleCollisionWith(_collisionObject, _placement) {
            if (_collisionObject instanceof abschluss.EnemyFishes && _collisionObject.size > this.size || _collisionObject instanceof abschluss.Shark) {
                //wenn enemy && größer oder shark
                //sterben
                //remove mainFish von array
                abschluss.allO.splice(0, 1);
                abschluss.highscore == true;
            }
            else if (_collisionObject instanceof abschluss.EnemyFishes && _collisionObject.size < this.size || _collisionObject instanceof abschluss.Food) {
                //wenn food||enemy und kleiner
                // fressen
                // remove i from array
                abschluss.allO.splice(_placement - 1, _placement);
            }
        }
    }
    abschluss.MainFish = MainFish;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=MainFish.js.map