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
    // Anker
    function drawAnchor(_c1, _c2, _x, _y, _crc) {
        //Zufallszahl für Totation
        let random = Math.random() * 10;
        //ab hier alles rotieren
        _crc.rotate(random * Math.PI / 180);
        //Seil
        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.bezierCurveTo(_x - 100, _y - 100, _x + 70, _y - 170, _x - 10, _y - 475);
        _crc.strokeStyle = _c2;
        _crc.lineWidth = 3;
        _crc.stroke();
        //Anker selbst
        _crc.beginPath();
        _crc.moveTo(_x - 5, _y);
        _crc.lineTo(_x + 5, _y);
        _crc.lineTo(_x + 5, _y + 30);
        _crc.lineTo(_x + 25, _y + 30);
        _crc.lineTo(_x + 25, _y + 35);
        _crc.lineTo(_x + 5, _y + 40);
        _crc.lineTo(_x + 5, _y + 90);
        //kleiner Bogen rechts
        _crc.quadraticCurveTo(_x + 5, _y + 115, _x + 40, _y + 80);
        //Pfeil rechts
        _crc.lineTo(_x + 35, _y + 75);
        _crc.lineTo(_x + 55, _y + 70);
        _crc.lineTo(_x + 50, _y + 90);
        _crc.lineTo(_x + 45, _y + 85);
        //unterer Bogen
        _crc.quadraticCurveTo(_x, _y + 140, _x - 45, _y + 85);
        //Pfeil links
        _crc.lineTo(_x - 50, _y + 90);
        _crc.lineTo(_x - 55, _y + 70);
        _crc.lineTo(_x - 35, _y + 75);
        _crc.lineTo(_x - 40, _y + 80);
        //kleiner Bogen links
        _crc.quadraticCurveTo(_x - 5, _y + 115, _x - 5, _y + 90);
        //Weg nach oben
        _crc.lineTo(_x - 5, _y + 40);
        _crc.lineTo(_x - 25, _y + 35);
        _crc.lineTo(_x - 25, _y + 30);
        _crc.lineTo(_x - 5, _y + 30);
        _crc.fillStyle = _c1;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = _c2;
        _crc.stroke();
        //Rotation aufheben
        _crc.rotate(-random * Math.PI / 180);
    }
    canvas_seaworld.drawAnchor = drawAnchor;
})(canvas_seaworld || (canvas_seaworld = {}));
//# sourceMappingURL=anchor.js.map