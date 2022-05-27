"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class Cloud {
        position;
        velocity;
        size;
        constructor() {
            this.position = new CanvasBeach.Vector(0, 0);
            // this.size.scale();
        }
        move(_timeslice) {
            console.log("Cloud move");
        }
        draw() {
            console.log("Cloud draw");
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(500, 500);
            CanvasBeach.crc2.scale(this.size.x, this.size.y);
            CanvasBeach.crc2.arc(0, 0, 200, 0, 2 * Math.PI);
            CanvasBeach.crc2.lineWidth = 5;
            CanvasBeach.crc2.stroke();
            CanvasBeach.crc2.restore();
        }
    }
    CanvasBeach.Cloud = Cloud;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=BeachCloud.js.map