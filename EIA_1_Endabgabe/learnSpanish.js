"use strict";
var leraningSpanish;
(function (leraningSpanish) {
    window.addEventListener("load", hndLoad);
    let lvlBtn;
    let lvlBtnOne;
    let lvlBtnTwo;
    let lvlBtnThree;
    // interface Sentences {
    // [key: number]: string;
    // }
    let lvlOne = [];
    let lvlTwo = [];
    let lvlThree = [];
    let germanSentences = [];
    let germanSentenceOutput;
    let chosen = [];
    let compare = [];
    let selectWords;
    function hndLoad() {
        lvlBtnOne = document.getElementById("levelBtnOne");
        lvlBtnTwo = document.getElementById("levelBtnTwo");
        lvlBtnThree = document.getElementById("levelBtnThree");
        lvlBtn = document.getElementById("lvlBtn");
        lvlBtn.addEventListener("click", hndClick);
        lvlOne[0] = ["Im", "driving", "a", "car"];
        lvlOne[1] = ["I", "drove", "a", "bus"];
        lvlOne[2] = ["I", "failed", "EIA1", "once"];
        lvlTwo = ["Im", "waitn", "for", "the", "bus"];
        console.log(lvlTwo);
        lvlThree = ["Im", "driving", "the", "Bus"];
        console.log(lvlThree);
        germanSentences = ["Ich fahre ein Auto.", "Ich warte auf den Bus.", "Ich fahre einen Bus."];
        germanSentenceOutput = document.getElementById("GerSentence");
        selectWords = document.getElementById("selectWords");
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
        // compare.splice(0, 10);
        compare = lvlOne[_i];
        console.log(compare);
        // console.log(tmpSelectWords);
        for (let k = 0; k < compare.length; k++) {
            // pro Wort soll ein neues Div erstellt werden, in die das Wort gespasted wird.
            let div = document.createElement("div");
            selectWords.appendChild(div);
            div.innerText = compare[k];
            selectWords.append(div);
        }
        // _arrayOutput: string, _array: string,
    }
})(leraningSpanish || (leraningSpanish = {}));
//# sourceMappingURL=learnSpanish.js.map