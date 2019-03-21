function greetUser() {
    var eingabe = prompt("Wie heißt du?", "");
    if (eingabe != null) {
        document.getElementById("HuHu").innerHTML =
            "Herzlich Wilkommen, " + eingabe + "! Ich wünsche dir einen schönen Tag";
        console.log("Huhu,", + eingabe, + "! Ich wünsche dir einen schönen Tag");
    }
}
//# sourceMappingURL=aufgabe00.js.map