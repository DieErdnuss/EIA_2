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
        // circle();
    }
    function fillCanvas() {
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(25, 25, 1000, 1000);
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
            crc2.strokeStyle = "hsl(" + rndmH + "," + rndmS() + "," + rndmL() + "," + 0 + ")";
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
            crc2.strokeStyle = "hsl(" + rndmH + "," + rndmS() + "," + rndmL() + ")";
        }
        console.log(values);
    }
    function rndmStroke() {
        return (Math.floor(Math.random() * 30));
    }
    // Random Color Hue
    function rndmH() {
        return (Math.floor(Math.random() * 359));
    }
    // Random Color Saturation
    function rndmS() {
        return (Math.floor(Math.random() * 500));
    }
    // Random Color Lumetri
    function rndmL() {
        return (Math.floor(Math.random() * 1000));
    }
    function randomNumber() {
        return (Math.floor(Math.random() * (1000 - 100) + 100));
    }
})(BobRossAtelier || (BobRossAtelier = {}));
//# sourceMappingURL=generative_Art.js.map