"use strict";
var RobBossAtelier;
(function (RobBossAtelier) {
    window.addEventListener("load", hndLoad);
    // window.addEventListener("resize", hndResize);
    let canvas;
    let crc2;
    // let rndmX: number;
    // let rndmY: number;
    // let resizeW: number;
    // let resizeH: number;
    let palmPosX;
    let palmPosY;
    let palmScale;
    // LOAD
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        // debugger;
        // hndResize(); 
        sky();
        sun();
        clouds();
        rock();
        ship();
        mountain();
        coast();
        water();
        shark();
        people();
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
    function sky() {
        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(2000, 0);
        crc2.lineTo(2000, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        let gradient = crc2.createRadialGradient(1100, 400, 50, 1000, 400, 1000);
        gradient.addColorStop(0, "#f18d00");
        gradient.addColorStop(0.5, "#d8dadd");
        gradient.addColorStop(1, "#71739a");
        crc2.fillStyle = gradient;
        // crc2.fillStyle = "#E080BD";
        crc2.fill();
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
        let gradient = crc2.createRadialGradient(1100, 400, 200, 1100, 400, 500);
        gradient.addColorStop(0, "#FDC90D");
        gradient.addColorStop(1, "#f18d00");
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
        crc2.closePath();
        let gradient = crc2.createLinearGradient(100, 100, 100, 500);
        gradient.addColorStop(0, "#5C6144");
        gradient.addColorStop(1, "#416139");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function coast() {
        crc2.beginPath();
        crc2.moveTo(1150, 500);
        crc2.bezierCurveTo(1150, 500, -350, 600, 2000, 1200);
        crc2.lineTo(0, 1200);
        crc2.lineTo(0, 500);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 700, 1000, 1000);
        gradient.addColorStop(1, "#FAD456");
        gradient.addColorStop(0, "#E0B249");
        crc2.fillStyle = gradient;
        crc2.fill();
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
        let gradient = crc2.createLinearGradient(2000, 500, 500, 1000);
        gradient.addColorStop(0, "#4C8DAD");
        gradient.addColorStop(1, "#61C6FA");
        crc2.fillStyle = gradient;
        crc2.fill();
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
            crc2.fillStyle = "rgba(235, 78, 72, 0.5)";
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
        let posXShip = rndShipPosX();
        let j = 30;
        crc2.save();
        crc2.translate(posXShip, 500);
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
        // Schornstein 
        for (let i = 1; i <= 4; i++) {
            crc2.beginPath();
            crc2.moveTo(j, -20);
            crc2.lineTo(j + 5, -50);
            crc2.lineTo(j + 20, -50);
            crc2.lineTo(j + 15, -20);
            crc2.fillStyle = "#212121";
            crc2.fill();
            crc2.strokeStyle = "#212121";
            crc2.stroke();
            j += 30;
        }
        crc2.restore();
    }
    // LAND OBJEKTE
    // ----------------------------
    function towel() {
        let j = 600;
        let posTowelX = 260;
        for (let i = 0; i < 3; i++) {
            crc2.save();
            crc2.translate(posTowelX, j);
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
            crc2.restore();
            towelPerson(posTowelX, j);
            j += 100;
        }
    }
    function towelPerson(_posX, _posY) {
        crc2.save();
        crc2.translate(_posX, _posY);
        // Head
        crc2.moveTo(0, 0);
        crc2.beginPath();
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
    function people() {
        crc2.save();
        crc2.translate(1000, 700);
        crc2.rotate(Math.PI * 1 / 2);
        // Head
        crc2.moveTo(0, 0);
        crc2.beginPath();
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
    function palmTree() {
        for (let i = 0; i < 20; i++) {
            palmPosX = rndPalmPosX();
            palmPosY = rndPalmPosY();
            palmScale = rndmPalmScale();
            crc2.save();
            crc2.translate(palmPosX, palmPosY);
            // crc2.scale(palmScale / 10, palmScale / 10);
            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(100, -300, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, -200, 100, -200, 100, -300);
            crc2.lineWidth = 15;
            crc2.strokeStyle = "#2e1600";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            let j = 5.5;
            let k = 6;
            crc2.save();
            crc2.translate(palmPosX + 100, palmPosY - 300);
            // crc2.moveTo(0, 0);
            // crc2.arc(0, 0, 10, 0, Math.PI * 2);
            // crc2.closePath();
            // Blätter 
            // crc2.scale(palmScale / 10, palmScale / 10);
            for (let i = 0; i < 3; i++) {
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.rotate(j);
                crc2.lineTo(50, 10);
                crc2.lineTo(100, 50);
                crc2.lineTo(110, 100);
                crc2.lineTo(90, 80);
                crc2.lineTo(80, 60);
                crc2.lineTo(50, 20);
                crc2.lineTo(0, 0);
                crc2.closePath();
                crc2.lineWidth = 5;
                crc2.strokeStyle = "#264014";
                crc2.fillStyle = "#264014";
                crc2.fill();
                crc2.stroke();
                crc2.fill();
                j = +0.5;
            }
            crc2.scale(-1, 1);
            for (let i = 0; i < 3; i++) {
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.rotate(Math.PI * k / 4);
                crc2.lineTo(50, 10);
                crc2.lineTo(100, 50);
                crc2.lineTo(110, 100);
                crc2.lineTo(90, 80);
                crc2.lineTo(80, 60);
                crc2.lineTo(50, 20);
                crc2.lineTo(0, 0);
                crc2.closePath();
                crc2.lineWidth = 5;
                crc2.strokeStyle = "#264014";
                crc2.fillStyle = "#264014";
                crc2.fill();
                crc2.stroke();
                crc2.fill();
                k = +1;
            }
        }
        crc2.restore();
    }
    function shark() {
        crc2.save();
        crc2.translate(1500, 600);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.arc(0, 0, 100, 0, Math.PI * 2);
        crc2.stroke();
        crc2.restore();
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
        return Math.floor(Math.random() * 600);
    }
    function rndPalmPosY() {
        return Math.floor(Math.random() * (1000 - 200) + 200);
    }
})(RobBossAtelier || (RobBossAtelier = {}));
//# sourceMappingURL=CanvasStrand.js.map