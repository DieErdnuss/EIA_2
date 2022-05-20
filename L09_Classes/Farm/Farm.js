"use strict";
var McDonaldFarm;
(function (McDonaldFarm) {
    let foodStorage = { "weed": 100, "grain": 100, "carrots": 100, "meat": 100, "fish": 100 };
    console.log("Foodstorage remains " + foodStorage.food + " kg of the food" + foodStorage.food);
    let cow = new Animal("cow", "Berta", "weed", 10, "muuh");
    cow.eat();
    console.log(cow);
    console.log("Storage = " + foodStorage);
})(McDonaldFarm || (McDonaldFarm = {}));
//# sourceMappingURL=Farm.js.map