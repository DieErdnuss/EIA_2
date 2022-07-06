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
        // scale(): void {
        //     // let rndm: number = Math.random() * (1 - 0.3) + 0.3;
        //     // console.log(rndm);
        //     // this.x = rndm;
        //     // this.y = rndm;
        // }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = 10 * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        randomPos() {
            let rndmX = Math.floor(Math.random() * (2000 - 1200) + 1200);
            let rndmY = Math.floor(Math.random() * 400);
            this.x = rndmX;
            this.y = rndmY;
        }
        add(_addEnd) {
            this.x += _addEnd.x;
            this.y += _addEnd.y;
        }
    }
    CanvasBeach.Vector = Vector;
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=BeachVector.js.map