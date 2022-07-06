"use strict";
var L11CanvasBeach;
(function (L11CanvasBeach) {
    class Person {
        position;
        velocity;
        size;
        constructor(_size) {
            this.position = new L11CanvasBeach.Vector(1000 + Math.random() * (700 - 1000), 500 + Math.random() * (1200 - 500));
            // this.position.random(1000,80);
            this.velocity = new L11CanvasBeach.Vector(0, 0);
            this.velocity.random(200, 100);
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
                this.position.x -= L11CanvasBeach.canvas.width / 2;
            }
            if (this.position.y > L11CanvasBeach.canvas.height) {
                this.position.y -= L11CanvasBeach.canvas.height;
            }
        }
        isHit(_x, _y) {
            if (_x > this.position.x && _x < this.position.x - 100) {
                if (_y > this.position.y && _y < this.position.y - 50) {
                    L11CanvasBeach.hit = true;
                    console.log(L11CanvasBeach.hit);
                }
            }
            else
                L11CanvasBeach.hit = false;
        }
        draw() {
            L11CanvasBeach.crc2.save();
            L11CanvasBeach.crc2.translate(this.position.x, this.position.y);
            L11CanvasBeach.crc2.rotate(Math.PI * 1);
            // Center
            L11CanvasBeach.crc2.arc(0, 0, 20, 0, Math.PI * 2);
            L11CanvasBeach.crc2.stroke();
            // Head
            L11CanvasBeach.crc2.moveTo(0, 0);
            L11CanvasBeach.crc2.beginPath();
            L11CanvasBeach.crc2.arc(0, 10, 15, 0, 2 * Math.PI);
            L11CanvasBeach.crc2.closePath();
            L11CanvasBeach.crc2.fillStyle = "#7A6145";
            L11CanvasBeach.crc2.fill();
            // Arms
            L11CanvasBeach.crc2.beginPath();
            L11CanvasBeach.crc2.moveTo(30, 10);
            L11CanvasBeach.crc2.lineTo(60, 40);
            L11CanvasBeach.crc2.moveTo(30, 10);
            L11CanvasBeach.crc2.lineTo(60, -20);
            L11CanvasBeach.crc2.strokeStyle = "#7A6145";
            L11CanvasBeach.crc2.lineWidth = 6;
            L11CanvasBeach.crc2.stroke();
            L11CanvasBeach.crc2.closePath();
            // Body
            L11CanvasBeach.crc2.beginPath();
            L11CanvasBeach.crc2.moveTo(10, 10);
            L11CanvasBeach.crc2.lineTo(100, 10);
            L11CanvasBeach.crc2.lineTo(150, 30);
            L11CanvasBeach.crc2.strokeStyle = "#7A6145";
            L11CanvasBeach.crc2.lineWidth = 6;
            L11CanvasBeach.crc2.stroke();
            L11CanvasBeach.crc2.closePath();
            // Legs
            L11CanvasBeach.crc2.moveTo(100, 10);
            L11CanvasBeach.crc2.beginPath();
            L11CanvasBeach.crc2.moveTo(100, 10);
            L11CanvasBeach.crc2.lineTo(160, 0);
            L11CanvasBeach.crc2.strokeStyle = "#7A6145";
            L11CanvasBeach.crc2.lineWidth = 6;
            L11CanvasBeach.crc2.stroke();
            L11CanvasBeach.crc2.closePath();
            L11CanvasBeach.crc2.restore();
        }
        dead() {
            L11CanvasBeach.crc2.save();
            L11CanvasBeach.crc2.translate(this.position.x, this.position.y);
            // crc2.beginPath();
            L11CanvasBeach.crc2.arc(0, 0, 50, 0, Math.PI * 2);
            L11CanvasBeach.crc2.stroke();
            L11CanvasBeach.crc2.restore();
        }
    }
    L11CanvasBeach.Person = Person;
})(L11CanvasBeach || (L11CanvasBeach = {}));
//# sourceMappingURL=BeachPerson.js.map