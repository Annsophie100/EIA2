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
    //function dori
    function drawGuppyFish(_x, _y, _c1, _c2, _crc) {
        //Fisch
        //Körper
        _crc.beginPath();
        _crc.moveTo(_x, _y);
        _crc.quadraticCurveTo(_x + 30, _y - 20, _x + 60, _y);
        _crc.quadraticCurveTo(_x + 80, _y, _x + 100, _y - 30);
        _crc.quadraticCurveTo(_x + 75, _y, _x + 100, _y + 40);
        _crc.quadraticCurveTo(_x + 80, _y + 10, _x + 60, _y + 10);
        _crc.quadraticCurveTo(_x + 15, _y + 20, _x, _y);
        // create gradient
        var grd = _crc.createLinearGradient(_x, _y, _x + 90, _y + 10);
        grd.addColorStop(0, _c1);
        grd.addColorStop(1, _c2);
        // fill && stroke with gradient
        _crc.fillStyle = grd;
        _crc.fill();
        _crc.closePath();
        _crc.strokeStyle = grd;
        _crc.lineWidth = 1;
        _crc.stroke();
        //Auge
        _crc.beginPath();
        _crc.arc(_x + 15, _y - 3, 3, 0, 2 * Math.PI);
        _crc.strokeStyle = "black";
        _crc.lineWidth = 2;
        _crc.stroke();
        _crc.fillStyle = "white";
        _crc.fill();
        //Auge - Pupille 
        _crc.beginPath();
        _crc.arc(_x + 14, _y - 3, 1.5, 0, 2 * Math.PI);
        _crc.strokeStyle = "white";
        _crc.fillStyle = "black";
        _crc.stroke();
        _crc.fill();
        //Mund
        _crc.beginPath();
        _crc.moveTo(_x + 5, _y + 8);
        _crc.quadraticCurveTo(_x + 15, _y + 13, _x + 20, _y + 3);
        _crc.strokeStyle = "transparent";
        _crc.fillStyle = "powderblue";
        _crc.stroke();
        _crc.fill();
    }
    canvas_seaworld.drawGuppyFish = drawGuppyFish;
})(canvas_seaworld || (canvas_seaworld = {}));
//# sourceMappingURL=fish.js.map