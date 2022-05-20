"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
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
        console.log(foodStorage[food]);
    }
    sing() {
        console.log(this.sound);
    }
}
exports.Animal = Animal;
//# sourceMappingURL=FarmAnimals.js.map