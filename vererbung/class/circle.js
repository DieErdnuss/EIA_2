"use strict";
var vererbung;
(function (vererbung) {
    class Circle {
        x;
        y;
        constructor(_x, _y) {
            // super(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        draw() {
            console.log("Draw Circle");
            // crc.save();
            vererbung.crc.beginPath();
            vererbung.crc.arc(this.x, this.y, 100, 0, Math.PI * 2);
            vererbung.crc.closePath();
            vererbung.crc.stroke();
        }
    }
    vererbung.Circle = Circle;
})(vererbung || (vererbung = {}));
//# sourceMappingURL=circle.js.map