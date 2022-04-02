"use strict";
var EventExercise;
(function (EventExercise) {
    window.addEventListener("load", hndLoad);
    let body = document.querySelector("body");
    let div0 = document.getElementById("div0");
    let div1 = document.getElementById("div1");
    function hndLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", hndKey);
        document.addEventListener("click", hndClick);
        body.addEventListener("click", hndClick);
        body.addEventListener("keyup", hndKey);
        div0.addEventListener("click", hndClick);
        div0.addEventListener("keyup", hndKey);
        div1.addEventListener("click", hndClick);
        div1.addEventListener("keyup", hndKey);
    }
    function setInfoBox(_event) {
        //console.log("mouse moved");
        let x = 0;
        let y = 0;
        let span = document.getElementById("span");
        let target = document.getElementById("target");
        let xy = document.getElementById("xy");
        x = _event.pageX;
        y = _event.pageY;
        target.innerHTML = String("Event Target: " + _event.target);
        xy.innerHTML = String("X Koordinate: " + _event.pageX) + ("| Y Koordinate: " + _event.pageY);
        span.style.top = _event.pageY + 30 + "px";
        if (x >= 1200) {
            span.style.left = _event.pageX + -250 + "px";
        }
        else
            span.style.left = _event.pageX + 30 + "px";
        if (y >= 600) {
            span.style.top = _event.pageY + -100 + "px";
        }
        else
            span.style.top = _event.pageY + 30 + "px";
        console.log("Event Type: " + _event.type);
        //console.log("Event Phase: " + _event.eventPhase);
        //console.log(x);
        //console.log(y);
    }
    function hndKey(_event) {
        console.log("keyUp: " + _event.key);
    }
    function hndClick(_event) {
        console.log("clicked");
    }
})(EventExercise || (EventExercise = {}));
//# sourceMappingURL=EventInspector.js.map