"use strict";
var vererbung;
(function (vererbung) {
    class Circle extends vererbung.Vector {
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
//# sourceMappingURL=Circle.js.map