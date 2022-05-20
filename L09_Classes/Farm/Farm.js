"use strict";
var McDonaldFarm;
(function (McDonaldFarm) {
    let foodStorage = { "weed": 100, "grain": 100, "carrots": 100, "meat": 100, "fish": 100 };
    let food;
    for (let i = 0; i < 5; i++) {
        console.log("Foodstorage remains " + foodStorage[i] + " kg of the food" + foodStorage.food);
    }
    class Animal {
        type;
        name;
        food;
        foodAmount;
        sound;
        constructor(_type, _name, _food, _foodAmount, _sound) {
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
        }
        eat() {
            food = String(this.food);
            console.log(this.name + " ate " + this.foodAmount + " kg of " + this.food);
            // console.log(foodStorage[food]);
            foodStorage[food] = foodStorage[food] - (this.foodAmount);
            // console.log(foodStorage[food]);
            console.log("There are " + foodStorage[food] + " kg of " + this.food + " remaining.");
        }
        sing() {
            console.log("Old McDonald had a farm E-I-E-I-O. And on his farm he had a " + this.type + " E-I-E-I-O. With a " + this.sound + this.sound + "here and a " + this.sound + this.sound + " there. Here a " + this.sound + " there a " + this.sound + " Everywhere a " + this.sound + this.sound + " . Old MacDonald had a farm E-I-E-I-O");
        }
    }
    let cow = new Animal("cow", "Berta", "weed", 10, "muuh");
    cow.eat();
    cow.sing();
})(McDonaldFarm || (McDonaldFarm = {}));
//# sourceMappingURL=Farm.js.map