

namespace Poem {

    // Inhalte
    let subjekt: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikat: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    
    // console.log(subjekt);
    // console.log(prädikat);
    // console.log(objekt);

    for (let index: number = 6; index > 0; index--) {
        // console.log(index);
        console.log(getVerse(subjekt, prädikat, objekt));  
    }

    // Vers Generator
    function getVerse (_subjekt: string [], _prädikat: string [], _objekt: string []): string {
        
         // Zufallszahlen
        let numberSubjekt: number = Math.floor(Math.random() * _subjekt.length);
        let numberPrädikat: number = Math.floor(Math.random() * _prädikat.length);
        let numberObjekt: number = Math.floor(Math.random() * _objekt.length);
        // console.log("NumberSubjekt = " + numberSubjekt);
        // console.log("NumberPrädikat = " + numberPrädikat);
        // console.log("NumberObjekt = " + numberObjekt);
 
          // Gedicht Array
        let gedicht: string  = " ";       
        
        //gedicht = _subjekt[numberSubjekt] + " " + _prädikat[numberPrädikat] + " " + _objekt[numberObjekt];

        // Ausschneiden von Array Elementen und Einfügen in "gedicht"
        gedicht = _subjekt.splice(numberSubjekt, 1) + " " + _prädikat.splice(numberPrädikat, 1) + " " + _objekt.splice(numberObjekt, 1) + ".";

        //FRAGE: Nach welchem Verhalten rutschen die Array Positionen nach? 
        
        return(gedicht);
    }


}