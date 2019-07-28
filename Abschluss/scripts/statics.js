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
    function drawStaticBackground() {
        //Rahmen
        abschluss.crc.strokeStyle = "black";
        abschluss.crc.strokeRect(0, 0, abschluss.canvas.width, abschluss.canvas.height);
        //Wasser
        drawWaterGradient("PowderBlue", "LightSkyBlue ", abschluss.canvas.width, abschluss.canvas.height, 70, 500);
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
        //Anker mit Zufallsposition
        for (let i = 0; i < 1; i++) {
            let x = 50 + Math.random() * 1300;
            let y = 100 + Math.random() * 50;
            drawAnchor("DimGray", "#404040", x, y);
        }
    }
    abschluss.drawStaticBackground = drawStaticBackground;
    //function für Wasser
    function drawWaterGradient(_c1, _c2, _x, _y, _r1, _r2) {
        //Wasser
        var gradient = abschluss.crc.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        abschluss.crc.fillStyle = gradient;
        abschluss.crc.fillRect(0, 0, _x, _y);
        abschluss.crc.strokeRect(0, 0, _x, _y);
    }
    abschluss.drawWaterGradient = drawWaterGradient;
    //function für Boden
    function drawGround(_c1, _x, _y) {
        //Boden
        abschluss.crc.beginPath();
        abschluss.crc.moveTo(_x, _y);
        abschluss.crc.quadraticCurveTo(_x + 130, _y - 20, _x + 260, _y + 50);
        abschluss.crc.quadraticCurveTo(_x + 390, _y + 100, _x + 540, _y);
        abschluss.crc.quadraticCurveTo(_x + 700, _y - 150, _x + 850, _y - 50);
        abschluss.crc.quadraticCurveTo(_x + 1100, _y + 90, _x + 1220, _y - 25);
        abschluss.crc.quadraticCurveTo(_x + 1300, _y - 90, _x + 1400, _y - 50);
        abschluss.crc.lineTo(_x + 1400, _y + 100);
        abschluss.crc.lineTo(_x, _y + 100);
        abschluss.crc.lineTo(_x, _y);
        abschluss.crc.stroke();
        abschluss.crc.fillStyle = _c1;
        abschluss.crc.fill();
        abschluss.crc.closePath();
    }
    abschluss.drawGround = drawGround;
    //grosse Alge
    function drawThreeCurveAlga(_c1, _c2, _x, _y) {
        abschluss.crc.fillStyle = _c1;
        abschluss.crc.beginPath();
        abschluss.crc.moveTo(_x, _y);
        abschluss.crc.quadraticCurveTo(_x - 20, _y - 25, _x - 5, _y - 70);
        abschluss.crc.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
        abschluss.crc.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
        abschluss.crc.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
        abschluss.crc.quadraticCurveTo(_x + 40, _y - 105, _x + 27, _y - 70);
        abschluss.crc.quadraticCurveTo(_x + 20, _y - 30, _x + 40, _y);
        abschluss.crc.closePath();
        abschluss.crc.fill();
        abschluss.crc.strokeStyle = _c2;
        abschluss.crc.stroke();
    }
    abschluss.drawThreeCurveAlga = drawThreeCurveAlga;
    // kleine Alge
    function drawTwoCurveAlga(_c1, _c2, _x, _y) {
        abschluss.crc.fillStyle = _c1;
        abschluss.crc.beginPath();
        abschluss.crc.moveTo(_x, _y);
        abschluss.crc.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
        abschluss.crc.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
        abschluss.crc.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
        abschluss.crc.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
        abschluss.crc.closePath();
        abschluss.crc.fill();
        abschluss.crc.strokeStyle = _c2;
        abschluss.crc.stroke();
    }
    abschluss.drawTwoCurveAlga = drawTwoCurveAlga;
    // Anker
    function drawAnchor(_c1, _c2, _x, _y) {
        //Zufallszahl für Totation
        let random = Math.random() * 10;
        //ab hier alles rotieren
        abschluss.crc.rotate(random * Math.PI / 180);
        //Seil
        abschluss.crc.beginPath();
        abschluss.crc.moveTo(_x, _y);
        abschluss.crc.bezierCurveTo(_x - 100, _y - 100, _x + 70, _y - 170, _x - 10, _y - 475);
        abschluss.crc.strokeStyle = _c2;
        abschluss.crc.lineWidth = 3;
        abschluss.crc.stroke();
        //Anker selbst
        abschluss.crc.beginPath();
        abschluss.crc.moveTo(_x - 5, _y);
        abschluss.crc.lineTo(_x + 5, _y);
        abschluss.crc.lineTo(_x + 5, _y + 30);
        abschluss.crc.lineTo(_x + 25, _y + 30);
        abschluss.crc.lineTo(_x + 25, _y + 35);
        abschluss.crc.lineTo(_x + 5, _y + 40);
        abschluss.crc.lineTo(_x + 5, _y + 90);
        //kleiner Bogen rechts
        abschluss.crc.quadraticCurveTo(_x + 5, _y + 115, _x + 40, _y + 80);
        //Pfeil rechts
        abschluss.crc.lineTo(_x + 35, _y + 75);
        abschluss.crc.lineTo(_x + 55, _y + 70);
        abschluss.crc.lineTo(_x + 50, _y + 90);
        abschluss.crc.lineTo(_x + 45, _y + 85);
        //unterer Bogen
        abschluss.crc.quadraticCurveTo(_x, _y + 140, _x - 45, _y + 85);
        //Pfeil links
        abschluss.crc.lineTo(_x - 50, _y + 90);
        abschluss.crc.lineTo(_x - 55, _y + 70);
        abschluss.crc.lineTo(_x - 35, _y + 75);
        abschluss.crc.lineTo(_x - 40, _y + 80);
        //kleiner Bogen links
        abschluss.crc.quadraticCurveTo(_x - 5, _y + 115, _x - 5, _y + 90);
        //Weg nach oben
        abschluss.crc.lineTo(_x - 5, _y + 40);
        abschluss.crc.lineTo(_x - 25, _y + 35);
        abschluss.crc.lineTo(_x - 25, _y + 30);
        abschluss.crc.lineTo(_x - 5, _y + 30);
        abschluss.crc.fillStyle = _c1;
        abschluss.crc.fill();
        abschluss.crc.closePath();
        abschluss.crc.strokeStyle = _c2;
        abschluss.crc.stroke();
        //Rotation aufheben
        abschluss.crc.rotate(-random * Math.PI / 180);
    }
    abschluss.drawAnchor = drawAnchor;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=statics.js.map