window.addEventListener("load", function (): void {

    let data: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let pairAmount: string[] = [""];
    let pair: string[] = duplicate();
    console.log(data);
    console.log(pair);

    let slider: HTMLInputElement = <HTMLInputElement>document.getElementById("slider");
    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");

    
    // debugger

    // DUPLIZIEREN von DATA in PAIR
    function duplicate() {
        return (data.concat(data));
    }

    // MISCHEN von PAIR
    function shuffle(a: string): string {
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
    let sliderValue: number = parseInt(slider.value);

    function hndChange(_event: Event) {
        console.log("Pair Value: " + slider.value);
        let output: HTMLElement = <HTMLElement>document.getElementById("output");
        output.innerHTML = slider.value;
        let CardAmount: number = pair.length;

        console.log("CardAmount: " + CardAmount);
        console.log("Data[]: " + data.length);
        console.log("Pair[]: " + pair.length);
        console.log();
        
    }

    // EINFÜGEN von PAIR Elementen in DIVs
    for (let i: number = 0; i < pair.length; i++) {
        var div: HTMLDivElement = document.createElement("div");
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
