/* 
Aufgabe 09: Canvas
Name: Annsophie Rösch
Matrikel: 257727
Datum: 02/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace canvas_seaworld {

    //function für Wasser
    export function drawWaterGradient(_c1: string, _c2: string, _x: number, _y: number, _r1: number, _r2: number, _crc: CanvasRenderingContext2D): void {
        //Wasser
        var gradient = _crc.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        _crc.fillStyle = gradient;
        _crc.fillRect(0, 0, _x, _y);
        _crc.strokeRect(0, 0, _x, _y);
    }

    //function für Boden
    export function drawGround(_c1: string, _x: number, _y: number, _crc: CanvasRenderingContext2D): void {

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

    //function für Bubble
    export function drawBubble(_cF: string, _cS: string, _x: number, _y: number, _r: number, _crc: CanvasRenderingContext2D): void {

        _crc.beginPath();
        _crc.arc(_x, _y, _r, 0, 2 * Math.PI);
        _crc.strokeStyle = _cS;
        _crc.stroke();
        _crc.fillStyle = _cF;
        _crc.fill();
        _crc.closePath();

    }

}