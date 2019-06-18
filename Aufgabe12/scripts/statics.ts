/* 
Aufgabe 12: Canvas Vererbung&Polymorphie
Name: Annsophie Rösch
Matrikel: 257727
Datum: 23/06/2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace canvas_with_food {

    //static function
    export function drawStaticBackground(): void {

        //Rahmen
        crc.strokeStyle = "black";
        crc.strokeRect(0, 0, canvas.width, canvas.height);

        //Wasser
        drawWaterGradient("PowderBlue", "LightSkyBlue ", canvas.width, canvas.height, 70, 500);

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
        for (let i: number = 0; i < 1; i++) {
            let x: number = 50 + Math.random() * 1300;
            let y: number = 100 + Math.random() * 50;
            drawAnchor("DimGray", "#404040", x, y);
        }
    }

    export function drawStaticFront(): void {
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

    //function für Wasser
    export function drawWaterGradient(_c1: string, _c2: string, _x: number, _y: number, _r1: number, _r2: number): void {
        //Wasser
        var gradient = crc.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        crc.fillStyle = gradient;
        crc.fillRect(0, 0, _x, _y);
        crc.strokeRect(0, 0, _x, _y);
    }

    //function für Boden
    export function drawGround(_c1: string, _x: number, _y: number): void {

        //Boden
        crc.beginPath();
        crc.moveTo(_x, _y);

        crc.quadraticCurveTo(_x + 130, _y - 20, _x + 260, _y + 50);
        crc.quadraticCurveTo(_x + 390, _y + 100, _x + 540, _y);
        crc.quadraticCurveTo(_x + 700, _y - 150, _x + 850, _y - 50);
        crc.quadraticCurveTo(_x + 1100, _y + 90, _x + 1220, _y - 25);
        crc.quadraticCurveTo(_x + 1300, _y - 90, _x + 1400, _y - 50);
        crc.lineTo(_x + 1400, _y + 100);
        crc.lineTo(_x, _y + 100);
        crc.lineTo(_x, _y);
        crc.stroke();
        crc.fillStyle = _c1;
        crc.fill();
        crc.closePath();

    }

    //grosse Alge
    export function drawThreeCurveAlga(_c1: string, _c2: string, _x: number, _y: number): void {

        crc.fillStyle = _c1;

        crc.beginPath();

        crc.moveTo(_x, _y);
        crc.quadraticCurveTo(_x - 20, _y - 25, _x - 5, _y - 70);
        crc.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
        crc.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
        crc.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
        crc.quadraticCurveTo(_x + 40, _y - 105, _x + 27, _y - 70);
        crc.quadraticCurveTo(_x + 20, _y - 30, _x + 40, _y);
        crc.closePath();
        crc.fill();

        crc.strokeStyle = _c2;
        crc.stroke();

    }

    // kleine Alge
    export function drawTwoCurveAlga(_c1: string, _c2: string, _x: number, _y: number): void {

        crc.fillStyle = _c1;

        crc.beginPath();

        crc.moveTo(_x, _y);
        crc.quadraticCurveTo(_x + 15, _y - 110, _x + 2, _y - 150);
        crc.quadraticCurveTo(_x - 10, _y - 185, _x + 10, _y - 230);
        crc.quadraticCurveTo(_x + 8, _y - 165, _x + 25, _y - 138);
        crc.quadraticCurveTo(_x + 40, _y - 105, _x + 40, _y);
        crc.closePath();
        crc.fill();

        crc.strokeStyle = _c2;
        crc.stroke();

    }

}