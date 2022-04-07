"use strict";
window.addEventListener("load", hndLoad);
function hndLoad(_event) {
    let data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];
    let pair = [""];
    // debugger
    let slider = document.getElementById("slider");
    slider.addEventListener("change", hndChange);
    // slider.addEventListener("input", hndChange);
    let sliderValue = parseInt(slider.value);
    function hndChange(_event) {
        console.log("Pair Value: " + slider.value);
        let output = document.getElementById("output");
        output.innerHTML = slider.value;
        let CardAmount = 2 * sliderValue;
        console.log("CardAmount: " + CardAmount);
        console.log("Data[]: " + data.length);
        console.log("Pair[]: " + pair.length);
        console.log();
        for (let i = 0; i < CardAmount; i++) {
            let rdmNumber = Math.floor(Math.random() * data.length);
            // let spliced: string = data.splice(rdmNumber, 1);
            let length = pair.push(data[rdmNumber]);
            // let outputPair: HTMLElement | null = document.getElementById("pair");
            // outputPair.innerHTML = pair[0];
        }
    }
    console.log("Data[]: " + data.length);
    console.log("Pair[]: " + pair.length);
}
//# sourceMappingURL=Memory_Robin.js.map