namespace leraningSpanish {
    window.addEventListener("load", hndLoad);

    let lvlBtn: HTMLDivElement;
    let lvlBtnOne: HTMLButtonElement;
    let lvlBtnTwo: HTMLButtonElement;
    let lvlBtnThree: HTMLButtonElement;

    interface Sentences {
        [sentence: string]: string;
    }

    let lvlOne: Sentences[] = [];
    let lvlTwo: string[] = [];
    let lvlThree: string[] = [];

    let germanSentences: string[] = [];
    let germanSentenceOutput: HTMLDivElement;

    let spanOutput: string[] = [];
    let spanOutputArea: HTMLDivElement;

    let tmpSelectWords: string[] = [];
    let tmpSelectWordsOutput: HTMLDivElement;

    function hndLoad(): void {
        lvlBtnOne = <HTMLButtonElement>document.getElementById("levelBtnOne");
        lvlBtnTwo = <HTMLButtonElement>document.getElementById("levelBtnTwo");
        lvlBtnThree = <HTMLButtonElement>document.getElementById("levelBtnThree");
        lvlBtn = <HTMLDivElement>document.getElementById("lvlBtn");

        lvlBtn.addEventListener("click", hndClick);

    
        lvlOne = [{ "1": "Im"}];
        console.log(lvlOne);
        

        lvlTwo = ["Im", "waitn", "for", "the", "bus"];
        console.log(lvlTwo);
        
        lvlThree = ["Im", "driving", "the", "Bus"];
        console.log(lvlThree);
        

        germanSentences = ["Ich fahre ein Auto.", "Ich warte auf den Bus.", "Ich fahre einen Bus."];
        germanSentenceOutput = <HTMLDivElement>document.getElementById("GerSentence");

        spanOutput = [];
        spanOutputArea = <HTMLDivElement>document.getElementById("spanOutput");

        tmpSelectWords = [];
        tmpSelectWordsOutput = <HTMLDivElement>document.getElementById("rndmSpanSentence");
    }

    function hndClick(_event: Event): void {
        let target: EventTarget = <EventTarget>_event.target;
        // console.log(target);

        if (target == lvlBtnOne) {
            console.log("Level One");
            // location.reload();
            paste("germanSentenceOutput.innerText", "germanSentences", 0);

        }

        if (target == lvlBtnTwo) {
            console.log("Level Two");
            // location.reload();
            paste("germanSentenceOutput.innerText", "germanSentences", 1);

        }

        if (target == lvlBtnThree) {
            console.log("Level Tree");
            // location.reload();
            paste("germanSentenceOutput.innerText", "germanSentences", 2);

        }

    }

    function paste(_arrayOutput: string, _array: string, _i: number): void {
        _arrayOutput = _array[_i];
        tmpSelectWords.splice(0, 10);
        console.log(_array[_i]);
        
        
        // console.log(tmpSelectWords);
        

        for (let i: number = 0; i < 1; i++) {
            tmpSelectWords.push(lvlOne[1]);
            console.log(tmpSelectWords);
            // pro WOrt soll ein neues Div erstellt werden, in die das Wort gespasted wird.
        }

        tmpSelectWordsOutput.innerHTML = tmpSelectWords[_i];

    }

}


