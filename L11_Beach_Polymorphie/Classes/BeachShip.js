"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class Ship {
        position;
        velocity;
        constructor(_size) {
            this.position = new CanvasBeach.Vector(1000 + Math.random() * (1000 - 2000), 500);
            this.velocity = new CanvasBeach.Vector(0, 0);
            this.velocity.random(-200, -100);
        }
        draw() {
            let j = 30;
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(this.position.x, 500);
            CanvasBeach.crc2.beginPath();
            CanvasBeach.crc2.moveTo(0, 0);
            CanvasBeach.crc2.lineTo(-10, -20);
            CanvasBeach.crc2.lineTo(200, -20);
            CanvasBeach.crc2.lineTo(200, 0);
            CanvasBeach.crc2.lineTo(0, 0);
            CanvasBeach.crc2.fillStyle = "#a11b00";
            CanvasBeach.crc2.fill();
            CanvasBeach.crc2.strokeStyle = "#a11b00";
            CanvasBeach.crc2.stroke();
            CanvasBeach.crc2.closePath();
            // Schornstein 
            for (let i = 1; i <= 4; i++) {
                CanvasBeach.crc2.beginPath();
                CanvasBeach.crc2.moveTo(j, -20);
                CanvasBeach.crc2.lineTo(j + 5, -50);
                CanvasBeach.crc2.lineTo(j + 20, -50);
                CanvasBeach.crc2.lineTo(j + 15, -20);
                CanvasBeach.crc2.fillStyle = "#212121";
                CanvasBeach.crc2.fill();
                CanvasBeach.crc2.strokeStyle = "#212121";
                CanvasBeach.crc2.stroke();
                j += 30;
            }
            CanvasBeach.crc2.restore();
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
                this.position.x -= CanvasBeach.canvas.width / 2;
            }
            if (this.position.y > CanvasBeach.canvas.height) {
                this.position.y -= CanvasBeach.canvas.height;
            }
        }
    }
    CanvasBeach.Ship = Ship;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=BeachShip.js.map