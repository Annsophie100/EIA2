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
    // Anker
    function drawAnchor(_c1, _c2, _x, _y) {
        //Zufallszahl für Totation
        let random = Math.random() * 10;
        //ab hier alles rotieren
        canvas_seaworldtest.crc.rotate(random * Math.PI / 180);
        //Seil
        canvas_seaworldtest.crc.beginPath();
        canvas_seaworldtest.crc.moveTo(_x, _y);
        canvas_seaworldtest.crc.bezierCurveTo(_x - 100, _y - 100, _x + 70, _y - 170, _x - 10, _y - 475);
        canvas_seaworldtest.crc.strokeStyle = _c2;
        canvas_seaworldtest.crc.lineWidth = 3;
        canvas_seaworldtest.crc.stroke();
        //Anker selbst
        canvas_seaworldtest.crc.beginPath();
        canvas_seaworldtest.crc.moveTo(_x - 5, _y);
        canvas_seaworldtest.crc.lineTo(_x + 5, _y);
        canvas_seaworldtest.crc.lineTo(_x + 5, _y + 30);
        canvas_seaworldtest.crc.lineTo(_x + 25, _y + 30);
        canvas_seaworldtest.crc.lineTo(_x + 25, _y + 35);
        canvas_seaworldtest.crc.lineTo(_x + 5, _y + 40);
        canvas_seaworldtest.crc.lineTo(_x + 5, _y + 90);
        //kleiner Bogen rechts
        canvas_seaworldtest.crc.quadraticCurveTo(_x + 5, _y + 115, _x + 40, _y + 80);
        //Pfeil rechts
        canvas_seaworldtest.crc.lineTo(_x + 35, _y + 75);
        canvas_seaworldtest.crc.lineTo(_x + 55, _y + 70);
        canvas_seaworldtest.crc.lineTo(_x + 50, _y + 90);
        canvas_seaworldtest.crc.lineTo(_x + 45, _y + 85);
        //unterer Bogen
        canvas_seaworldtest.crc.quadraticCurveTo(_x, _y + 140, _x - 45, _y + 85);
        //Pfeil links
        canvas_seaworldtest.crc.lineTo(_x - 50, _y + 90);
        canvas_seaworldtest.crc.lineTo(_x - 55, _y + 70);
        canvas_seaworldtest.crc.lineTo(_x - 35, _y + 75);
        canvas_seaworldtest.crc.lineTo(_x - 40, _y + 80);
        //kleiner Bogen links
        canvas_seaworldtest.crc.quadraticCurveTo(_x - 5, _y + 115, _x - 5, _y + 90);
        //Weg nach oben
        canvas_seaworldtest.crc.lineTo(_x - 5, _y + 40);
        canvas_seaworldtest.crc.lineTo(_x - 25, _y + 35);
        canvas_seaworldtest.crc.lineTo(_x - 25, _y + 30);
        canvas_seaworldtest.crc.lineTo(_x - 5, _y + 30);
        canvas_seaworldtest.crc.fillStyle = _c1;
        canvas_seaworldtest.crc.fill();
        canvas_seaworldtest.crc.closePath();
        canvas_seaworldtest.crc.strokeStyle = _c2;
        canvas_seaworldtest.crc.stroke();
        //Rotation aufheben
        canvas_seaworldtest.crc.rotate(-random * Math.PI / 180);
    }
    canvas_seaworldtest.drawAnchor = drawAnchor;
})(canvas_seaworldtest || (canvas_seaworldtest = {}));
//# sourceMappingURL=anchor.js.map