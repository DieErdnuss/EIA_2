"use strict";
var vererbung;
(function (vererbung) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        vererbung.canvas = document.querySelector("canvas");
        vererbung.crc = vererbung.canvas.getContext("2d");
        // debugger;
    }
    let circle = new vererbung.Circle(100, 100);
    circle.draw();
})(vererbung || (vererbung = {}));
//# sourceMappingURL=vererbungMain.js.map