"use strict";
var L11CanvasBeach;
(function (L11CanvasBeach) {
    class Ship {
        position;
        velocity;
        constructor(_size) {
            this.position = new L11CanvasBeach.Vector(1000 + Math.random() * (1000 - 2000), 500);
            this.velocity = new L11CanvasBeach.Vector(0, 0);
            this.velocity.random(-200, -100);
        }
        draw() {
            let j = 30;
            L11CanvasBeach.crc2.save();
            L11CanvasBeach.crc2.translate(this.position.x, 500);
            L11CanvasBeach.crc2.beginPath();
            L11CanvasBeach.crc2.moveTo(0, 0);
            L11CanvasBeach.crc2.lineTo(-10, -20);
            L11CanvasBeach.crc2.lineTo(200, -20);
            L11CanvasBeach.crc2.lineTo(200, 0);
            L11CanvasBeach.crc2.lineTo(0, 0);
            L11CanvasBeach.crc2.fillStyle = "#a11b00";
            L11CanvasBeach.crc2.fill();
            L11CanvasBeach.crc2.strokeStyle = "#a11b00";
            L11CanvasBeach.crc2.stroke();
            L11CanvasBeach.crc2.closePath();
            // Schornstein 
            for (let i = 1; i <= 4; i++) {
                L11CanvasBeach.crc2.beginPath();
                L11CanvasBeach.crc2.moveTo(j, -20);
                L11CanvasBeach.crc2.lineTo(j + 5, -50);
                L11CanvasBeach.crc2.lineTo(j + 20, -50);
                L11CanvasBeach.crc2.lineTo(j + 15, -20);
                L11CanvasBeach.crc2.fillStyle = "#212121";
                L11CanvasBeach.crc2.fill();
                L11CanvasBeach.crc2.strokeStyle = "#212121";
                L11CanvasBeach.crc2.stroke();
                j += 30;
            }
            L11CanvasBeach.crc2.restore();
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
                this.position.x -= L11CanvasBeach.canvas.width / 2;
            }
            if (this.position.y > L11CanvasBeach.canvas.height) {
                this.position.y -= L11CanvasBeach.canvas.height;
            }
        }
    }
    L11CanvasBeach.Ship = Ship;
})(L11CanvasBeach || (L11CanvasBeach = {}));
//# sourceMappingURL=BeachShip.js.map