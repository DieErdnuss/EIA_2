"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class People {
        position;
        velocity;
        size;
        constructor(_size) {
            this.position = new CanvasBeach.Vector(1000 + Math.random() * (700 - 1000), 400 + Math.random() * (1500 - 400));
            // this.position.random(1000,80);
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
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(this.position.x, this.position.y);
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