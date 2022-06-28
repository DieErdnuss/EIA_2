"use strict";
var leraningSpanish;
(function (leraningSpanish) {
    window.addEventListener("load", hndLoad);
    let lvlBtn;
    let lvlBtnOne;
    let lvlBtnTwo;
    let lvlBtnThree;
    let lvlOne = [];
    let lvlTwo = [];
    let lvlThree = [];
    let germanSentences = [];
    let germanSentenceOutput;
    let spanOutput = [];
    let spanOutputArea;
    let tmpSelectWords = [];
    let tmpSelectWordsOutput;
    function hndLoad() {
        lvlBtnOne = document.getElementById("levelBtnOne");
        lvlBtnTwo = document.getElementById("levelBtnTwo");
        lvlBtnThree = document.getElementById("levelBtnThree");
        lvlBtn = document.getElementById("lvlBtn");
        lvlBtn.addEventListener("click", hndClick);
        lvlOne = [{ "1": "Im" }];
        console.log(lvlOne);
        lvlTwo = ["Im", "waitn", "for", "the", "bus"];
        console.log(lvlTwo);
        lvlThree = ["Im", "driving", "the", "Bus"];
        console.log(lvlThree);
        germanSentences = ["Ich fahre ein Auto.", "Ich warte auf den Bus.", "Ich fahre einen Bus."];
        germanSentenceOutput = document.getElementById("GerSentence");
        spanOutput = [];
        spanOutputArea = document.getElementById("spanOutput");
        tmpSelectWords = [];
        tmpSelectWordsOutput = document.getElementById("rndmSpanSentence");
    }
    function hndClick(_event) {
        let target = _event.target;
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
    function paste(_arrayOutput, _array, _i) {
        _arrayOutput = _array[_i];
        tmpSelectWords.splice(0, 10);
        console.log(_array[_i]);
        // console.log(tmpSelectWords);
        for (let i = 0; i < 1; i++) {
            tmpSelectWords.push(lvlOne[1]);
            console.log(tmpSelectWords);
            // pro WOrt soll ein neues Div erstellt werden, in die das Wort gespasted wird.
        }
        tmpSelectWordsOutput.innerHTML = tmpSelectWords[_i];
    }
})(leraningSpanish || (leraningSpanish = {}));
//# sourceMappingURL=learnSpanish.js.map