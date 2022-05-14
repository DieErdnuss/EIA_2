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
    // let rndmX: number;
    // let rndmY: number;
    // let resizeW: number;
    // let resizeH: number;
    // LOAD
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        // debugger;
        // sliderX = <HTMLInputElement>document.getElementById("SliderX");
        // sliderY = <HTMLInputElement>document.getElementById("SliderY");
        // sliderX.addEventListener("change", hndChange);
        // sliderY.addEventListener("change", hndChange);
        // fillCanvas();
        // hndResize(); 
        // rndmX = rndPosX();
        // rndmY = rndPosY();
        // horizon();
        sky();
        sun();
        clouds();
        rock();
        ship();
        mountain();
        coast();
        water();
        gull();
        towel();
        palmTree();
        // Circle();
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
    // // CANVAS
    // function fillCanvas(): void {
    //     crc2.fillStyle = "#000";
    //     crc2.fillRect(0, 0, 700, 700);
    // }
    // ---------------------------------------
    // SZENE
    // function horizon(): void {
    //     crc2.beginPath;
    //     crc2.lineWidth = 2;
    //     crc2.moveTo(0, 500);
    //     crc2.lineTo(0, 500);
    //     crc2.lineTo(2000, 500);
    //     crc2.strokeStyle = "#000"
    //     crc2.stroke();
    //     crc2.closePath;
    // }
    function sky() {
        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(2000, 0);
        crc2.lineTo(2000, 500);
        crc2.lineTo(0, 500);
        crc2.fillStyle = "#B0E3F0";
        crc2.fill();
        crc2.strokeStyle = "#B0E3F0";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }
    function sun() {
        crc2.beginPath();
        // crc2.arc(1800, 400, 50, 0, Math.PI * 2);
        crc2.stroke();
        crc2.fillStyle = "#ffb300";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(1100, 400, 300, 0, Math.PI * 2);
        let gradient = crc2.createRadialGradient(1100, 400, 1, 1100, 400, 300);
        gradient.addColorStop(0, "#ffb300");
        gradient.addColorStop(1, "#B0E3F0");
        crc2.fillStyle = gradient;
        crc2.fill();
        // crc2.stroke();
    }
    function mountain() {
        crc2.beginPath();
        crc2.moveTo(300, 0);
        crc2.bezierCurveTo(350, 150, 650, 450, 900, 450);
        crc2.bezierCurveTo(950, 450, 950, 440, 1000, 440);
        crc2.bezierCurveTo(1050, 440, 1100, 500, 1150, 500);
        crc2.lineTo(0, 500);
        crc2.lineTo(0, 0);
        crc2.strokeStyle = "#416139";
        crc2.stroke();
        crc2.fillStyle = "#416139";
        crc2.fill();
        crc2.closePath();
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
    function rock() {
        crc2.save();
        crc2.translate(1200, 500);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(10, -50);
        crc2.lineTo(20, -30);
        crc2.lineTo(35, -70);
        crc2.lineTo(45, -35);
        crc2.lineTo(70, -50);
        crc2.lineTo(80, 0);
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.strokeStyle = "grey";
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
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
    function clouds() {
        let posY = rndCloudPosY();
        for (let i = 0; i < 3; i++) {
            let posX = rndCloudPosX();
            let scale = rndmCloudScale();
            crc2.save();
            crc2.translate(posX, posY);
            crc2.scale(scale / 10, scale / 10);
            crc2.beginPath();
            crc2.ellipse(-50, 20, 40, 60, 80, 0, Math.PI * 2);
            crc2.closePath();
            crc2.moveTo(0, 20);
            crc2.ellipse(-50, 45, 200, 15, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.arc(0, 0, 60, 0, Math.PI * 2);
            crc2.closePath();
            crc2.arc(50, 15, 40, 0, Math.PI * 2);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.restore();
        }
    }
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
    function ship() {
        let posX = rndShipPosX();
        crc2.save();
        crc2.translate(posX, 500);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-10, -20);
        crc2.lineTo(200, -20);
        crc2.lineTo(200, 0);
        crc2.lineTo(0, 0);
        crc2.fillStyle = "#a11b00";
        crc2.fill();
        crc2.strokeStyle = "#a11b00";
        crc2.stroke();
        crc2.closePath();
        // Schornstein 1
        crc2.beginPath();
        crc2.moveTo(50, -20);
        crc2.lineTo(55, -50);
        crc2.lineTo(70, -50);
        crc2.lineTo(65, -20);
        crc2.fillStyle = "#212121";
        crc2.fill();
        crc2.strokeStyle = "#212121";
        crc2.stroke();
        // Schornstein 2
        crc2.beginPath();
        crc2.moveTo(80, -20);
        crc2.lineTo(85, -50);
        crc2.lineTo(100, -50);
        crc2.lineTo(95, -20);
        crc2.fillStyle = "#212121";
        crc2.fill();
        crc2.strokeStyle = "#212121";
        crc2.stroke();
        // Schornstein 3
        crc2.beginPath();
        crc2.moveTo(110, -20);
        crc2.lineTo(115, -50);
        crc2.lineTo(130, -50);
        crc2.lineTo(125, -20);
        crc2.fillStyle = "#212121";
        crc2.fill();
        crc2.strokeStyle = "#212121";
        crc2.stroke();
        // Schornstein 4
        crc2.beginPath();
        crc2.moveTo(140, -20);
        crc2.lineTo(145, -50);
        crc2.lineTo(160, -50);
        crc2.lineTo(155, -20);
        crc2.fillStyle = "#212121";
        crc2.fill();
        crc2.strokeStyle = "#212121";
        crc2.stroke();
        crc2.restore();
    }
    // LAND OBJEKTE
    // ----------------------------
    function towel() {
        for (let i = 0; i < 3; i++) {
            crc2.save();
            crc2.translate(260, 700);
            crc2.beginPath();
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
            crc2.closePath();
            // Head
            crc2.beginPath();
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
    function palmTree() {
        for (let i = 0; i < 10; i++) {
            let posX = rndPalmPosX();
            let posY = rndPalmPosY();
            let scale = rndmPalmScale();
            crc2.save();
            crc2.translate(posX, posY);
            crc2.scale(scale / 10, scale / 10);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, -200, 100, -270, 150, -300);
            crc2.lineWidth = 15;
            crc2.strokeStyle = "#2e1600";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            // Blätter 
            let j = 5.5;
            let k = 6;
            crc2.save();
            crc2.translate(posX + 150, posY - 300);
            crc2.scale(scale / 10, scale / 10);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            // crc2.arc(0, 0, 10, 0, Math.PI * 2);
            // crc2.closePath();
            for (let i = 0; i < 3; i++) {
                // crc2.beginPath();
                crc2.rotate(j);
                crc2.lineTo(50, 10);
                crc2.lineTo(100, 50);
                crc2.lineTo(110, 100);
                crc2.lineTo(90, 80);
                crc2.lineTo(80, 60);
                crc2.lineTo(50, 20);
                crc2.lineTo(0, 0);
                crc2.closePath();
                j = +0.5;
            }
            for (let i = 0; i < 3; i++) {
                // crc2.beginPath();
                crc2.scale(-1, 1);
                crc2.rotate(k);
                crc2.lineTo(50, 10);
                crc2.lineTo(100, 50);
                crc2.lineTo(110, 100);
                crc2.lineTo(90, 80);
                crc2.lineTo(80, 60);
                crc2.lineTo(50, 20);
                crc2.lineTo(0, 0);
                crc2.closePath();
                k = +0.5;
            }
            crc2.lineWidth = 5;
            crc2.strokeStyle = "#264014";
            crc2.fillStyle = "#264014";
            crc2.fill();
            crc2.stroke();
            crc2.fill();
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
    // CLOUDS--------------------------
    function rndCloudPosX() {
        return Math.floor(Math.random() * (2000 - 700) + 700);
    }
    // Cloud Position
    function rndCloudPosY() {
        return Math.floor(Math.random() * (300 - 60) + 60);
    }
    // Cloud Size
    function rndmCloudScale() {
        return Math.floor(Math.random() * (20 - 10) + 10);
    }
    // Ship Position-----------------------
    function rndShipPosX() {
        return Math.floor(Math.random() * (2000 - 1400) + 1400);
    }
    // PALM TREES------------------------
    // Palm Size
    function rndmPalmScale() {
        return Math.floor(Math.random() * (20 - 10) + 10);
    }
    // Palm Position
    function rndPalmPosX() {
        return Math.floor(Math.random() * 300);
    }
    function rndPalmPosY() {
        return Math.floor(Math.random() * (1000 - 500) + 500);
    }
})(RobBossAtelier || (RobBossAtelier = {}));
//# sourceMappingURL=CanvasStrand.js.map