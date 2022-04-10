"use strict";
window.addEventListener("load", function () {
    let data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let pairAmount = [""];
    let pair = duplicate();
    console.log(data);
    console.log(pair);
    let slider = document.getElementById("slider");
    let wrapper = document.getElementById("wrapper");
    // debugger
    // DUPLIZIEREN von DATA in PAIR
    function duplicate() {
        return (data.concat(data));
    }
    // MISCHEN von PAIR
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    shuffle(pair);
    // SLIDER Listener
    slider.addEventListener("change", hndChange);
    wrapper.addEventListener("click", hndClick);
    // let chosenDiv: HTMLDivElement = document.getElementsByClassName("cards");
    // chosenDiv.addEventListener("click", hndClick);
    // slider.addEventListener("input", hndChange);
    let sliderValue = parseInt(slider.value);
    function hndChange(_event) {
        console.log("Pair Value: " + slider.value);
        let output = document.getElementById("output");
        output.innerHTML = slider.value;
        let CardAmount = pair.length;
        console.log("CardAmount: " + CardAmount);
        console.log("Data[]: " + data.length);
        console.log("Pair[]: " + pair.length);
        console.log();
    }
    // EINFÜGEN von PAIR Elementen in DIVs
    for (let i = 0; i < pair.length; i++) {
        var div = document.createElement("div");
        div.classList.add("cards");
        wrapper.appendChild(div);
        div.innerHTML = pair[i];
    }
    // function hndClick(_element: HTMLDivElement) {
    // _element.classList.remove("cards");
    // _element.classList.add("cardsRevealed");
    // console.log("Class changed");
    // console.log(_element);
    // 
    // 
    // }
    console.log("Data[]: " + data.length);
    console.log("Pair[]: " + pair.length);
});
//# sourceMappingURL=Memory_Robin.js.map