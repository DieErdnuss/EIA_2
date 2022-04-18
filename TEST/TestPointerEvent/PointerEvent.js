"use strict";
window.addEventListener("load", hndLoad);
let button;
let checkbox;
function hndLoad(_event) {
    button = document.getElementById("button");
    button.addEventListener("click", hndClick);
    checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", hndChange);
}
function hndClick(_click) {
    console.log(_click);
    let formData = new FormData(document.forms[0]);
}
function hndChange(_event) {
    console.log("changed");
    for (let entry of FormData.entries)
        ;
}
//# sourceMappingURL=PointerEvent.js.map