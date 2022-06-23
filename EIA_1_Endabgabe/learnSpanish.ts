namespace leraningSpanish {
    window.addEventListener("load", hndLoad);

    let lvlBtn: HTMLDivElement;
    let lvlBtnOne: HTMLButtonElement;
    let lvlBtnTwo: HTMLButtonElement;
    let lvlBtnThree: HTMLButtonElement;

    let lvlOne: Sentences = [];
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

        interface Sentences {
        [sentence: string]: string;
        }

        lvlOne = {"s1": "Im", "driving", "a", "car"};

        lvlTwo = ["Im", "waitn", "for", "the", "bus"];
        lvlThree = ["Im", "driving", "the", "Bus"];

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
        tmpSelectWords.splice(0, 10);

        for (let i: number = 0; i < lvlTwo.length; i++) {
            tmpSelectWords.push(lvlOne[i]);
            console.log(tmpSelectWords);
        }

        

        




    }



}


