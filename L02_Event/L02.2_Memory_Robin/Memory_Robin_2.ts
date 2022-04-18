window.addEventListener("load", hndLoad);

let data: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
let pairAmount: string[] = new Array();
let pair: string[] = duplicate();
console.log(data);
console.log(pair);

let slider: HTMLInputElement = <HTMLInputElement>document.getElementById("slider");
let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
let lockCard: boolean = false;
let cardValue1: string = "";
let cardValue2: string = "";
let sliderValue: number = parseInt(slider.value);

// Handle LOAD
function hndLoad() {
    // Listener
    slider.addEventListener("change", hndChange);
    start.addEventListener("click", hndChange);
    wrapper.addEventListener("click", hndClick);
    // slider.addEventListener("input", hndChange);
    let output: HTMLElement = <HTMLElement>document.getElementById("output");
    output.innerHTML = slider.value;
}







//CHANGE HANDLER
function hndChange(_event: Event) {
    let target: EventTarget = <EventTarget>_event.target;

    if (target.name == "slider") {
        console.log("Slider Value: " + slider.value);

    }

    if (target.name == "start") {
        console.log("Start Button");
        pairAmount = data.slice(0, sliderValue);
        shuffle(pair);
    }



    let CardAmount: number = 2 * pair.length;

    // console.log("CardAmount: " + CardAmount);
    console.log("Data[]: " + data);
    console.log("pairAmount[]: " + pairAmount.length + " " + pairAmount);
    console.log("Pair[]: " + pair);
    console.log();

}

// DUPLIZIEREN von PAIR AMOUNT in PAIR
function duplicate() {
    return (pairAmount.concat(pairAmount));
}

// MISCHEN von PAIR
function shuffle(a: string): string {
    for (let i: number = a.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


// EINFÜGEN von PAIR Elementen in DIVs
for (let i: number = 0; i < pair.length; i++) {
    var div: HTMLDivElement = document.createElement("div");
    div.classList.add("faceDown");
    wrapper.appendChild(div);
    div.innerHTML = pair[i];
}



// KARTEN umdrehen bei CLICK
function hndClick(_event: Event) {

    let target: EventTarget = <EventTarget>_event.target;
    // console.log(target);
    // console.log(target.innerHTML);


    if (lockCard == false) {
        if (target.classList.contains("faceDown")) {
            // target.classList.remove("faceDown");
            // target.classList.add("faceUp");
            // cardValue1 = target.innerText;
            if (cardValue1 !== "") {
                cardValue2 = target.innerText;
            } else {
                cardValue1 = target.innerText;
                cardValue2 = "";
            }

            // EQUAL Check 
            if (cardValue1 !== "" && cardValue2 !== "") {
                if (cardValue1 == cardValue2) {
                    console.log("CardValue1 = " + cardValue1);
                    console.log("CardValue2 = " + cardValue2);
                    console.log(cardValue1 + " = " + cardValue2);
                    target.classList.remove("faceDown");
                    target.classList.add("faceUp");
                    // dissapearCards();
                } else {
                    div.classList.remove("faceUp");
                    div.classList.add("faceDown");
                    console.log("CardValue1 = " + cardValue1);
                    console.log("CardValue2 = " + cardValue2);
                    console.log(cardValue1 + " != " + cardValue2);
                }

                cardValue1 = "";
                cardValue2 = "";
            }

            console.log("CardValue1 = " + cardValue1);
            console.log("CardValue2 = " + cardValue2);

            // startCountdown(2);


        }
    }


    // TIMER Karten SICHTBAR
    // function startCountdown(_seconds: number) {
    // let counter = _seconds;
    // lockCard = true;
    // const interval = setInterval(() => {
    // console.log(counter);
    // counter--;
    // console.log(lockCard);

    // if (counter < 0) {
    // clearInterval(interval);
    // console.log("timeUp!");

    // target.classList.remove("faceUp");
    // target.classList.add("faceDown");



    // lockCard = false;

    // } else {_event.stopImmediatePropagation();
    // }
    // }, 1000);
    // }

}


function dissapearCards(): void {
    console.log("dissapear");
    div.classList.remove("facedown");
    div.classList.add("faceup");





}



console.log("Data[]: " + data.length);
console.log("Pair[]: " + pair.length);
