"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class People {
        position;
        size;
        constructor(_size) {
            this.position = new CanvasBeach.Vector(1000, 200);
            this.position.randomPos();
            this.size = _size;
            // this.size.scale();
            // console.log(this.size);
        }
        draw() {
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(1000, 700);
            CanvasBeach.crc2.rotate(Math.PI * 1 / 2);
            // Head
            CanvasBeach.crc2.moveTo(0, 0);
            CanvasBeach.crc2.beginPath();
            CanvasBeach.crc2.arc(0, 10, 15, 0, 2 * Math.PI);
            CanvasBeach.crc2.closePath();
            CanvasBeach.crc2.fillStyle = "#7A6145";
            CanvasBeach.crc2.fill();
            // Arms
            CanvasBeach.crc2.beginPath();
            CanvasBeach.crc2.moveTo(30, 10);
            CanvasBeach.crc2.lineTo(60, 40);
            CanvasBeach.crc2.moveTo(30, 10);
            CanvasBeach.crc2.lineTo(60, -20);
            CanvasBeach.crc2.strokeStyle = "#7A6145";
            CanvasBeach.crc2.lineWidth = 6;
            CanvasBeach.crc2.stroke();
            CanvasBeach.crc2.closePath();
            // Body
            CanvasBeach.crc2.beginPath();
            CanvasBeach.crc2.moveTo(10, 10);
            CanvasBeach.crc2.lineTo(100, 10);
            CanvasBeach.crc2.lineTo(150, 30);
            CanvasBeach.crc2.strokeStyle = "#7A6145";
            CanvasBeach.crc2.lineWidth = 6;
            CanvasBeach.crc2.stroke();
            CanvasBeach.crc2.closePath();
            // Legs
            CanvasBeach.crc2.moveTo(100, 10);
            CanvasBeach.crc2.beginPath();
            CanvasBeach.crc2.moveTo(100, 10);
            CanvasBeach.crc2.lineTo(160, 0);
            CanvasBeach.crc2.strokeStyle = "#7A6145";
            CanvasBeach.crc2.lineWidth = 6;
            CanvasBeach.crc2.stroke();
            CanvasBeach.crc2.closePath();
            CanvasBeach.crc2.restore();
        }
    }
    CanvasBeach.People = People;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=BeachPeople.js.map