/*
Aufgabe 11: Canvas Inheritance
Name: Annsophie Rösch
Matrikel: 257727
Datum: 16/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var canvas_seaworldtest;
(function (canvas_seaworldtest) {
    //static function
    function drawStaticBackground() {
        //Rahmen
        canvas_seaworldtest.crc.strokeStyle = "black";
        canvas_seaworldtest.crc.strokeRect(0, 0, canvas_seaworldtest.canvas.width, canvas_seaworldtest.canvas.height);
        //Wasser
        drawWaterGradient("PowderBlue", "LightSkyBlue ", canvas_seaworldtest.canvas.width, canvas_seaworldtest.canvas.height, 70, 500);
        //hintere Pflanzengruppe links
        drawThreeCurveAlga("#375635", "transparent", 400, 600);
        drawThreeCurveAlga("#375635", "transparent", 440, 650);
        drawTwoCurveAlga("#527c4f", "transparent", 420, 660);
        //hintere Pflanzengruppe rechts
        drawThreeCurveAlga("#375635", "transparent", 1115, 570);
        drawTwoCurveAlga("#527c4f", "transparent", 1070, 630);
        drawTwoCurveAlga("#527c4f", "transparent", 1100, 660);
        //Boden
        drawGround("#d9ad73", 0, 500);
        //Anker mit Zufallsposition
        for (let i = 0; i < 1; i++) {
            let x = 50 + Math.random() * 1300;
            let y = 100 + Math.random() * 50;
            canvas_seaworldtest.drawAnchor("DimGray", "#404040", x, y);
        }
    }
    canvas_seaworldtest.drawStaticBackground = drawStaticBackground;
    function drawStaticFront() {
        //linke Pflanzengruppe
        drawTwoCurveAlga("#486328", "transparent", 0, 640);
        drawThreeCurveAlga("#1e4710", "transparent", 15, 600);
        drawTwoCurveAlga("#486328", "transparent", 35, 680);
        //mittlere Pflanzengruppe
        drawThreeCurveAlga("#1e4710", "transparent", 760, 600);
        drawTwoCurveAlga("#486328", "transparent", 730, 660);
        //rechte Pflanzengruppe
        drawThreeCurveAlga("#1e4710", "transparent", 1365, 620);
        drawThreeCurveAlga("#1e4710", "transparent", 1330, 600);
        drawTwoCurveAlga("#486328", "transparent", 1345, 650);
    }
    canvas_seaworldtest.drawStaticFront = drawStaticFront;
    //function für Wasser
    function drawWaterGradient(_c1, _c2, _x, _y, _r1, _r2) {
        //Wasser
        var gradient = canvas_seaworldtest.crc.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        canvas_seaworldtest.crc.fillStyle = gradient;
        canvas_seaworldtest.crc.fillRect(0, 0, _x, _y);
        canvas_seaworldtest.crc.strokeRect(0, 0, _x, _y);
    }
    canvas_seaworldtest.drawWaterGradient = drawWaterGradient;
    //function für Boden
    function drawGround(_c1, _x, _y) {
        //Boden
        canvas_seaworldtest.crc.beginPath();
        canvas_seaworldtest.crc.moveTo(_x, _y);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 130, _y - 20, _x + 260, _y + 50);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 390, _y + 100, _x + 540, _y);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 700, _y - 150, _x + 850, _y - 50);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 1100, _y + 90, _x + 1220, _y - 25);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 1300, _y - 90, _x + 1400, _y - 50);
        canvas_seaworldtest.crc.lineTo(_x + 1400, _y + 100);
        canvas_seaworldtest.crc.lineTo(_x, _y + 100);
        canvas_seaworldtest.crc.lineTo(_x, _y);
        canvas_seaworldtest.crc.stroke();
        canvas_seaworldtest.crc.fillStyle = _c1;
        canvas_seaworldtest.crc.fill();
        canvas_seaworldtest.crc.closePath();
    }
    canvas_seaworldtest.drawGround = drawGround;
    //grosse Alge
    function drawThreeCurveAlga(_c1, _c2, _x, _y) {
        canvas_seaworldtest.crc.fillStyle = _c1;
        canvas_seaworldtest.crc.beginPath();
        canvas_seaworldtest.crc.moveTo(_x, _y);
        canvas_seaworldtest.crc.quadraticCurveTo(_x - 20, _y - 25, _x - 5, _y - 70);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
        canvas_seaworldtest.crc.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 40, _y - 105, _x + 27, _y - 70);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 20, _y - 30, _x + 40, _y);
        canvas_seaworldtest.crc.closePath();
        canvas_seaworldtest.crc.fill();
        canvas_seaworldtest.crc.strokeStyle = _c2;
        canvas_seaworldtest.crc.stroke();
    }
    canvas_seaworldtest.drawThreeCurveAlga = drawThreeCurveAlga;
    // kleine Alge
    function drawTwoCurveAlga(_c1, _c2, _x, _y) {
        canvas_seaworldtest.crc.fillStyle = _c1;
        canvas_seaworldtest.crc.beginPath();
        canvas_seaworldtest.crc.moveTo(_x, _y);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
        canvas_seaworldtest.crc.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
        canvas_seaworldtest.crc.closePath();
        canvas_seaworldtest.crc.fill();
        canvas_seaworldtest.crc.strokeStyle = _c2;
        canvas_seaworldtest.crc.stroke();
    }
    canvas_seaworldtest.drawTwoCurveAlga = drawTwoCurveAlga;
})(canvas_seaworldtest || (canvas_seaworldtest = {}));
//# sourceMappingURL=statics.js.map