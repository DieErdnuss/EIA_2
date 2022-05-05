"use strict";
var BobRossAtelier;
(function (BobRossAtelier) {
    window.addEventListener("load", hndLoad);
    let canvas;
    let crc2;
    let values = new Array();
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        fillCanvas();
        triangle();
        circle();
    }
    function fillCanvas() {
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(25, 25, 1000, 1000);
    }
    function triangle() {
        for (let i = 1; i <= 30; i++) {
            values.push(randomNumber());
            crc2.beginPath();
            crc2.lineWidth = rndmStroke();
            crc2.moveTo(randomNumber(), randomNumber());
            crc2.lineTo(randomNumber(), randomNumber());
            crc2.lineTo(randomNumber(), randomNumber());
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "rgb(" + 0 + "," + rndmRGB() + "," + rndmRGB() + ")";
        }
        console.log(values);
    }
    function circle() {
        for (let i = 1; i <= 30; i++) {
            values.push(randomNumber());
            crc2.beginPath();
            crc2.lineWidth = rndmStroke();
            crc2.beginPath();
            crc2.arc(randomNumber(), randomNumber(), randomNumber(), randomNumber(), 1.2 + Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "rgb(" + 0 + "," + rndmRGB() + "," + rndmRGB() + ")";
        }
        console.log(values);
    }
    function rndmStroke() {
        return (Math.floor(Math.random() * 50));
    }
    function rndmRGB() {
        return (Math.floor(Math.random() * 255));
    }
    function randomNumber() {
        return (Math.floor(Math.random() * (1000 - 400) + 100));
    }
})(BobRossAtelier || (BobRossAtelier = {}));
//# sourceMappingURL=generative_Art.js.map