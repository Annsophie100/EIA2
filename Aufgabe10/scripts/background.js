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
    //function für Wasser
    function drawWaterGradient(_c1, _c2, _x, _y, _r1, _r2, _crc) {
        //Wasser
        var gradient = _crc.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        _crc.fillStyle = gradient;
        _crc.fillRect(0, 0, _x, _y);
        _crc.strokeRect(0, 0, _x, _y);
    }
    canvas_seaworld.drawWaterGradient = drawWaterGradient;
    //function für Boden
    function drawGround(_c1, _x, _y, _crc) {
        //Boden
        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.quadraticCurveTo(_x + 130, _y - 20, _x + 260, _y + 50);
        _crc.quadraticCurveTo(_x + 390, _y + 100, _x + 540, _y);
        _crc.quadraticCurveTo(_x + 700, _y - 150, _x + 850, _y - 50);
        _crc.quadraticCurveTo(_x + 1100, _y + 90, _x + 1220, _y - 25);
        _crc.quadraticCurveTo(_x + 1300, _y - 90, _x + 1400, _y - 50);
        _crc.lineTo(_x + 1400, _y + 100);
        _crc.lineTo(_x, _y + 100);
        _crc.lineTo(_x, _y);
        _crc.stroke();
        _crc.fillStyle = _c1;
        _crc.fill();
        _crc.closePath();
    }
    canvas_seaworld.drawGround = drawGround;
    //function für Bubble
    function drawBubble(_cF, _cS, _x, _y, _r, _crc) {
        _crc.beginPath();
        _crc.arc(_x, _y, _r, 0, 2 * Math.PI);
        _crc.strokeStyle = _cS;
        _crc.stroke();
        _crc.fillStyle = _cF;
        _crc.fill();
        _crc.closePath();
    }
    canvas_seaworld.drawBubble = drawBubble;
})(canvas_seaworld || (canvas_seaworld = {}));
//# sourceMappingURL=background.js.map