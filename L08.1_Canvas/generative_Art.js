"use strict";
var BobRossAtelier;
(function (BobRossAtelier) {
    window.addEventListener("load", hndLoad);
    let canvas;
    let crc2;
    let rndmNumber = Math.floor(Math.random() * 1000);
    let rndmScale = Math.floor(Math.random() * 1000);
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        fillCanvas(rndmNumber, rndmScale);
        square();
        circle();
    }
    function fillCanvas() {
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(25, 25, 1000, 1000);
    }
    function square(_rndmNumber, _rndmScale) {
        crc2.beginPath();
        crc2.lineWidth = 20;
        crc2.moveTo(_rndmNumber, _rndmScale);
        crc2.lineTo(_rndmNumber, _rndmScale);
        crc2.lineTo(300, 800);
        // crc2.lineTo(500, 500);
        crc2.closePath();
        crc2.stroke();
    }
    function circle() {
    }
    // function square(): void {
    //     crc2.beginPath(rndmPos,)
    //     let x: number;
    //     let y: number;
    //     let a: number;
    //     let b: number;
    //     for (let i: number = 1; i < 2; i++) {
    //         let rndmNumber: number = Math.floor(Math.random() * 1000);
    //         // let rndmScale: number = Math.floor(Math.random() * 1000);
    //         console.log();
    //     }
    // }
})(BobRossAtelier || (BobRossAtelier = {}));
//# sourceMappingURL=generative_Art.js.map