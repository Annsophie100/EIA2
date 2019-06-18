/* 
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Annsophie Rösch
Matrikel: 257727
Datum: 23/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace canvas_with_food {
    window.addEventListener("load", init);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let imgData: ImageData;
    console.log("CanvasRendering2d active");

    //Array der movingObjects
    let movingObjects: MovingObjects[] = [];

    let foodColors: string[] = [
        "Olive",
        "DarkOliveGreen",
        "DarkKhaki",
        "DarkGoldenRod",
        "SeaGreen",
        "MediumSeaGreen",
        "DarkSeaGreen",
        "Chocolate",
        "IndianRed",
        "Bisque",
        "Brown"
    ];

    let redOrangeColors: string[] = [
        "Orange",
        "DarkOrange",
        "Coral",
        "Tomato",
        "OrangeRed",
        "Crimson",
        "DarkRed",
        "Red",
        "#9B1B30",
        "#E08119",
        "#F96714"
    ];

    let purpleColors: string[] = [
        "Orchid",
        "Violet",
        "MediumOrchid",
        "DarkOrchid",
        "Purple",
        "LightCoral",
        "Magenta",
        "MediumVioletRed",
        "PaleVioletRed"
    ];

    //Anzahl Fische + Bubbles
    let nFish1: number = 10;
    let nFish2: number = 10;
    let nBubble: number = 40;
    let nStreamHinten: number = 2;
    let nStreamVorn: number = 3;


    //init
    function init(): void {
        console.log("#call init");
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        //EventListener
        canvas.addEventListener("click", feedFish);

        //staticObjects
        drawStaticBackground();

        imgData = crc.getImageData(0, 0, canvas.width, canvas.height);

        //Blubbles hinten
        for (let i: number = 0; i < nStreamHinten; i++) {
            let pos: number = i;

            for (let j: number = 0; j < nBubble; j++) {
                let xPos: number;
                let yPos: number;

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
                let bubble: Bubble = new Bubble(xPos, yPos);
                movingObjects.push(bubble);
            }
        }


        //Fische
        for (let i: number = 0; i < nFish1; i++) {
            let rndm1: number = Math.floor(Math.random() * redOrangeColors.length);
            let rndm2: number = Math.floor(Math.random() * redOrangeColors.length);
            let color1: string = redOrangeColors[rndm1];
            let color2: string = redOrangeColors[rndm2];
            let fish: Fish1 = new Fish1(color1, color2);
            movingObjects.push(fish);
        }

        //Fische
        for (let i: number = 0; i < nFish2; i++) {
            let rndm1: number = Math.floor(Math.random() * purpleColors.length);
            let rndm2: number = Math.floor(Math.random() * purpleColors.length);
            let color1: string = purpleColors[rndm1];
            let color2: string = purpleColors[rndm2];
            let fish: Fish2 = new Fish2(color1, color2);
            movingObjects.push(fish);
        }

        //Blubbles vorn
        for (let i: number = 0; i < nStreamVorn; i++) {
            let pos: number = i;

            for (let j: number = 0; j < nBubble; j++) {
                let xPos: number;
                let yPos: number;

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
                let bubble: Bubble = new Bubble(xPos, yPos);
                movingObjects.push(bubble);
            }
        }
        animate();
    }

    //Animation
    function animate(): void {

        window.setTimeout(animate, 10);

        crc.clearRect(0, 0, crc.canvas.width, crc.canvas.height);
        crc.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }

        drawStaticFront();

    }

    //Erstellung Futter
    function feedFish(_event: MouseEvent): void {
        let xPos: number = _event.clientX;
        let yPos: number = _event.clientY;
        //ausgleich der css Zentrierung
        xPos -= 10;
        yPos -= 75;

        let n: number = 1 + Math.floor(Math.random() * 5);

        for (let i: number = 0; i < n; i++) {
            let rndm: number = Math.floor(Math.random() * foodColors.length);
            let food: Foods = new Foods(xPos, yPos, foodColors[rndm]);
            movingObjects.push(food);
        }
    }

}