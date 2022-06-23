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
        lvlOne = { "s1": "Im", "driving": , "a": , "car":  };
        lvlTwo = ["Im", "waitn", "for", "the", "bus"];
        lvlThree = ["Im", "driving", "the", "Bus"];
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
    function paste(_i) {
        germanSentenceOutput.innerText = germanSentences[_i];
        tmpSelectWords.splice(0, 10);
        for (let i = 0; i < lvlTwo.length; i++) {
            tmpSelectWords.push(lvlOne[i]);
            console.log(tmpSelectWords);
        }
    }
})(leraningSpanish || (leraningSpanish = {}));
//# sourceMappingURL=learnSpanish.js.map