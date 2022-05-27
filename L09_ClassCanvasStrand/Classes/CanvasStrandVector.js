"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    class Vector {
        x;
        y;
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    CanvasBeach.Vector = Vector;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=CanvasStrandVector.js.map