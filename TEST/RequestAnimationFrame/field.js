"use strict";
var AnimationFrame;
(function (AnimationFrame) {
    class Field {
        posX;
        posY;
        constructor() {
            this.posX = Math.floor(Math.random() * AnimationFrame.windowWidth);
            this.posY = Math.floor(Math.random() * AnimationFrame.windowHeight);
        }
    }
    AnimationFrame.Field = Field;
})(AnimationFrame || (AnimationFrame = {}));
//# sourceMappingURL=field.js.map