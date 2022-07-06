"use strict";
var L11CanvasBeach;
(function (L11CanvasBeach) {
    class Palmtree {
        position;
        velocity;
        size;
        constructor(_size) {
            this.position = new L11CanvasBeach.Vector(300 + Math.random() * (-100 - 300), 600 + Math.random() * (1500 - 600));
            // this.position.random(800, 700);
            console.log(this.position);
            this.velocity = new L11CanvasBeach.Vector(0, 0);
            // this.velocity.random(20, 100);
            this.size = _size;
            // this.size.scale();
            console.log(this.size);
        }
        move(_timeslice) {
            // console.log("Cloud move");
            let offset = new L11CanvasBeach.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += L11CanvasBeach.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L11CanvasBeach.canvas.height;
            }
            if (this.position.x > L11CanvasBeach.canvas.width) {
                this.position.x -= L11CanvasBeach.canvas.width;
            }
            if (this.position.y > L11CanvasBeach.canvas.height) {
                this.position.y -= L11CanvasBeach.canvas.height;
            }
        }
        draw() {
            // palmPosX = rndPalmPosX();
            // palmPosY = rndPalmPosY();
            L11CanvasBeach.crc2.save();
            L11CanvasBeach.crc2.translate(this.position.x, this.position.y);
            L11CanvasBeach.crc2.moveTo(0, 0);
            L11CanvasBeach.crc2.beginPath();
            // crc2.arc(100, -300, 20, 0, 2 * Math.PI);
            L11CanvasBeach.crc2.closePath();
            L11CanvasBeach.crc2.stroke();
            L11CanvasBeach.crc2.beginPath();
            L11CanvasBeach.crc2.moveTo(0, 0);
            L11CanvasBeach.crc2.bezierCurveTo(0, -200, 100, -200, 100, -300);
            L11CanvasBeach.crc2.lineWidth = 15;
            L11CanvasBeach.crc2.strokeStyle = "#2e1600";
            L11CanvasBeach.crc2.stroke();
            L11CanvasBeach.crc2.closePath();
            L11CanvasBeach.crc2.restore();
            let j = 5.5;
            let k = 6;
            L11CanvasBeach.crc2.save();
            L11CanvasBeach.crc2.translate(this.position.x + 100, this.position.y - 300);
            // crc2.moveTo(0, 0);
            // crc2.arc(0, 0, 10, 0, Math.PI * 2);
            // crc2.closePath();
            // Blätter 
            // crc2.scale(palmScale / 10, palmScale / 10);
            for (let i = 0; i < 3; i++) {
                L11CanvasBeach.crc2.beginPath();
                L11CanvasBeach.crc2.moveTo(0, 0);
                L11CanvasBeach.crc2.rotate(j);
                L11CanvasBeach.crc2.lineTo(50, 10);
                L11CanvasBeach.crc2.lineTo(100, 50);
                L11CanvasBeach.crc2.lineTo(110, 100);
                L11CanvasBeach.crc2.lineTo(90, 80);
                L11CanvasBeach.crc2.lineTo(80, 60);
                L11CanvasBeach.crc2.lineTo(50, 20);
                L11CanvasBeach.crc2.lineTo(0, 0);
                L11CanvasBeach.crc2.closePath();
                L11CanvasBeach.crc2.lineWidth = 5;
                L11CanvasBeach.crc2.strokeStyle = "#264014";
                L11CanvasBeach.crc2.fillStyle = "#264014";
                L11CanvasBeach.crc2.fill();
                L11CanvasBeach.crc2.stroke();
                L11CanvasBeach.crc2.fill();
                j = +0.5;
            }
            L11CanvasBeach.crc2.scale(-1, 1);
            for (let i = 0; i < 3; i++) {
                L11CanvasBeach.crc2.beginPath();
                L11CanvasBeach.crc2.moveTo(0, 0);
                L11CanvasBeach.crc2.rotate(Math.PI * k / 4);
                L11CanvasBeach.crc2.lineTo(50, 10);
                L11CanvasBeach.crc2.lineTo(100, 50);
                L11CanvasBeach.crc2.lineTo(110, 100);
                L11CanvasBeach.crc2.lineTo(90, 80);
                L11CanvasBeach.crc2.lineTo(80, 60);
                L11CanvasBeach.crc2.lineTo(50, 20);
                L11CanvasBeach.crc2.lineTo(0, 0);
                L11CanvasBeach.crc2.closePath();
                L11CanvasBeach.crc2.lineWidth = 5;
                L11CanvasBeach.crc2.strokeStyle = "#264014";
                L11CanvasBeach.crc2.fillStyle = "#264014";
                L11CanvasBeach.crc2.fill();
                L11CanvasBeach.crc2.stroke();
                L11CanvasBeach.crc2.fill();
                k = +1;
            }
            L11CanvasBeach.crc2.resetTransform();
            L11CanvasBeach.crc2.restore();
        }
    }
    L11CanvasBeach.Palmtree = Palmtree;
})(L11CanvasBeach || (L11CanvasBeach = {}));
//# sourceMappingURL=BeachPalmTree.js.map