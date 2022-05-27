"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale() {
            let rndm = Math.random() * 1;
            console.log(rndm);
            // this.x = rndm;
            // this.y = rndm;
        }
    }
    CanvasBeach.Vector = Vector;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=BeachVector.js.map