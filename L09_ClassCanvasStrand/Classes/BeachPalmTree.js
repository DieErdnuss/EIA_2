"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class Palmtree {
        position;
        velocity;
        size;
        constructor(_size) {
            this.position = new CanvasBeach.Vector(300 + Math.random() * (-100 - 300), 600 + Math.random() * (1500 - 600));
            // this.position.random(800, 700);
            console.log(this.position);
            this.velocity = new CanvasBeach.Vector(0, 0);
            // this.velocity.random(20, 100);
            this.size = _size;
            // this.size.scale();
            console.log(this.size);
        }
        move(_timeslice) {
            // console.log("Cloud move");
            let offset = new CanvasBeach.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += CanvasBeach.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += CanvasBeach.canvas.height;
            }
            if (this.position.x > CanvasBeach.canvas.width) {
                this.position.x -= CanvasBeach.canvas.width;
            }
            if (this.position.y > CanvasBeach.canvas.height) {
                this.position.y -= CanvasBeach.canvas.height;
            }
        }
        draw() {
            // palmPosX = rndPalmPosX();
            // palmPosY = rndPalmPosY();
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(this.position.x, this.position.y);
            CanvasBeach.crc2.moveTo(0, 0);
            CanvasBeach.crc2.beginPath();
            // crc2.arc(100, -300, 20, 0, 2 * Math.PI);
            CanvasBeach.crc2.closePath();
            CanvasBeach.crc2.stroke();
            CanvasBeach.crc2.beginPath();
            CanvasBeach.crc2.moveTo(0, 0);
            CanvasBeach.crc2.bezierCurveTo(0, -200, 100, -200, 100, -300);
            CanvasBeach.crc2.lineWidth = 15;
            CanvasBeach.crc2.strokeStyle = "#2e1600";
            CanvasBeach.crc2.stroke();
            CanvasBeach.crc2.closePath();
            CanvasBeach.crc2.restore();
            let j = 5.5;
            let k = 6;
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(this.position.x + 100, this.position.y - 300);
            // crc2.moveTo(0, 0);
            // crc2.arc(0, 0, 10, 0, Math.PI * 2);
            // crc2.closePath();
            // Blätter 
            // crc2.scale(palmScale / 10, palmScale / 10);
            for (let i = 0; i < 3; i++) {
                CanvasBeach.crc2.beginPath();
                CanvasBeach.crc2.moveTo(0, 0);
                CanvasBeach.crc2.rotate(j);
                CanvasBeach.crc2.lineTo(50, 10);
                CanvasBeach.crc2.lineTo(100, 50);
                CanvasBeach.crc2.lineTo(110, 100);
                CanvasBeach.crc2.lineTo(90, 80);
                CanvasBeach.crc2.lineTo(80, 60);
                CanvasBeach.crc2.lineTo(50, 20);
                CanvasBeach.crc2.lineTo(0, 0);
                CanvasBeach.crc2.closePath();
                CanvasBeach.crc2.lineWidth = 5;
                CanvasBeach.crc2.strokeStyle = "#264014";
                CanvasBeach.crc2.fillStyle = "#264014";
                CanvasBeach.crc2.fill();
                CanvasBeach.crc2.stroke();
                CanvasBeach.crc2.fill();
                j = +0.5;
            }
            CanvasBeach.crc2.scale(-1, 1);
            for (let i = 0; i < 3; i++) {
                CanvasBeach.crc2.beginPath();
                CanvasBeach.crc2.moveTo(0, 0);
                CanvasBeach.crc2.rotate(Math.PI * k / 4);
                CanvasBeach.crc2.lineTo(50, 10);
                CanvasBeach.crc2.lineTo(100, 50);
                CanvasBeach.crc2.lineTo(110, 100);
                CanvasBeach.crc2.lineTo(90, 80);
                CanvasBeach.crc2.lineTo(80, 60);
                CanvasBeach.crc2.lineTo(50, 20);
                CanvasBeach.crc2.lineTo(0, 0);
                CanvasBeach.crc2.closePath();
                CanvasBeach.crc2.lineWidth = 5;
                CanvasBeach.crc2.strokeStyle = "#264014";
                CanvasBeach.crc2.fillStyle = "#264014";
                CanvasBeach.crc2.fill();
                CanvasBeach.crc2.stroke();
                CanvasBeach.crc2.fill();
                k = +1;
            }
            CanvasBeach.crc2.resetTransform();
            CanvasBeach.crc2.restore();
        }
    }
    CanvasBeach.Palmtree = Palmtree;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=BeachPalmTree.js.map