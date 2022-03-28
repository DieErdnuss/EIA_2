"use strict";
var Poem;
(function (Poem) {
    // Inhalte
    let subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // console.log(subjekt);
    // console.log(prädikat);
    // console.log(objekt);
    for (let index = 6; index > 0; index--) {
        // console.log(index);
        console.log(getVerse(subjekt, prädikat, objekt));
    }
    // Vers Generator
    function getVerse(_subjekt, _prädikat, _objekt) {
        // Zufallszahlen
        let numberSubjekt = Math.floor(Math.random() * _subjekt.length);
        let numberPrädikat = Math.floor(Math.random() * _prädikat.length);
        let numberObjekt = Math.floor(Math.random() * _objekt.length);
        // console.log("NumberSubjekt = " + numberSubjekt);
        // console.log("NumberPrädikat = " + numberPrädikat);
        // console.log("NumberObjekt = " + numberObjekt);
        // Gedicht Array
        let gedicht = " ";
        //gedicht = _subjekt[numberSubjekt] + " " + _prädikat[numberPrädikat] + " " + _objekt[numberObjekt];
        // Ausschneiden von Array Elementen und Einfügen in "gedicht"
        gedicht = _subjekt.splice(numberSubjekt, 1) + " " + _prädikat.splice(numberPrädikat, 1) + " " + _objekt.splice(numberObjekt, 1) + ".";
        //FRAGE: Nach welchem Verhalten rutschen die Array Positionen nach? 
        return (gedicht);
    }
})(Poem || (Poem = {}));
//# sourceMappingURL=RandomPoem.js.map