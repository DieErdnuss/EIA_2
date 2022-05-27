"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class Cloud {
        position;
        velocity;
        size;
        constructor() {
            this.position = new CanvasBeach.Vector(0, 0);
            this.position.random();
            this.size = new CanvasBeach.Vector(0, 0);
            this.size.scale();
            console.log(this.size);
        }
        move(_timeslice) {
            console.log("Cloud move");
        }
        draw() {
            console.log("Cloud draw");
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(this.position.x, this.position.y);
            CanvasBeach.crc2.scale(this.size.x, this.size.y);
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