"use strict";
var McDonaldFarm;
(function (McDonaldFarm) {
    McDonaldFarm.foodStorage = { "weed": 100, "grain": 100, "carrots": 100, "meat": 100, "fish": 100 };
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
        eat() { console.log("Super Eat"); }
        sing() {
            console.log("Old McDonald had a farm E-I-E-I-O. And on his farm he had a " + this.type + " E-I-E-I-O. With a " + this.sound + this.sound + "here and a " + this.sound + this.sound + " there. Here a " + this.sound + " there a " + this.sound + " Everywhere a " + this.sound + this.sound + " . Old MacDonald had a farm E-I-E-I-O");
            console.log();
        }
    }
    McDonaldFarm.Animal = Animal;
})(McDonaldFarm || (McDonaldFarm = {}));
//# sourceMappingURL=Animal.js.map