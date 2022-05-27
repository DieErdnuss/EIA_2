"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        CanvasBeach.canvas = document.querySelector("canvas");
        CanvasBeach.crc2 = CanvasBeach.canvas.getContext("2d");
    }
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=CanvasBeach.js.map