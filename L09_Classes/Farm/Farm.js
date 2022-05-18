"use strict";
var McDonaldFarm;
(function (McDonaldFarm) {
    class Animal {
        type;
        food;
        foodAmount;
        size;
        sound;
        lyrics;
        constructor(_type, _food, _foodAmount, _size, _sound, _lyrics) {
            this.type = _type;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.size = _size;
            this.sound = _sound;
            this.lyrics = _lyrics;
        }
        eat(_food, _foodAmount) {
            this.food = ;
        }
        sing(_sound) {
        }
        draw() {
        }
    }
    McDonaldFarm.Animal = Animal;
    let cow = new Animal("cow", "corn", 100, 10, "muuh", "HiaHiaHo");
    console.log(cow);
})(McDonaldFarm || (McDonaldFarm = {}));
//# sourceMappingURL=Farm.js.map