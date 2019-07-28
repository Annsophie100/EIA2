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
    window.addEventListener("load", init);
    abschluss.score = 0;
    abschluss.highscore = false;
    //listener!!
    let imgData;
    console.log("CanvasRendering2d active");
    //Anzahl der Objekte festlegen
    let mainFish;
    let nEnemy0 = 5;
    let nEnemy1 = 5;
    let nEnemy2 = 5;
    let nBubble = 40;
    let nStreamHinten = 2;
    let nStreamVorn = 3;
    //Array aller Objekte
    abschluss.allO = [];
    abschluss.movingO = [];
    let imgs = ["img/mainFish.png", "img/enemy0.png", "img/enemy1.png", "img/enemy2.png", "img/shark.png", "img/food0.png", "img/food1.png"];
    //init
    function init() {
        console.log("#call init");
        abschluss.canvas = document.getElementsByTagName("canvas")[0];
        abschluss.crc = abschluss.canvas.getContext("2d");
        //  EventListener
        document.body.addEventListener("keydown", handleKeydown);
        //  staticObjects with no interaction
        abschluss.drawStaticBackground();
        // imgData speichern
        imgData = abschluss.crc.getImageData(0, 0, abschluss.canvas.width, abschluss.canvas.height);
        // mainFish
        mainFish = new abschluss.MainFish(imgs[0], "main", 100, 67);
        abschluss.allO.push(mainFish);
        // enemys
        //smallest
        for (let i = 0; i < nEnemy0; i++) {
            let enemy = new abschluss.EnemyFishes(imgs[1], "enemy0", 100, 68);
            abschluss.allO.push(enemy);
            abschluss.movingO.push(enemy);
        }
        //middle
        for (let i = 0; i < nEnemy1; i++) {
            let enemy = new abschluss.EnemyFishes(imgs[2], "enemy1", 100, 70);
            abschluss.allO.push(enemy);
            abschluss.movingO.push(enemy);
        }
        //big
        for (let i = 0; i < nEnemy2; i++) {
            let enemy = new abschluss.EnemyFishes(imgs[3], "enemy2", 100, 74);
            abschluss.allO.push(enemy);
            abschluss.movingO.push(enemy);
        }
        //shark
        let shark = new abschluss.Shark(imgs[4], "shark", 130, 54);
        abschluss.allO.push(shark);
        abschluss.movingO.push(shark);
        //Blubbles hinten
        for (let i = 0; i < nStreamHinten; i++) {
            let pos = i;
            for (let j = 0; j < nBubble; j++) {
                let xPos;
                let yPos;
                switch (pos) {
                    case 0:
                        xPos = 400 + Math.random() * 50;
                        yPos = 5 + Math.random() * 540;
                        console.log("switch1");
                        break;
                    case 1:
                        xPos = 1070 + Math.random() * 50;
                        yPos = 5 + Math.random() * 520;
                        console.log("switch3");
                        break;
                    default: break;
                }
                let bubble = new abschluss.Bubble(xPos, yPos);
                abschluss.allO.push(bubble);
            }
        }
        //Blubbles vorn
        for (let i = 0; i < nStreamVorn; i++) {
            let pos = i;
            for (let j = 0; j < nBubble; j++) {
                let xPos;
                let yPos;
                switch (pos) {
                    case 0:
                        xPos = 10 + Math.random() * 50;
                        yPos = 5 + Math.random() * 590;
                        console.log("switch0");
                        break;
                    case 1:
                        xPos = 740 + Math.random() * 40;
                        yPos = 5 + Math.random() * 590;
                        console.log("switch2");
                        break;
                    case 2:
                        xPos = 1330 + Math.random() * 40;
                        yPos = 5 + Math.random() * 590;
                        console.log("switch4");
                        break;
                    default: break;
                }
                let bubble = new abschluss.Bubble(xPos, yPos);
                abschluss.allO.push(bubble);
            }
        }
        console.log(abschluss.allO);
        // animate
        animate();
    }
    //Animation
    function animate() {
        console.log("animate");
        abschluss.crc.clearRect(0, 0, abschluss.crc.canvas.width, abschluss.crc.canvas.height);
        abschluss.crc.putImageData(imgData, 0, 0);
        if (abschluss.allO[0].typ == "main") {
            for (let i = 0; i < abschluss.allO.length; i++) {
                abschluss.allO[i].update();
            }
        }
        handleGameOver();
        window.setTimeout(animate, 5);
    }
    function handleKeydown(_event) {
        console.log(_event.keyCode);
        switch (_event.keyCode) {
            //Leertaste
            case 32:
                createFood();
                break;
            //Pfeil links
            case 37:
                mainFish.handleKeyevent("left");
                break;
            //Pfeil oben
            case 38:
                mainFish.handleKeyevent("top");
                break;
            //Pfeil rechts
            case 39:
                mainFish.handleKeyevent("right");
                break;
            //Pfeil down
            case 40:
                mainFish.handleKeyevent("down");
                break;
            default: break;
        }
    }
    function createFood() {
        console.log("fire create food");
        let food = new abschluss.Food(imgs[5], "food", 25, 100);
        abschluss.allO.push(food);
        food.draw();
        console.log("created");
    }
    function handleGameOver() {
    }
})(abschluss || (abschluss = {}));
//# sourceMappingURL=main.js.map