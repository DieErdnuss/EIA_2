namespace leraningSpanish {
    window.addEventListener("load", hndLoad);

    let lvlBtn: HTMLDivElement;
    let lvlBtnOne: HTMLButtonElement;
    let lvlBtnTwo: HTMLButtonElement;
    let lvlBtnThree: HTMLButtonElement;

    // interface Sentences {
        // [key: number]: string;
    // }


    let lvlOne: string[][] = [];
    let lvlTwo: string[] = [];
    let lvlThree: string[] = [];

    let germanSentences: string[] = [];
    let germanSentenceOutput: HTMLDivElement;

    let chosen: string[] = [];
    let compare: string[] = [];
    let selectWords: HTMLDivElement;

    function hndLoad(): void {
        lvlBtnOne = <HTMLButtonElement>document.getElementById("levelBtnOne");
        lvlBtnTwo = <HTMLButtonElement>document.getElementById("levelBtnTwo");
        lvlBtnThree = <HTMLButtonElement>document.getElementById("levelBtnThree");
        lvlBtn = <HTMLDivElement>document.getElementById("lvlBtn");

        lvlBtn.addEventListener("click", hndClick);

        lvlOne[0] = ["Im", "driving", "a", "car"];
        lvlOne[1] = ["I", "drove", "a", "bus"];
        lvlOne[2] = ["I", "failed", "EIA1", "once"];

        lvlTwo = ["Im", "waitn", "for", "the", "bus"];
        console.log(lvlTwo);

        lvlThree = ["Im", "driving", "the", "Bus"];
        console.log(lvlThree);


        germanSentences = ["Ich fahre ein Auto.", "Ich warte auf den Bus.", "Ich fahre einen Bus."];
        germanSentenceOutput = <HTMLDivElement>document.getElementById("GerSentence");



        selectWords = <HTMLDivElement>document.getElementById("selectWords");

    }

    function hndClick(_event: Event): void {
        let target: EventTarget = <EventTarget>_event.target;
        // console.log(target);

        if (target == lvlBtnOne) {
            console.log("Level One");
            // location.reload();
            paste(0);

        }

        if (target == lvlBtnTwo) {
            console.log("Level Two");
            // location.reload();
            paste(1);

        }

        if (target == lvlBtnThree) {
            console.log("Level Tree");
            // location.reload();
            paste(2);

        }

    }

    function paste(_i: number): void {
        germanSentenceOutput.innerText = germanSentences[_i];
        // compare.splice(0, 10);
        compare = lvlOne[_i];
        console.log(compare);


        // console.log(tmpSelectWords);


        for (let k: number = 0; k < compare.length; k++) {
            // pro Wort soll ein neues Div erstellt werden, in die das Wort gespasted wird.
            let div: HTMLDivElement = document.createElement("div");
            selectWords.appendChild(div);
            div.innerText = compare[k];
            selectWords.append(div);

        }
        // _arrayOutput: string, _array: string,
    }

}






