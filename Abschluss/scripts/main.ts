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
    window.addEventListener("load", init);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let score: number = 0;
    export let highscore: boolean = false;
    export let eingabe: string;
    //listener!!

    let imgData: ImageData;
    console.log("CanvasRendering2d active");

    //Anzahl der Objekte festlegen
    let mainFish: MainFish;
    let nEnemy0: number = 5;
    let nEnemy1: number = 3;
    let nEnemy2: number = 2;
    let nEnemy3: number = 2;
    let nStream: number = 5;
    let nBubble: number = 40;


    //Array aller Objekte
    export let allO: Objects[] = [];
    export let enemys: EnemyFishes[] = [];
    export let sharks: Shark[] = [];
    export let foods: Food[] = [];

    let imgs: string[] = ["img/mainFish.png", "img/enemy0.png", "img/enemy1.png", "img/enemy2.png", "img/enemy3.png", "img/shark.png", "img/food0.png", "img/food1.png"];


    //init

    function init(): void {
        console.log("INIT");
        document.getElementById('gamePage').style.display = "none";
        document.getElementById('introPage').style.display = "block";

        document.getElementById('startButt').addEventListener("click", startBuildingGame);

    }
    //_________________________________________________
    function startBuildingGame(): void {
        console.log("START");

        //Display
        document.getElementById('gamePage').style.display = "block";
        document.getElementById('introPage').style.display = "none";


        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        //  EventListener
        document.body.addEventListener("keydown", handleKeydown);


        //  staticObjects ohne Interaktion
        drawStaticBackground();

        // imgData speichern
        imgData = crc.getImageData(0, 0, canvas.width, canvas.height);

        // mainFish
        mainFish = new MainFish(imgs[0], "main", 90, 60, 1);
        allO.push(mainFish);

        // enemys

        //smallest
        for (let i: number = 0; i < nEnemy0; i++) {
            let enemy = new EnemyFishes(imgs[1], "enemy0", 74, 50, 0);
            allO.push(enemy);
            enemys.push(enemy);
        }

        //middle
        for (let i: number = 0; i < nEnemy1; i++) {
            let enemy = new EnemyFishes(imgs[2], "enemy1", 114, 80, 1);
            allO.push(enemy);
            enemys.push(enemy);
        }

        //big
        for (let i: number = 0; i < nEnemy2; i++) {
            let enemy = new EnemyFishes(imgs[3], "enemy2", 162, 120, 2);
            allO.push(enemy);
            enemys.push(enemy);
        }

        //bigger
        for (let i: number = 0; i < nEnemy3; i++) {
            let enemy = new EnemyFishes(imgs[4], "enemy3", 179, 140, 3);
            allO.push(enemy);
            enemys.push(enemy);
        }

        //shark
        let shark = new Shark(imgs[5], "shark", 361, 150, 100);
        allO.push(shark);
        sharks.push(shark);


        //Blubbles 
        for (let i: number = 0; i < nStream; i++) {
            let pos: number = i;

            for (let j: number = 0; j < nBubble; j++) {
                let xPos: number;
                let yPos: number;

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
                let bubble: Bubble = new Bubble("img/shell0.png", xPos, yPos);
                allO.push(bubble);
            }
        }


        let counterDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("scoreDiv");
        let counter: HTMLFieldSetElement = document.createElement("fieldset");
        counter.innerHTML = "<p>";
        counter.innerHTML += score.toString();
        counter.innerHTML += " Punkte";
        counter.innerHTML += "</p>";

        counterDiv.appendChild(counter);

        console.log(allO);

        // animate
        animate();
    }

    //Animation
    function animate(): void {
        //console.log("animate");

        crc.clearRect(0, 0, crc.canvas.width, crc.canvas.height);
        crc.putImageData(imgData, 0, 0);

        if (allO[0].typ == "main") {
            for (let i: number = 0; i < allO.length; i++) {
                allO[i].update();
            }

        }

        if (highscore == true) {
            handleGameOver();
        }
        window.setTimeout(animate, 5);
    }

    function handleKeydown(_event: KeyboardEvent): void {
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

    function createFood(): void {
        console.log("fire create food");
        let food: Food = new Food(imgs[6], "food", 25, 100, 0);
        allO.push(food);
        foods.push(food);
        food.draw();
        console.log("created");
    }

    function handleGameOver(): void {
        window.clearTimeout(window.setTimeout(animate, 5));
        eingabe = prompt("Du hast einen Score von " + score + " erspielt. Bitte trage deinen Namen ein!");
        insert();
    }

}
