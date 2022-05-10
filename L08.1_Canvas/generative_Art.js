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
        crc2.fillRect(0, 0, 700, 700);
    }
    function triangle() {
        for (let i = 1; i <= 30; i++) {
            values.push(randomNumber());
            // let gradient = crc2.createRadialGradient(100,110,15,100,110,45);
            crc2.beginPath();
            crc2.lineWidth = rndmStroke();
            crc2.moveTo(randomNumber(), randomNumber());
            crc2.lineTo(randomNumber(), randomNumber());
            crc2.lineTo(randomNumber(), randomNumber());
            crc2.closePath();
            crc2.stroke();
            // gradient.addColorStop(0, 'red');
            // gradient.addColorStop(1, 'green');
            // crc2.strokeStyle = gradient;
            // crc2.strokeStyle = "HSL(" + rndmH + "," + rndmS() + "%," + rndmL() + "%,)";
            crc2.strokeStyle = "HSL(23, 85%, 50%)";
            // crc2.strokeStyle = "rgb(" + 0 + "," + rndmRGB() + "," + rndmRGB() + 0 + ")";
            crc2.shadowOffsetX = 5;
            crc2.shadowOffsetY = 5;
            crc2.shadowBlur = 5;
            // crc2.shadowColor = "grey";
            frame();
        }
        console.log(values);
    }
    function frame() {
        crc2.beginPath();
        crc2.lineWidth = 20;
        crc2.moveTo(100, 100);
        crc2.lineTo(800, 100);
        crc2.lineTo(800, 800);
        crc2.lineTo(100, 800);
        crc2.closePath();
        crc2.stroke();
        crc2.shadowOffsetX = rndmShadow();
        crc2.shadowOffsetY = rndmShadow();
        crc2.shadowBlur = 5;
        crc2.shadowColor = String(rndmRGB());
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
            crc2.strokeStyle = "rgb(" + rndmH + "," + rndmS() + "," + rndmL() + ")";
        }
        console.log(values);
    }
    function rndmStroke() {
        return (Math.floor(Math.random() * 15));
    }
    // Random Color Hue
    function rndmH() {
        return (Math.floor(Math.random() * 100));
    }
    // Random Color Saturation
    function rndmS() {
        return (Math.floor(Math.random() * 100));
    }
    // Random Color Lumetri
    function rndmL() {
        return (Math.floor(Math.random() * 100));
    }
    // Random Color RGB
    function rndmRGB() {
        return (Math.floor(Math.random() * 255));
    }
    function randomNumber() {
        return (Math.floor(Math.random() * (700 - 200) + 200));
    }
    // Shadow Offset
    function rndmShadow() {
        return (Math.floor(Math.random() * 20));
    }
})(BobRossAtelier || (BobRossAtelier = {}));
//# sourceMappingURL=generative_Art.js.map