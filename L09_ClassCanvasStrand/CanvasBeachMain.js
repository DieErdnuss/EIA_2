"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    window.addEventListener("load", hndLoad);
    window.addEventListener("resize", hndResize);
    let clouds = [];
    let palmtrees = [];
    let peoples = [];
    let ships = [];
    let resizeW;
    let resizeH;
    let winWidth;
    let winHeight;
    let reload;
    function hndLoad() {
        CanvasBeach.canvas = document.querySelector("canvas");
        CanvasBeach.crc2 = CanvasBeach.canvas.getContext("2d");
        winWidth = document.getElementById("windowWidth");
        winHeight = document.getElementById("windowHeight");
        reload = document.getElementById("reload");
        reload.addEventListener("click", hndClick);
        CanvasBeach.canvas.addEventListener("click", hndClick);
        hndResize();
        sky();
        sun();
        rock();
        cloud(10);
        palmtree(20);
        people(3);
        ship(1);
        window.setInterval(update, 20);
    }
    function hndClick(_event) {
        let target = _event.target;
        console.log(target);
    }
    // RESIZE
    function hndResize() {
        resizeW = window.innerWidth;
        resizeH = window.innerHeight;
        // if (resizeH >= resizeW) {
        // canvas.style.height = String(resizeH - 50 + "px");
        // } else canvas.style.width = String(resizeW - 200 + "px");
        // console.log("W= " + resizeW + " H= " + resizeH);
        CanvasBeach.canvas.style.width = String(resizeW - 200 + "px");
        winWidth.innerHTML = String(resizeW + " W");
        winHeight.innerHTML = String(resizeH + " H");
    }
    function update() {
        sky();
        sun();
        // console.log("update");
        for (let cloud of clouds) {
            cloud.move(1 / 50);
            cloud.draw();
        }
        for (let ship of ships) {
            ship.draw();
            ship.move(1 / 100);
        }
        rock();
        water();
        mountain();
        for (let people of peoples) {
            people.draw();
            people.move(1 / 50);
        }
        coast();
        for (let palmtree of palmtrees) {
            // palmtree.move(1 / 50);
            palmtree.draw();
        }
        // canvas.style.backgroundColor = 
    }
    function sky() {
        CanvasBeach.crc2.save();
        CanvasBeach.crc2.translate(0, 0);
        CanvasBeach.crc2.beginPath();
        CanvasBeach.crc2.moveTo(0, 0);
        CanvasBeach.crc2.lineTo(2000, 0);
        CanvasBeach.crc2.lineTo(2000, 700);
        CanvasBeach.crc2.lineTo(0, 700);
        CanvasBeach.crc2.closePath();
        let gradient = CanvasBeach.crc2.createRadialGradient(1100, 400, 50, 1000, 400, 1000);
        gradient.addColorStop(0, "#f18d00");
        gradient.addColorStop(0.5, "#d8dadd");
        gradient.addColorStop(1, "#71739a");
        CanvasBeach.crc2.fillStyle = gradient;
        // crc2.fillStyle = "#E080BD";
        CanvasBeach.crc2.fill();
        CanvasBeach.crc2.restore();
    }
    function sun() {
        CanvasBeach.crc2.beginPath();
        // crc2.arc(1800, 400, 50, 0, Math.PI * 2);
        CanvasBeach.crc2.stroke();
        CanvasBeach.crc2.fillStyle = "#ffb300";
        CanvasBeach.crc2.fill();
        CanvasBeach.crc2.beginPath();
        CanvasBeach.crc2.arc(1100, 400, 300, 0, Math.PI * 2);
        let gradient = CanvasBeach.crc2.createRadialGradient(1100, 400, 200, 1100, 400, 500);
        gradient.addColorStop(0, "#FDC90D");
        gradient.addColorStop(1, "#f18d00");
        CanvasBeach.crc2.fillStyle = gradient;
        CanvasBeach.crc2.fill();
        // crc2.stroke();
    }
    function mountain() {
        CanvasBeach.crc2.beginPath();
        CanvasBeach.crc2.moveTo(300, 0);
        CanvasBeach.crc2.bezierCurveTo(350, 150, 650, 450, 900, 550);
        CanvasBeach.crc2.bezierCurveTo(950, 450, 950, 440, 1000, 540);
        CanvasBeach.crc2.bezierCurveTo(1050, 440, 1100, 500, 1150, 600);
        CanvasBeach.crc2.lineTo(0, 600);
        CanvasBeach.crc2.lineTo(0, 0);
        CanvasBeach.crc2.closePath();
        let gradient = CanvasBeach.crc2.createLinearGradient(100, 100, 100, 500);
        gradient.addColorStop(0, "#5C6144");
        gradient.addColorStop(1, "#416139");
        CanvasBeach.crc2.fillStyle = gradient;
        CanvasBeach.crc2.fill();
    }
    function water() {
        CanvasBeach.crc2.beginPath();
        CanvasBeach.crc2.moveTo(0, 500);
        CanvasBeach.crc2.lineTo(2000, 500);
        CanvasBeach.crc2.lineTo(2000, 1200);
        CanvasBeach.crc2.lineTo(0, 1200);
        CanvasBeach.crc2.closePath();
        // crc2.bezierCurveTo(1150, 500, -350, 600, 2000, 1200);
        CanvasBeach.crc2.lineTo(2000, 500);
        CanvasBeach.crc2.closePath();
        let gradient = CanvasBeach.crc2.createLinearGradient(2000, 500, 500, 1000);
        gradient.addColorStop(0, "#4C8DAD");
        gradient.addColorStop(1, "#61C6FA");
        CanvasBeach.crc2.fillStyle = gradient;
        CanvasBeach.crc2.fill();
    }
    function rock() {
        CanvasBeach.crc2.save();
        CanvasBeach.crc2.translate(1200, 500);
        CanvasBeach.crc2.beginPath();
        CanvasBeach.crc2.moveTo(0, 0);
        CanvasBeach.crc2.lineTo(10, -50);
        CanvasBeach.crc2.lineTo(20, -30);
        CanvasBeach.crc2.lineTo(35, -70);
        CanvasBeach.crc2.lineTo(45, -35);
        CanvasBeach.crc2.lineTo(70, -50);
        CanvasBeach.crc2.lineTo(80, 0);
        CanvasBeach.crc2.fillStyle = "#242424";
        CanvasBeach.crc2.fill();
        CanvasBeach.crc2.strokeStyle = "grey";
        CanvasBeach.crc2.stroke();
        CanvasBeach.crc2.closePath();
        CanvasBeach.crc2.restore();
    }
    function coast() {
        CanvasBeach.crc2.beginPath();
        CanvasBeach.crc2.moveTo(1150, 600);
        CanvasBeach.crc2.bezierCurveTo(1150, 630, -350, 700, 2000, 1400);
        CanvasBeach.crc2.lineTo(0, 1200);
        CanvasBeach.crc2.lineTo(0, 600);
        CanvasBeach.crc2.closePath();
        let gradient = CanvasBeach.crc2.createLinearGradient(0, 700, 1000, 1000);
        gradient.addColorStop(1, "#FAD456");
        gradient.addColorStop(0, "#E0B249");
        CanvasBeach.crc2.fillStyle = gradient;
        CanvasBeach.crc2.fill();
    }
    function cloud(_n) {
        for (let i = 0; i < _n; i++) {
            let rndmSize = Math.random() * (0.5 - 0.1) + 1;
            let cloud = new CanvasBeach.Cloud(rndmSize);
            // console.log(cloud);
            clouds.push(cloud);
        }
    }
    function palmtree(_n) {
        for (let i = 0; i < _n; i++) {
            let palmtree = new CanvasBeach.Palmtree(1);
            palmtrees.push(palmtree);
        }
    }
    function people(_n) {
        for (let i = 0; i < _n; i++) {
            let people = new CanvasBeach.People(3);
            peoples.push(people);
        }
    }
    function ship(_n) {
        for (let i = 0; i < _n; i++) {
            let ship = new CanvasBeach.Ship(1);
            ships.push(ship);
        }
    }
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=CanvasBeachMain.js.map