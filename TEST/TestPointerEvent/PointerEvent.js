"use strict";
window.addEventListener("load", hndLoad);
let button;
let checkbox;
function hndLoad(_event) {
    button = document.getElementById("button");
    button.addEventListener("click", hndClick);
    checkbox = document.getElementsByTagName(checkbox);
    checkbox.addEventListener("change", hndChange);
}
function hndClick(_click) {
    console.log(_click);
}
function hndChange(_event) {
    console.log("changed");
}
//# sourceMappingURL=PointerEvent.js.map