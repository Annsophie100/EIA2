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
    //grosse Alge
    function drawThreeCurveAlga(_c1, _c2, _x, _y, _crc) {
        _crc.fillStyle = _c1;
        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.quadraticCurveTo(_x - 20, _y - 25, _x - 5, _y - 70);
        _crc.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
        _crc.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
        _crc.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
        _crc.quadraticCurveTo(_x + 40, _y - 105, _x + 27, _y - 70);
        _crc.quadraticCurveTo(_x + 20, _y - 30, _x + 40, _y);
        _crc.closePath();
        _crc.fill();
        _crc.strokeStyle = _c2;
        _crc.stroke();
    }
    canvas_seaworld.drawThreeCurveAlga = drawThreeCurveAlga;
    // kleine Alge
    function drawTwoCurveAlga(_c1, _c2, _x, _y, _crc) {
        _crc.fillStyle = _c1;
        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
        _crc.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
        _crc.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
        _crc.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
        _crc.closePath();
        _crc.fill();
        _crc.strokeStyle = _c2;
        _crc.stroke();
    }
    canvas_seaworld.drawTwoCurveAlga = drawTwoCurveAlga;
})(canvas_seaworld || (canvas_seaworld = {}));
//# sourceMappingURL=plant.js.map