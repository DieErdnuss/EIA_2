"use strict";
window.addEventListener("load", function () {
    let data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let pairAmount = [""];
    let pair = duplicate();
    console.log(data);
    console.log(pair);
    let slider = document.getElementById("slider");
    let wrapper = document.getElementById("wrapper");
    let lockCard = false;
    let cardValue1 = "";
    let cardValue2 = "";
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
    // KARTEN umdrehen bei CLICK
    function hndClick(_event) {
        let target = _event.target;
        console.log(target);
        if (lockCard == false) {
            if (target.classList.contains("cards")) {
                target.classList.remove("cards");
                target.classList.add("cardsRevealed");
                cardValue1 = target.innerText;
                cardValue2 = target.innerText;
                console.log(cardValue1);
                startCountdown(2);
            }
        }
        // if (lockCard == false) {
        //     if (cardValue2 == null) {
        //         if (target.classList.contains("cards")) {
        //             target.classList.remove("cards");
        //             target.classList.add("cardsRevealed");
        //             cardValue2 = target.innerText;
        //             cardValue1 = " ";
        //             console.log(cardValue2);
        //             startCountdown(2);
        //         }
        //     }
        // }
        if (cardValue1 == cardValue2) {
            dissapearCards();
        }
        // TIMER Karten SICHTBAR
        function startCountdown(seconds) {
            let counter = seconds;
            lockCard = true;
            const interval = setInterval(() => {
                console.log(counter);
                counter--;
                console.log(lockCard);
                if (counter < 0) {
                    clearInterval(interval);
                    // console.log("timeUp!");
                    target.classList.remove("cardsRevealed");
                    target.classList.add("cards");
                    lockCard = false;
                    // } else {_event.stopImmediatePropagation();
                }
            }, 1000);
        }
    }
    function dissapearCards() {
        console.log("dissapear");
    }
    console.log("Data[]: " + data.length);
    console.log("Pair[]: " + pair.length);
});
//# sourceMappingURL=Memory_Robin.js.map