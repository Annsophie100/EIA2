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
    // Anker
    function drawAnchor(_c1, _c2, _x, _y) {
        //Zufallszahl für Totation
        let random = Math.random() * 10;
        //ab hier alles rotieren
        canvas_with_food.crc.rotate(random * Math.PI / 180);
        //Seil
        canvas_with_food.crc.beginPath();
        canvas_with_food.crc.moveTo(_x, _y);
        canvas_with_food.crc.bezierCurveTo(_x - 100, _y - 100, _x + 70, _y - 170, _x - 10, _y - 475);
        canvas_with_food.crc.strokeStyle = _c2;
        canvas_with_food.crc.lineWidth = 3;
        canvas_with_food.crc.stroke();
        //Anker selbst
        canvas_with_food.crc.beginPath();
        canvas_with_food.crc.moveTo(_x - 5, _y);
        canvas_with_food.crc.lineTo(_x + 5, _y);
        canvas_with_food.crc.lineTo(_x + 5, _y + 30);
        canvas_with_food.crc.lineTo(_x + 25, _y + 30);
        canvas_with_food.crc.lineTo(_x + 25, _y + 35);
        canvas_with_food.crc.lineTo(_x + 5, _y + 40);
        canvas_with_food.crc.lineTo(_x + 5, _y + 90);
        //kleiner Bogen rechts
        canvas_with_food.crc.quadraticCurveTo(_x + 5, _y + 115, _x + 40, _y + 80);
        //Pfeil rechts
        canvas_with_food.crc.lineTo(_x + 35, _y + 75);
        canvas_with_food.crc.lineTo(_x + 55, _y + 70);
        canvas_with_food.crc.lineTo(_x + 50, _y + 90);
        canvas_with_food.crc.lineTo(_x + 45, _y + 85);
        //unterer Bogen
        canvas_with_food.crc.quadraticCurveTo(_x, _y + 140, _x - 45, _y + 85);
        //Pfeil links
        canvas_with_food.crc.lineTo(_x - 50, _y + 90);
        canvas_with_food.crc.lineTo(_x - 55, _y + 70);
        canvas_with_food.crc.lineTo(_x - 35, _y + 75);
        canvas_with_food.crc.lineTo(_x - 40, _y + 80);
        //kleiner Bogen links
        canvas_with_food.crc.quadraticCurveTo(_x - 5, _y + 115, _x - 5, _y + 90);
        //Weg nach oben
        canvas_with_food.crc.lineTo(_x - 5, _y + 40);
        canvas_with_food.crc.lineTo(_x - 25, _y + 35);
        canvas_with_food.crc.lineTo(_x - 25, _y + 30);
        canvas_with_food.crc.lineTo(_x - 5, _y + 30);
        canvas_with_food.crc.fillStyle = _c1;
        canvas_with_food.crc.fill();
        canvas_with_food.crc.closePath();
        canvas_with_food.crc.strokeStyle = _c2;
        canvas_with_food.crc.stroke();
        //Rotation aufheben
        canvas_with_food.crc.rotate(-random * Math.PI / 180);
    }
    canvas_with_food.drawAnchor = drawAnchor;
})(canvas_with_food || (canvas_with_food = {}));
//# sourceMappingURL=anchor.js.map