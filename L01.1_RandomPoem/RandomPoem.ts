namespace Worte{

    // Inhalte
    let subjekt: string []= ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikat: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekt: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    
    console.log(subjekt);
    console.log(prädikat);
    console.log(objekt);

    // Zufallszahl
    let RandomNumber: number = Math.floor(Math.random() * 6);
    console.log("RandomNumber = " + RandomNumber);
    

    for (let index = 6; index > 0; index--) {
        console.log(index);
        getVerse(subjekt[RandomNumber],prädikat[RandomNumber],objekt[RandomNumber]) 
    
    };
     
    // Vers Generator
    function getVerse (_subjekt: string, _prädikat: string, _objekt: string): string{
        
        return _subjekt + _prädikat + _objekt;
    }

    // Gedicht Array
    let gedicht: string [] = [""];


    // Test .splice
    gedicht.splice(0, 3, subjekt[RandomNumber]);
    console.log(gedicht);      

        
    
}