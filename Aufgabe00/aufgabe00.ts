document.addEventListener("DOMContentLoaded", greetUser);
function greetUser(): void {
    let eingabe: string = prompt("Wie heißt du?");
    if (eingabe != null) {
        document.getElementById("HuHu").innerHTML =
            "Herzlich Wilkommen, " + eingabe + "! Ich wünsche dir einen schönen Tag";
        console.log("Huhu," + eingabe + "! Ich wünsche dir einen schönen Tag");
    }
}  