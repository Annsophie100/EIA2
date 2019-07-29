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
    abschluss.death = false;
    let counterP;
    //listener!!
    let imgData;
    console.log("CanvasRendering2d active");
    //Anzahl der Objekte festlegen
    let mainFish;
    let nEnemy0 = 5;
    let nEnemy1 = 3;
    let nEnemy2 = 2;
    let nEnemy3 = 2;
    let nStream = 5;
    let nBubble = 40;
    //Array aller Objekte
    abschluss.allO = [];
    abschluss.enemys = [];
    abschluss.sharks = [];
    abschluss.foods = [];
    let imgs = ["img/mainFish.png", "img/enemy0.png", "img/enemy1.png", "img/enemy2.png", "img/enemy3.png", "img/shark.png", "img/food0.png", "img/food1.png"];
    //init
    function init() {
        console.log("INIT");
        document.getElementById('gamePage').style.display = "none";
        document.getElementById('introPage').style.display = "block";
        document.getElementById('startButt').addEventListener("click", startBuildingGame);
    }
    //_________________________________________________
    function startBuildingGame() {
        console.log("START");
        //Display
        document.getElementById('gamePage').style.display = "block";
        document.getElementById('introPage').style.display = "none";
        abschluss.canvas = document.getElementsByTagName("canvas")[0];
        abschluss.crc = abschluss.canvas.getContext("2d");
        //  EventListener
        document.body.addEventListener("keydown", handleKeydown);
        //  staticObjects ohne Interaktion
        abschluss.drawStaticBackground();
        // imgData speichern
        imgData = abschluss.crc.getImageData(0, 0, abschluss.canvas.width, abschluss.canvas.height);
        // mainFish
        mainFish = new abschluss.MainFish(imgs[0], "main", 90, 60, 1);
        abschluss.allO.push(mainFish);
        // enemys
        //smallest
        for (let i = 0; i < nEnemy0; i++) {
            let enemy = new abschluss.EnemyFishes(imgs[1], "enemy0", 74, 50, 0);
            abschluss.allO.push(enemy);
            abschluss.enemys.push(enemy);
        }
        //middle
        for (let i = 0; i < nEnemy1; i++) {
            let enemy = new abschluss.EnemyFishes(imgs[2], "enemy1", 114, 80, 1);
            abschluss.allO.push(enemy);
            abschluss.enemys.push(enemy);
        }
        //big
        for (let i = 0; i < nEnemy2; i++) {
            let enemy = new abschluss.EnemyFishes(imgs[3], "enemy2", 162, 120, 2);
            abschluss.allO.push(enemy);
            abschluss.enemys.push(enemy);
        }
        //bigger
        for (let i = 0; i < nEnemy3; i++) {
            let enemy = new abschluss.EnemyFishes(imgs[4], "enemy3", 179, 140, 3);
            abschluss.allO.push(enemy);
            abschluss.enemys.push(enemy);
        }
        //shark
        let shark = new abschluss.Shark(imgs[5], "shark", 361, 150, 100);
        abschluss.allO.push(shark);
        abschluss.sharks.push(shark);
        //Blubbles 
        for (let i = 0; i < nStream; i++) {
            let pos = i;
            for (let j = 0; j < nBubble; j++) {
                let xPos;
                let yPos;
                switch (pos) {
                    //hinten
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
                    //vorne   
                    case 2:
                        xPos = 10 + Math.random() * 50;
                        yPos = 5 + Math.random() * 590;
                        console.log("switch0");
                        break;
                    case 3:
                        xPos = 740 + Math.random() * 40;
                        yPos = 5 + Math.random() * 590;
                        console.log("switch2");
                        break;
                    case 4:
                        xPos = 1330 + Math.random() * 40;
                        yPos = 5 + Math.random() * 590;
                        console.log("switch4");
                        break;
                    default: break;
                }
                let bubble = new abschluss.Bubble("img/food0.png", xPos, yPos);
                abschluss.allO.push(bubble);
            }
        }
        // create counter
        let counterDiv = document.getElementById("scoreDiv");
        let counterF = document.createElement("fieldset");
        counterP = document.createElement("p");
        counterDiv.appendChild(counterF);
        counterF.appendChild(counterP);
        fillCounter();
        console.log(abschluss.allO);
        // animate
        animate();
    }
    //Animation
    function animate() {
        //console.log("animate");
        abschluss.crc.clearRect(0, 0, abschluss.crc.canvas.width, abschluss.crc.canvas.height);
        abschluss.crc.putImageData(imgData, 0, 0);
        if (abschluss.allO[0].typ == "main") {
            for (let i = 0; i < abschluss.allO.length; i++) {
                abschluss.allO[i].update();
            }
        }
        fillCounter();
        if (abschluss.death == true) {
            handleGameOver();
        }
        window.setTimeout(animate, 5);
    }
    // Counter befüllen
    function fillCounter() {
        counterP.innerText = "";
        counterP.innerText += abschluss.score.toString();
        counterP.innerText += " Punkte";
    }
    // handle Keyboardevent
    function handleKeydown(_event) {
        //console.log(_event.keyCode);
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
    // create food
    function createFood() {
        console.log("fire create food");
        let food = new abschluss.Food(imgs[6], "food", 25, 100, 0);
        abschluss.allO.push(food);
        abschluss.foods.push(food);
        food.draw();
        console.log("created");
    }
    // handle Game over
    function handleGameOver() {
        window.clearTimeout(window.setTimeout(animate, 5));
        abschluss.eingabe = prompt("Du hast einen Score von " + abschluss.score + " erspielt. Bitte trage deinen Namen ein!");
        abschluss.insert();
    }
})(abschluss || (abschluss = {}));
//# sourceMappingURL=main.js.map