"use strict";
var CanvasBeach;
(function (CanvasBeach) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        CanvasBeach.canvas = document.querySelector("canvas");
        CanvasBeach.crc2 = CanvasBeach.canvas.getContext("2d");
        let cloud = new CanvasBeach.Cloud();
        console.log(cloud);
        cloud.draw();
    }
})(CanvasBeach || (CanvasBeach = {}));
//# sourceMappingURL=CanvasBeachMain.js.map