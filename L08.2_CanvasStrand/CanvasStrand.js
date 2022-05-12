"use strict";
var RobBossAtelier;
(function (RobBossAtelier) {
    window.addEventListener("load", hndLoad);
    window.addEventListener("resize", hndResize);
    let canvas;
    let crc2;
    let resizeW;
    let resizeH;
    // LOAD
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        fillCanvas();
        single();
    }
    // -------------------------
    // RESIZE
    function hndResize() {
        resizeW = window.innerWidth;
        resizeH = window.innerHeight;
        console.log("W= " + resizeW + " H= " + resizeH);
        crc2.transform(100, 0, 0, 100, 0, 0);
    }
    // -------------------------
    // CANVAS
    function fillCanvas() {
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 0, 700, 700);
        crc2.save();
    }
    // EINZELNES ELEMENT
    function single() {
        crc2.beginPath();
        crc2.lineWidth = 20;
        crc2.moveTo(50, 50);
        crc2.lineTo(400, 400);
        crc2.lineTo(200, 400);
        crc2.closePath();
        crc2.stroke();
    }
})(RobBossAtelier || (RobBossAtelier = {}));
//# sourceMappingURL=CanvasStrand.js.map