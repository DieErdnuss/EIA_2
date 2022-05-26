"use strict";
var ClassesUebung;
(function (ClassesUebung) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
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
        set(_x, _y) {
            this.x += _x;
            this.y += _y;
        }
    }
    let v1 = new Vector(0, 0);
    v1.set(3, 5);
    v1.scale(10);
    console.log(v1);
    // window.addEventListener("load", hndLoad);
    // function hndLoad(): void {
    // vector();
    // }
    // function vector(): void {
    // }
})(ClassesUebung || (ClassesUebung = {}));
//# sourceMappingURL=classesUebung.js.map