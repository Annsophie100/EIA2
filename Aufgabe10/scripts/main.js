/*
Aufgabe 09: Canvas
Name: Annsophie Rösch
Matrikel: 257727
Datum: 02/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var canvas_seaworld;
(function (canvas_seaworld) {
    window.addEventListener("load", init);
    canvas_seaworld.b = "black";
    function init() {
        console.log("Wer wohnt da im Wasser, ja ganz tief im Meeer?");
        let canvas = document.getElementsByTagName("canvas")[0];
        let crc = canvas.getContext("2d");
        console.log("CanvasRendering2d active");
        crc.strokeStyle = canvas_seaworld.b;
        crc.strokeRect(0, 0, canvas.width, canvas.height);
        //Wasser
        canvas_seaworld.drawWaterGradient("PowderBlue", "LightSkyBlue ", canvas.width, canvas.height, 70, 500, crc);
        //hintere Pflanzengruppe links
        canvas_seaworld.drawThreeCurveAlga("#375635", "transparent", 400, 600, crc);
        canvas_seaworld.drawThreeCurveAlga("#375635", "transparent", 440, 650, crc);
        canvas_seaworld.drawTwoCurveAlga("#527c4f", "transparent", 420, 660, crc);
        //hintere Pflanzengruppe rechts
        canvas_seaworld.drawThreeCurveAlga("#375635", "transparent", 1115, 570, crc);
        canvas_seaworld.drawTwoCurveAlga("#527c4f", "transparent", 1070, 630, crc);
        canvas_seaworld.drawTwoCurveAlga("#527c4f", "transparent", 1100, 660, crc);
        //Boden
        canvas_seaworld.drawGround("#d9ad73", 0, 500, crc);
        //linke Pflanzengruppe
        canvas_seaworld.drawTwoCurveAlga("#486328", "transparent", 0, 640, crc);
        canvas_seaworld.drawThreeCurveAlga("#1e4710", "transparent", 15, 600, crc);
        canvas_seaworld.drawTwoCurveAlga("#486328", "transparent", 35, 680, crc);
        //mittlere Pflanzengruppe
        canvas_seaworld.drawThreeCurveAlga("#1e4710", "transparent", 760, 600, crc);
        canvas_seaworld.drawTwoCurveAlga("#486328", "transparent", 730, 660, crc);
        //rechte Pflanzengruppe
        canvas_seaworld.drawThreeCurveAlga("#1e4710", "transparent", 1365, 620, crc);
        canvas_seaworld.drawThreeCurveAlga("#1e4710", "transparent", 1330, 600, crc);
        canvas_seaworld.drawTwoCurveAlga("#486328", "transparent", 1345, 650, crc);
        //Anker mit Zufallsposition
        for (let i = 0; i < 1; i++) {
            let x = 50 + Math.random() * 1300;
            let y = 100 + Math.random() * 50;
            canvas_seaworld.drawAnchor("DimGray", "#404040", x, y, crc);
        }
        //BubbleLoop links vorn
        for (let i = 0; i < 40; i++) {
            let x = 10 + Math.random() * 50;
            let y = 5 + Math.random() * 590;
            let r = Math.random() * (5 - 2) + 2;
            canvas_seaworld.drawBubble("rgb(206, 220, 226, 0.8)", "Transparent", x, y, r, crc);
        }
        //BubbleLoop links hinten
        for (let i = 0; i < 40; i++) {
            let x = 400 + Math.random() * 50;
            let y = 5 + Math.random() * 540;
            let r = Math.random() * (5 - 2) + 2;
            canvas_seaworld.drawBubble("rgb(206, 220, 226, 0.8)", "Transparent", x, y, r, crc);
        }
        //BubbleLoop mitte vorn
        for (let i = 0; i < 40; i++) {
            let x = 740 + Math.random() * 40;
            let y = 5 + Math.random() * 590;
            let r = Math.random() * (5 - 2) + 2;
            canvas_seaworld.drawBubble("rgb(206, 220, 226, 0.8)", "Transparent", x, y, r, crc);
        }
        //BubbleLoop rechts hinten
        for (let i = 0; i < 40; i++) {
            let x = 1070 + Math.random() * 50;
            let y = 5 + Math.random() * 520;
            let r = Math.random() * (5 - 2) + 2;
            canvas_seaworld.drawBubble("rgb(206, 220, 226, 0.8)", "Transparent", x, y, r, crc);
        }
        //BubbleLoop rechts vorn
        for (let i = 0; i < 30; i++) {
            let x = 1330 + Math.random() * 40;
            let y = 5 + Math.random() * 590;
            let r = Math.random() * (5 - 2) + 2;
            canvas_seaworld.drawBubble("rgb(206, 220, 226, 0.8)", "Transparent", x, y, r, crc);
        }
        //color Array     
        let colors4fish = ["#ffff00", "#ff9933", "#ff5050", "#cc0066", "#ff3399", "#ff00ff", "#660066", "#cc33ff", "#cc0000", "#990033", "#ff6699", "#ffff66", "#99ffcc"];
        //FishLoop
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * 1400;
            let y = 50 + Math.random() * 400;
            let rndm1 = Math.floor(Math.random() * colors4fish.length);
            let rndm2 = Math.floor(Math.random() * colors4fish.length);
            let c1 = colors4fish[rndm1];
            let c2 = colors4fish[rndm2];
            ;
            canvas_seaworld.drawGuppyFish(x, y, c1, c2, crc);
        }
    }
})(canvas_seaworld || (canvas_seaworld = {})); //close namespace
//# sourceMappingURL=main.js.map