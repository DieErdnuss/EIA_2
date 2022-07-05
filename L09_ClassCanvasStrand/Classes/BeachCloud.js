"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class Cloud {
        position;
        velocity;
        size;
        constructor(_size) {
            this.position = new CanvasBeach.Vector(500, 200);
            // this.position.random(200,800);
            this.velocity = new CanvasBeach.Vector(0, 0);
            this.velocity.random(20, 100);
            this.size = _size;
            // this.size.scale();
            // console.log(this.size);
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
            // console.log("Cloud draw");
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(this.position.x, this.position.y);
            CanvasBeach.crc2.scale(this.size, this.size);
            CanvasBeach.crc2.beginPath();
            CanvasBeach.crc2.ellipse(-50, 20, 40, 60, 80, 0, Math.PI * 2);
            CanvasBeach.crc2.closePath();
            CanvasBeach.crc2.moveTo(0, 20);
            CanvasBeach.crc2.ellipse(-50, 45, 200, 15, 0, 0, Math.PI * 2);
            CanvasBeach.crc2.closePath();
            CanvasBeach.crc2.arc(0, 0, 60, 0, Math.PI * 2);
            CanvasBeach.crc2.closePath();
            CanvasBeach.crc2.arc(50, 15, 40, 0, Math.PI * 2);
            CanvasBeach.crc2.closePath();
            CanvasBeach.crc2.lineWidth = 5;
            CanvasBeach.crc2.fillStyle = "rgba(235, 78, 72, 0.5)";
            CanvasBeach.crc2.fill();
            CanvasBeach.crc2.restore();
        }
    }
    CanvasBeach.Cloud = Cloud;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=BeachCloud.js.map