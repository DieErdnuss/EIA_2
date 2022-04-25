namespace Memory_2 {
    window.addEventListener("load", hndLoad);

    let data: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let pairAmount: string[] = new Array();
    let pair: string[] = new Array();
    // console.log(data);
    console.log(pair);

    let slider: HTMLInputElement;
    let start: HTMLButtonElement;
    let wrapper: HTMLDivElement;
    let lockCard: boolean = false;
    let cardValue1: EventTarget | null;
    let cardValue2: EventTarget | null;
    let sliderValue: number;
    let output: HTMLElement;


    // Handle LOAD
    function hndLoad(): void {
        // Listener
        slider = <HTMLInputElement>document.getElementById("slider");
        slider.addEventListener("change", hndChange);
        start = <HTMLButtonElement>document.getElementById("start");
        start.addEventListener("click", hndChange);

        sliderValue = parseInt(slider.value);

        wrapper = <HTMLDivElement>document.getElementById("wrapper");
        wrapper.addEventListener("click", hndClick);

        output = <HTMLElement>document.getElementById("output");
        output.innerHTML = slider.value;
    }

    //CHANGE HANDLER
    function hndChange(_event: Event) {
        let target: EventTarget = <EventTarget>_event.target;

        if (target.name == "slider") {
            console.log("Slider Value: " + slider.value);
            output.innerHTML = slider.value;
            console.log("EVENT: " + target);
        }

        if (target.name == "start") {
            console.log("Start Button");
            DataToPairAmount();
            duplicate();
            shuffle(pair);
            displayCards();

            console.log("Data[]: " + data);
            console.log("pairAmount[]: " + pairAmount.length + " " + pairAmount);
        }

        // console.log("CardAmount: " + CardAmount);


        console.log("------------------------");

    }

    function DataToPairAmount() {
        pairAmount = data.slice(0, sliderValue);
        
    } 

    // DUPLIZIEREN von PAIR AMOUNT in PAIR
    function duplicate() {
        pair = pairAmount.concat(pairAmount);

    }


    // MISCHEN von PAIR
    function shuffle(a: string) {
        for (let i: number = a.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
            console.log("pairAmount[]: " + pairAmount.length + " " + pairAmount);
            console.log("Pair[]: " + pair);

        }
        return a;
    }


    // EINFÜGEN von PAIR Elementen in DIVs
    function displayCards(): void {
        for (let i: number = 0; i < pair.length; i++) {
            var div: HTMLDivElement = document.createElement("div");
            div.classList.add("faceDown");
            wrapper.appendChild(div);
            div.innerHTML = pair[i];
        }
    }



    // KARTEN umdrehen bei CLICK
    function hndClick(_event: Event): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;


        // console.log(target.innerHTML);


        if (lockCard == false) {
            if (target.classList.contains("faceDown")) {
                // target.classList.remove("faceDown");
                // target.classList.add("faceUp");
                // cardValue1 = target.innerText;
                if (cardValue1 !== null) {
                    cardValue2 = target;
                } else {
                    cardValue1 = target;
                    cardValue2 = null;
                }

                // EQUAL Check 
                if (cardValue1 !== null && cardValue2 !== null) {
                    if (cardValue1.innerHTML == cardValue2.innerHTML) {
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

                    cardValue1 = null;
                    cardValue2 = null;
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

}