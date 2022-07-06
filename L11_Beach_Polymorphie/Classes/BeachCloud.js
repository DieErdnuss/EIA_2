"use strict";
var L11CanvasBeach;
(function (L11CanvasBeach) {
    class Cloud {
        position;
        velocity;
        size;
        constructor(_size) {
            this.position = new L11CanvasBeach.Vector(500, 200);
            // this.position.random(200,800);
            this.velocity = new L11CanvasBeach.Vector(0, 0);
            this.velocity.random(20, 100);
            this.size = _size;
            // this.size.scale();
            // console.log(this.size);
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
            // console.log("Cloud draw");
            L11CanvasBeach.crc2.save();
            L11CanvasBeach.crc2.translate(this.position.x, this.position.y);
            L11CanvasBeach.crc2.scale(this.size, this.size);
            L11CanvasBeach.crc2.beginPath();
            L11CanvasBeach.crc2.ellipse(-50, 20, 40, 60, 80, 0, Math.PI * 2);
            L11CanvasBeach.crc2.closePath();
            L11CanvasBeach.crc2.moveTo(0, 20);
            L11CanvasBeach.crc2.ellipse(-50, 45, 200, 15, 0, 0, Math.PI * 2);
            L11CanvasBeach.crc2.closePath();
            L11CanvasBeach.crc2.arc(0, 0, 60, 0, Math.PI * 2);
            L11CanvasBeach.crc2.closePath();
            L11CanvasBeach.crc2.arc(50, 15, 40, 0, Math.PI * 2);
            L11CanvasBeach.crc2.closePath();
            L11CanvasBeach.crc2.lineWidth = 5;
            L11CanvasBeach.crc2.fillStyle = "rgba(235, 78, 72, 0.5)";
            L11CanvasBeach.crc2.fill();
            L11CanvasBeach.crc2.restore();
        }
    }
    L11CanvasBeach.Cloud = Cloud;
})(L11CanvasBeach || (L11CanvasBeach = {}));
//# sourceMappingURL=BeachCloud.js.map