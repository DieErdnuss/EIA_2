"use strict";
document.addEventListener("");
/*
namespace L02_Load {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log(_event);
    }
}



//Deklaration von Variablen
/*
let v: number = 1;
v = v + "1";
console.log(v);

//Homogene und Heterogene Datenstrukturen
//Array / Heterogen

let a = [7, true, "hallo"];
console.log(a[3] = [101, 102]);
console.log(a);

//Assoziatives Array / Daten werden mit Schlüssel versehen.

let s = {zahl: 7, text: "Hello", wahr: true};
console.log(s);
console.log(s["zahl"]);
console.log(s);

//Assoziatives Array mit Typisierung des Keys

interface StringToBoolean {
    [key: string]: boolean;
}

let x: StringToBoolean = {"wahr": true, "falsch": false};
console.log(x);
console.log(x["wahr"]);
console.log(x["falsch"]);

//Assoziative Array V2
/*
interface Schüler {
    name: string;
    matrikel: number;
    bewertung: [fach: string]: number;
    versetzt: boolean;
}

let y: Schüler = {name: "Robin", matrikel: 123456, bewertung: {"EIA2": 2, "MedTech": 2}, versetzt: true};
console.log(y);
console.log(y["name"]);
console.log(y["matrikel"]);
console.log(y["bewertung"]);
console.log(y["versetzt"]);

//FUnktion

function IsDivisible (dividend: number, divisor: number): boolean {
    return(dividend % divisor == 0)};

IsDivisible(4, 3);

let v1: number = [5, 8, 2];
let v2: number = 5;

console.log(v1);
console.log(v2);

v2 = v1;

console.log(v1);
console.log(v2);



namespace Cows {
    let nums: number[] = [2, 6, 5];
    let results: string[] = [];
    for (let i: number = 0; i < nums.length; i++) {
        let result: string = createCall("m", nums[i]);
        results.push(result);
    }
    console.log(results);

    function createCall(_start: string, _length: number): string {
        for (let k: number = _length; k > 0; k--) {
            if (k == 1 || k == _length / 2)
                _start += "h";
            _start += "u";
        }
        return _start;
    }
}

*/
//# sourceMappingURL=Test_Variablen.js.map