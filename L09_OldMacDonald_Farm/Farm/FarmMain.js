"use strict";
var McDonaldFarm;
(function (McDonaldFarm) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        let cow = new McDonaldFarm.Animal("cow", "Berta", "weed", 10, "Muuh");
        cow.eat();
        cow.sing();
        // let chicken: Animal = new Animal("chicken", "Cindy", "grain", 1, "Gack");
        // chicken.eat();
        // chicken.sing();
        // let pig: Animal = new Animal("pig", "SpiderPig", "carrots", 6, "Oink");
        // pig.eat();
        // pig.sing();
        // let dog: Animal = new Animal("dog", "Hund", "meat", 5, "Wuff");
        // dog.eat();
        // dog.sing();
        // let cat: Animal = new Animal("cat", "Kitty", "fish", 4, "Meow");
        // cat.eat();
        // cat.sing();
    }
})(McDonaldFarm || (McDonaldFarm = {}));
//# sourceMappingURL=FarmMain.js.map