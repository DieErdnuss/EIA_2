"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class Person {
        position;
        velocity;
        size;
        constructor(_size) {
            this.position = new CanvasBeach.Vector(1000 + Math.random() * (700 - 1000), 500 + Math.random() * (1200 - 500));
            // this.position.random(1000,80);
            this.velocity = new CanvasBeach.Vector(0, 0);
            this.velocity.random(200, 100);
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
                this.position.x -= CanvasBeach.canvas.width / 2;
            }
            if (this.position.y > CanvasBeach.canvas.height) {
                this.position.y -= CanvasBeach.canvas.height;
            }
        }
        isHit(_x, _y) {
            if (_x > this.position.x && _x < this.position.x + 100) {
                if (_y > this.position.y && _y < this.position.y + 50) {
                    CanvasBeach.PersonHit = true;
                    console.log(CanvasBeach.PersonHit);
                }
            }
            else
                CanvasBeach.PersonHit = false;
        }
        draw() {
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(this.position.x, this.position.y);
            CanvasBeach.crc2.rotate(Math.PI * 1);
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
        dead() {
            CanvasBeach.crc2.save();
            CanvasBeach.crc2.translate(this.position.x, this.position.y);
            // crc2.beginPath();
            CanvasBeach.crc2.arc(0, 0, 50, 0, Math.PI * 2);
            CanvasBeach.crc2.stroke();
            CanvasBeach.crc2.restore();
        }
    }
    CanvasBeach.Person = Person;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=BeachPerson.js.map