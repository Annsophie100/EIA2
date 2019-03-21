/*
Aufgabe 00: Miniseite
Name: Annsophie Rösch
Matrikel: 257727
Datum: 22.Mrz18

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
function greetUser() {
    var eingabe = prompt("Wie heißt du?", "");
    if (eingabe != null) {
        document.getElementById("HuHu").innerHTML =
            "Herzlich Wilkommen, " + eingabe + "! Ich wünsche dir einen schönen Tag";
    }
}
//# sourceMappingURL=aufgabe00.js.map