"use strict";
var Addition;
(function (Addition) {
    let greets = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];
    try {
        let input = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
        let greet = greets[Number(input)].greet;
        alert(greet);
    }
    catch (_error) {
        alert("Hier gab es einen Error!");
        console.log(_error);
    }
    console.log("Done");
})(Addition || (Addition = {}));
//# sourceMappingURL=adfdition.js.map