window.addEventListener("load", hndLoad);
function hndLoad(_event: Event): void {
    let data: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"];
    let pair: string[] = [""];

    // debugger

    let slider: HTMLInputElement = <HTMLInputElement>document.getElementById("slider");

    slider.addEventListener("change", hndChange);
    // slider.addEventListener("input", hndChange);
    let sliderValue: number = parseInt(slider.value);

    function hndChange(_event: Event) {
        console.log("Pair Value: " + slider.value);
        let output: HTMLElement = <HTMLElement>document.getElementById("output");
        output.innerHTML = slider.value;
        let CardAmount: number = 2 * sliderValue;
        
        console.log("CardAmount: " + CardAmount);
        console.log("Data[]: " + data.length);
        console.log("Pair[]: " + pair.length);
        console.log();

        for (let i: number = 0; i < CardAmount; i++) {
            let rdmNumber: number = Math.floor(Math.random() * data.length);
            // let spliced: string = data.splice(rdmNumber, 1);

            let length: string = pair.push(data[rdmNumber]);

            // let outputPair: HTMLElement | null = document.getElementById("pair");
            // outputPair.innerHTML = pair[0];

        }
    }



    console.log("Data[]: " + data.length);
    console.log("Pair[]: " + pair.length);







}
