"use strict";
var RobBossAtelier;
(function (RobBossAtelier) {
    window.addEventListener("load", hndLoad);
    // window.addEventListener("resize", hndResize);
    let canvas;
    let crc2;
    // let sliderX: HTMLInputElement;
    // let sliderY: HTMLInputElement;
    // let positionX: number;
    // let positionY: number;
    let rndmX;
    let rndmY;
    let resizeW;
    let resizeH;
    // LOAD
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        // sliderX = <HTMLInputElement>document.getElementById("SliderX");
        // sliderY = <HTMLInputElement>document.getElementById("SliderY");
        // sliderX.addEventListener("change", hndChange);
        // sliderY.addEventListener("change", hndChange);
        // fillCanvas();
        // hndResize(); 
        // rndmX = rndPosX();
        // rndmY = rndPosY();
        horizon();
        sky();
        sun();
        mountain();
        coast();
        water();
        gull();
        towel();
        people();
    }
    // -------------------------
    // RESIZE
    // function hndResize(): void {
    //     resizeW = window.innerWidth;
    //     resizeH = window.innerHeight;
    //     console.log("W= " + resizeW + " H= " + resizeH);
    //     canvas.width = resizeW - 50;
    //     canvas.height = (resizeW / 16) * 9;
    //     circle();
    //     horizon();
    //     single();
    // }
    // function hndChange(_event: Event): void {
    //     positionX = Number(sliderX.value);
    //     positionY = Number(sliderY.value);
    //     console.log(positionX);
    //     console.log(positionY);
    //     // crc2.setTransform(1, 0, 0, 1, positionX, positionY);
    //     // scale(positionX, positionY);
    // }
    // -------------------------
    // CANVAS
    function fillCanvas() {
        crc2.fillStyle = "#000";
        crc2.fillRect(0, 0, 700, 700);
    }
    // ---------------------------------------
    // SZENE
    function horizon() {
        crc2.beginPath;
        crc2.lineWidth = 2;
        crc2.moveTo(0, 500);
        crc2.lineTo(0, 500);
        crc2.lineTo(2000, 500);
        crc2.closePath;
        crc2.strokeStyle = "#000";
        crc2.stroke();
    }
    function sky() {
        crc2.beginPath();
        crc2.moveTo(300, 0);
        crc2.bezierCurveTo(350, 150, 650, 450, 900, 450);
        crc2.bezierCurveTo(950, 450, 950, 440, 1000, 440);
        crc2.bezierCurveTo(1050, 440, 1100, 500, 1150, 500);
        crc2.lineTo(2000, 500);
        crc2.lineTo(2000, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#F7D80C";
        crc2.fill();
    }
    function sun() {
        crc2.beginPath;
        crc2.moveTo(1900, 150);
        crc2.arc(1800, 150, 100, 0, 2 * Math.PI);
        crc2.fillStyle = "#B1D8F0";
        crc2.fill();
        crc2.strokeStyle = "#B1D8F0";
        crc2.stroke();
    }
    function mountain() {
        crc2.beginPath();
        crc2.moveTo(300, 0);
        crc2.bezierCurveTo(350, 150, 650, 450, 900, 450);
        crc2.bezierCurveTo(950, 450, 950, 440, 1000, 440);
        crc2.bezierCurveTo(1050, 440, 1100, 500, 1150, 500);
        crc2.lineTo(0, 500);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.strokeStyle = "#416139";
        crc2.stroke();
        crc2.fillStyle = "#416139";
        crc2.fill();
        // crc2.beginPath();
        // crc2.moveTo(300, 0);
        // crc2.lineTo(100, 100);
        // crc2.lineTo(100, 200);
        // crc2.closePath;
        // crc2.stroke();
    }
    function coast() {
        crc2.beginPath();
        crc2.moveTo(1150, 500);
        crc2.bezierCurveTo(1150, 500, -350, 600, 2000, 1200);
        crc2.lineTo(0, 1200);
        crc2.lineTo(0, 500);
        crc2.closePath();
        crc2.fillStyle = "#E0C782";
        crc2.fill();
        crc2.strokeStyle = "#416139";
        crc2.stroke();
    }
    function water() {
        crc2.beginPath();
        crc2.moveTo(1150, 500);
        crc2.bezierCurveTo(1150, 500, -350, 600, 2000, 1200);
        crc2.lineTo(2000, 500);
        crc2.closePath();
        crc2.fillStyle = "#70B6E6";
        crc2.fill();
        crc2.strokeStyle = "#70B6E6";
        crc2.stroke();
    }
    // -------------------------------------------------------------
    // OBJEKTE
    function gull() {
        for (let i = 0; i < 10; i++) {
            let posX = rndPosX();
            let posY = rndPosY();
            // crc2.beginPath();
            // crc2.moveTo(1150, 150);
            // crc2.bezierCurveTo(1170, 130, 1190, 120, 1200, 150);
            // crc2.bezierCurveTo(1210, 120, 1230, 130, 1250, 150);
            // crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(posX, posY);
            crc2.bezierCurveTo(posX + 20, posY - 20, posX + 40, posY - 30, posX + 50, posY);
            crc2.bezierCurveTo(posX + 60, posY - 30, posX + 70, posY - 20, posX + 100, posY);
            crc2.lineWidth = 5;
            crc2.strokeStyle = "#000";
            crc2.fillStyle = "transparent";
            crc2.fill();
            crc2.stroke();
        }
    }
    function towel() {
        for (let i = 0; 0 < 3; i++) {
            crc2.save();
            crc2.translate(260, 700);
            crc2.beginPath;
            crc2.moveTo(-20, -20);
            crc2.lineTo(200, -10);
            crc2.lineTo(190, 50);
            crc2.lineTo(-40, 40);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.strokeStyle = "#C74847";
            crc2.fillStyle = "#C74847";
            crc2.fill();
            crc2.stroke();
            // Head
            crc2.moveTo(10, 10);
            crc2.arc(0, 10, 10, 0, 2 * Math.PI);
            // Arms
            crc2.lineTo(50, 30);
            crc2.moveTo(10, 10);
            crc2.lineTo(60, 0);
            crc2.moveTo(10, 10);
            // Body
            crc2.lineTo(100, 10);
            crc2.lineTo(150, 30);
            // Legs
            crc2.moveTo(100, 10);
            crc2.lineTo(160, 0);
            crc2.strokeStyle = "#fff";
            crc2.stroke();
            crc2.restore();
        }
    }
    // ---------------------------------------------------------------------------
    // RANDOM NUMBER
    // POSITION
    function rndPosX() {
        return Math.floor(Math.random() * (2000 - 300) + 300);
    }
    function rndPosY() {
        return Math.floor(Math.random() * 400);
    }
})(RobBossAtelier || (RobBossAtelier = {}));
//# sourceMappingURL=CanvasStrand.js.map