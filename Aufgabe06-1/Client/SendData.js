var A06_Konzept;
(function (A06_Konzept) {
    window.addEventListener("load", init);
    // let address: string = "http://localhost:8100";
    let address = "https://eiaannsophie.herokuapp.com/";
    function init(_event) {
        setupColorDivs();
    }
    function setupColorDivs() {
        let colors = ["red", "green", "blue"];
        let divs = document.getElementsByTagName("div");
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }
    function handleClickOnDiv(_event) {
        let style = _event.target.style;
        console.log(style.backgroundColor);
        // ruf funktion für request auf
        sendRequestWithCustomData(style.backgroundColor);
    }
    //bastelt request zusammen
    function sendRequestWithCustomData(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(A06_Konzept || (A06_Konzept = {}));
//# sourceMappingURL=SendData.js.map