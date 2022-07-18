"use strict";
var AnimationFrame;
(function (AnimationFrame) {
    let box;
    let output;
    let parasite;
    let posX = 0;
    let posY = 0;
    AnimationFrame.windowWidth = window.innerWidth;
    AnimationFrame.windowHeight = window.innerHeight;
    let field;
    let rect;
    let callParasite;
    function move() {
        posX = posX + rect.x / 100;
        posY = posY + rect.y / 100;
        parasite.style.transform = "translate(" + posX + "px ," + posY + "px)";
        // console.log(posX);
        AnimationFrame.windowWidth = window.innerWidth;
        AnimationFrame.windowHeight = window.innerHeight;
        if (posX < rect.x && posY < rect.y) {
            requestAnimationFrame(move);
        }
    }
    function hndLoad() {
        box = document.getElementById("box");
        output = document.getElementById("output");
        field = document.getElementById("target");
        rect = field.getBoundingClientRect();
        callParasite = document.getElementById("button");
        callParasite.addEventListener("click", hndClick);
        parasite = document.getElementById("parasite");
        console.log(rect);
    }
    window.addEventListener("load", hndLoad);
    function hndClick(_event) {
        window.requestAnimationFrame(move);
        posX = 0;
        posY = 0;
    }
})(AnimationFrame || (AnimationFrame = {}));
//# sourceMappingURL=AnimationFrame.js.map