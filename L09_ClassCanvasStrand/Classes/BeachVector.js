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
            let rndm = Math.random() * (1 - 0.3) + 0.3;
            console.log(rndm);
            this.x = rndm;
            this.y = rndm;
        }
        random() {
            let rndmX = Math.random() * (2000 - 500) + 500;
            let rndmY = Math.random() * (400 - 100) + 100;
            this.x = rndmX;
            this.y = rndmY;
        }
    }
    CanvasBeach.Vector = Vector;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=BeachVector.js.map