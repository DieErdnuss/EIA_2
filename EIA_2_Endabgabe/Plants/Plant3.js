"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Plant3 extends FieldSimulator.Plant {
        name = "Plant3";
        waterDrainage = 1;
        fertilizerDemand = 10;
        pestsProbability = 1;
        growthSpeed = 1;
    }
    FieldSimulator.Plant3 = Plant3;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Plant3.js.map