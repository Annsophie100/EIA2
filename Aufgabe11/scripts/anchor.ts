/* 
Aufgabe 11: Canvas Inheritance
Name: Annsophie Rösch
Matrikel: 257727
Datum: 16/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace canvas_seaworldtest {

    // Anker
    export function drawAnchor(_c1: string, _c2: string, _x: number, _y: number): void {


        //Zufallszahl für Totation
        let random: number = Math.random() * 10;

        //ab hier alles rotieren
        crc.rotate(random * Math.PI / 180);

        //Seil
        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.bezierCurveTo(_x - 100, _y - 100, _x + 70, _y - 170, _x - 10, _y - 475);
        crc.strokeStyle = _c2;
        crc.lineWidth = 3;
        crc.stroke();

        //Anker selbst
        crc.beginPath();
        crc.moveTo(_x - 5, _y);
        crc.lineTo(_x + 5, _y);
        crc.lineTo(_x + 5, _y + 30);
        crc.lineTo(_x + 25, _y + 30);
        crc.lineTo(_x + 25, _y + 35);
        crc.lineTo(_x + 5, _y + 40);
        crc.lineTo(_x + 5, _y + 90);

        //kleiner Bogen rechts
        crc.quadraticCurveTo(_x + 5, _y + 115, _x + 40, _y + 80);

        //Pfeil rechts
        crc.lineTo(_x + 35, _y + 75);
        crc.lineTo(_x + 55, _y + 70);
        crc.lineTo(_x + 50, _y + 90);
        crc.lineTo(_x + 45, _y + 85);

        //unterer Bogen
        crc.quadraticCurveTo(_x, _y + 140, _x - 45, _y + 85);

        //Pfeil links
        crc.lineTo(_x - 50, _y + 90);
        crc.lineTo(_x - 55, _y + 70);
        crc.lineTo(_x - 35, _y + 75);
        crc.lineTo(_x - 40, _y + 80);

        //kleiner Bogen links
        crc.quadraticCurveTo(_x - 5, _y + 115, _x - 5, _y + 90);

        //Weg nach oben
        crc.lineTo(_x - 5, _y + 40);
        crc.lineTo(_x - 25, _y + 35);
        crc.lineTo(_x - 25, _y + 30);
        crc.lineTo(_x - 5, _y + 30);
        crc.fillStyle = _c1;
        crc.fill();
        crc.closePath();
        crc.strokeStyle = _c2;
        crc.stroke();

        //Rotation aufheben
        crc.rotate(-random * Math.PI / 180);
    }

}