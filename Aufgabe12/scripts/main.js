/*
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Annsophie Rösch
Matrikel: 257727
Datum: 23/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var canvas_with_food;
(function (canvas_with_food) {
    window.addEventListener("load", init);
    let imgData;
    console.log("CanvasRendering2d active");
    //Array der movingObjects
    let movingObjects = [];
    let foodColors = [
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
    let redOrangeColors = [
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
    let purpleColors = [
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
    let nFish1 = 10;
    let nFish2 = 10;
    let nBubble = 40;
    let nStreamHinten = 2;
    let nStreamVorn = 3;
    //init
    function init() {
        console.log("#call init");
        canvas_with_food.canvas = document.getElementsByTagName("canvas")[0];
        canvas_with_food.crc = canvas_with_food.canvas.getContext("2d");
        //EventListener
        canvas_with_food.canvas.addEventListener("click", feedFish);
        //staticObjects
        canvas_with_food.drawStaticBackground();
        imgData = canvas_with_food.crc.getImageData(0, 0, canvas_with_food.canvas.width, canvas_with_food.canvas.height);
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
                let bubble = new canvas_with_food.Bubble(xPos, yPos);
                movingObjects.push(bubble);
            }
        }
        //Fische
        for (let i = 0; i < nFish1; i++) {
            let rndm1 = Math.floor(Math.random() * redOrangeColors.length);
            let rndm2 = Math.floor(Math.random() * redOrangeColors.length);
            let color1 = redOrangeColors[rndm1];
            let color2 = redOrangeColors[rndm2];
            let fish = new canvas_with_food.Fish1(color1, color2);
            movingObjects.push(fish);
        }
        //Fische
        for (let i = 0; i < nFish2; i++) {
            let rndm1 = Math.floor(Math.random() * purpleColors.length);
            let rndm2 = Math.floor(Math.random() * purpleColors.length);
            let color1 = purpleColors[rndm1];
            let color2 = purpleColors[rndm2];
            let fish = new canvas_with_food.Fish2(color1, color2);
            movingObjects.push(fish);
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
                let bubble = new canvas_with_food.Bubble(xPos, yPos);
                movingObjects.push(bubble);
            }
        }
        animate();
    }
    //Animation
    function animate() {
        window.setTimeout(animate, 10);
        canvas_with_food.crc.clearRect(0, 0, canvas_with_food.crc.canvas.width, canvas_with_food.crc.canvas.height);
        canvas_with_food.crc.putImageData(imgData, 0, 0);
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
        canvas_with_food.drawStaticFront();
    }
    //Erstellung Futter
    function feedFish(_event) {
        let xPos = _event.clientX;
        let yPos = _event.clientY;
        //ausgleich der css Zentrierung
        xPos -= 10;
        yPos -= 75;
        let n = 1 + Math.floor(Math.random() * 5);
        for (let i = 0; i < n; i++) {
            let rndm = Math.floor(Math.random() * foodColors.length);
            let food = new canvas_with_food.Foods(xPos, yPos, foodColors[rndm]);
            movingObjects.push(food);
        }
    }
})(canvas_with_food || (canvas_with_food = {}));
//# sourceMappingURL=main.js.map