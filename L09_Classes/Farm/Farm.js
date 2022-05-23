"use strict";
var McDonaldFarm;
(function (McDonaldFarm) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        let cow = new McDonaldFarm.Animal("cow", "Berta", "weed", 10, "Muuh");
        cow.eat();
        cow.sing();
        let chicken = new McDonaldFarm.Animal("chicken", "Cindy", "grain", 1, "Gack");
        chicken.eat();
        chicken.sing();
        let pig = new McDonaldFarm.Animal("pig", "SpiderPig", "carrots", 6, "Oink");
        pig.eat();
        pig.sing();
        let dog = new McDonaldFarm.Animal("dog", "Hund", "meat", 5, "Wuff");
        dog.eat();
        dog.sing();
        let cat = new McDonaldFarm.Animal("cat", "Kitty", "fish", 4, "Meow");
        cat.eat();
        cat.sing();
    }
})(McDonaldFarm || (McDonaldFarm = {}));
//# sourceMappingURL=Farm.js.map