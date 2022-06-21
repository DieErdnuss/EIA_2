"use strict";
var leraningSpanish;
(function (leraningSpanish) {
    window.addEventListener("load", hndLoad);
    let lvlBtn;
    let lvlBtnOne;
    let lvlBtnTwo;
    let lvlBtnThree;
    function hndLoad() {
        lvlBtnOne = document.getElementById("#levelBtnOne");
        lvlBtnTwo = document.getElementById("#levelBtnTwo");
        lvlBtnThree = document.getElementById("#levelBtnThree");
        lvlBtn = document.getElementById("#levelBtn");
        lvlBtn.addEventListener("click", hndClick);
    }
    function hndClick(_event) {
        let target = _event.target;
        console.log(target);
    }
})(leraningSpanish || (leraningSpanish = {}));
//# sourceMappingURL=learnSpanish.js.map