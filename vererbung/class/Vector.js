"use strict";
var vererbung;
(function (vererbung) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() { }
    }
    vererbung.Vector = Vector;
})(vererbung || (vererbung = {}));
//# sourceMappingURL=Vector.js.map