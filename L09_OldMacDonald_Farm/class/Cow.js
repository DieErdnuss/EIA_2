"use strict";
var McDonaldFarm;
(function (McDonaldFarm) {
    class Cow extends McDonaldFarm.Animal {
        constructor(_type, _name, _food, _foodAmount, _sound) {
            super(_type, _name, _food, _foodAmount, _sound);
        }
        eat() {
            McDonaldFarm.food = String(this.food);
            console.log(this.name + " ate " + this.foodAmount + " kg of " + this.food);
            // console.log(foodStorage[food]);
            McDonaldFarm.foodStorage[McDonaldFarm.food] = McDonaldFarm.foodStorage[McDonaldFarm.food] - (this.foodAmount);
            // console.log(foodStorage[food]);
            console.log("There are " + McDonaldFarm.foodStorage[McDonaldFarm.food] + " kg of " + this.food + " remaining.");
            console.log();
        }
    }
    McDonaldFarm.Cow = Cow;
})(McDonaldFarm || (McDonaldFarm = {}));
//# sourceMappingURL=Cow.js.map