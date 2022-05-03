"use strict";
window.addEventListener("load", hndLoad);
function hndLoad() {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    crc2.fillRect(50, 50, crc2.canvas.width, crc2.canvas.height);
    crc2.fillStyle = "#FF0000";
}
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
//# sourceMappingURL=canvas_Uebung.js.map