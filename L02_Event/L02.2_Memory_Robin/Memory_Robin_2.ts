// namespace Memory_2 {
//     window.addEventListener("load", hndLoad);

//     // let data: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
//     let pairAmount: string[] = new Array();
//     let pair: string[] = new Array();

//     console.log(pair);

//     let body: HTMLElement;
//     let start: HTMLElement;
//     let formular: HTMLElement;
//     let formData: FormData;
//     let formPairAmount: number;
//     let cardSize: number;
//     let backgroundColor: string;
//     let cardBackColor: string;
//     let fontColor: string;
//     // let font: string;

//     let wrapper: HTMLDivElement;
//     let memory: HTMLDivElement;
//     // let lockCard: boolean = false;
//     let cardValue1: EventTarget | null;
//     let cardValue2: EventTarget | null;



//     // Handle LOAD
//     function hndLoad(): void {
//         // Listener
//         body = <HTMLElement>document.querySelector("body");
//         start = <HTMLButtonElement>document.getElementById("start");
//         start.addEventListener("click", hndChange);

//         wrapper = <HTMLDivElement>document.getElementById("wrapper");
//         wrapper.addEventListener("click", hndClick);

//         formular = <HTMLElement>document.getElementById("formluar");

//         memory = <HTMLDivElement>document.getElementById("memory");
//     }



//     //CHANGE HANDLER
//     function hndChange(_event: Event) {
//         body.style.backgroundColor = "#cb9325";
//         formular.setAttribute("class", "hide");
//         formData = new FormData(document.forms[0]);

//         for (let entry of formData) {
//             switch (entry[0]) {
//                 case "pairAmount":
//                     formPairAmount = Number(entry[1]);

//                 case "cardSize":
//                     cardSize = Number(entry[1]);
//                     console.log(cardSize);

//                 case "backgroundColor":
//                     backgroundColor = String(entry[1]);

//                 case "cardBackColor":
//                     cardBackColor = String(entry[1]);

//                 case "fontColor":
//                     fontColor = String(entry[1]);

//                 case "fontFamily":
//                     font = String(entry[1]);
//             }
//         }

//         displayCards();

//         // console.log("Data[]: " + data);
//         // console.log("pairAmount[]: " + pairAmount.length + " " + pairAmount);

//         // console.log("------------------------");

//     }

//     // EINFÜGEN von PAIR Elementen in DIVs
//     function displayCards(): void {
//         for (let i: number = 0; i < pair.length; i++) {
//             var div: HTMLDivElement = document.createElement("div");
//             div.classList.add("faceDown");
//             memory.appendChild(div);
//             div.innerHTML = pair[i];
//             div.addEventListener("click", hndClick);
//         }
//     }
//     // function DataToPairAmount() {
//     //     pairAmount = data.slice(0, sliderValue);

//     // }

//     // DUPLIZIEREN von PAIR AMOUNT in PAIR
//     function duplicate() {
//         pair = pairAmount.concat(pairAmount);

//     }




//     // MISCHEN von PAIR
//     function shuffle(a: string) {
//         for (let i: number = a.length - 1; i > 0; i--) {
//             const j: number = Math.floor(Math.random() * (i + 1));
//             // [a[i], a[j]] = [a[j], a[i]]; -------ERROR
//             console.log("pairAmount[]: " + pairAmount.length + " " + pairAmount);
//             console.log("Pair[]: " + pair);

//         }
//         return a;
//     }


//     // KARTEN umdrehen bei CLICK
//     function hndClick(_event: Event): void {
//         // if (this.div.classList.contains("faceDown"));

//         let target: HTMLDivElement = <HTMLDivElement>_event.target;
//         console.log("Clicked");

//         // if (lockCard == false) {
//         if (target.classList.contains("faceDown")) {
//             // target.classList.remove("faceDown");
//             // target.classList.add("faceUp");
//             // cardValue1 = target.innerText;
//             if (cardValue1 !== null) {
//                 cardValue2 = target;
//             } else {
//                 cardValue1 = target;
//                 cardValue2 = null;
//             }

//             // // EQUAL Check 
//             // if (cardValue1 !== null && cardValue2 !== null) {
//             //     if (cardValue1.innerHTML == cardValue2.innerHTML) {
//             //         console.log("CardValue1 = " + cardValue1);
//             //         console.log("CardValue2 = " + cardValue2);
//             //         console.log(cardValue1 + " = " + cardValue2);
//             //         target.classList.remove("faceDown");
//             //         target.classList.add("faceUp");
//             //         // dissapearCards();
//             //     } else {
//             //         classList.remove("faceUp");
//             //         classList.add("faceDown");
//             //         console.log("CardValue1 = " + cardValue1);
//             //         console.log("CardValue2 = " + cardValue2);
//             //         console.log(cardValue1 + " != " + cardValue2);
//             //     }

//             //     cardValue1 = null;
//             //     cardValue2 = null;
//             // }

//             console.log("CardValue1 = " + cardValue1);
//             console.log("CardValue2 = " + cardValue2);

//             // startCountdown(2);


//         }



//         // TIMER Karten SICHTBAR
//         // function startCountdown(_seconds: number) {
//         // let counter = _seconds;
//         // lockCard = true;
//         // const interval = setInterval(() => {
//         // console.log(counter);
//         // counter--;
//         // console.log(lockCard);

//         // if (counter < 0) {
//         // clearInterval(interval);
//         // console.log("timeUp!");

//         // target.classList.remove("faceUp");
//         // target.classList.add("faceDown");



//         // lockCard = false;

//         // } else {_event.stopImmediatePropagation();
//         // }
//         // }, 1000);
//         // }

//     }


//     // function dissapearCards(): void {
//     //     console.log("dissapear");
//     //     div.classList.remove("facedown");
//     //     div.classList.add("faceup");





// }
