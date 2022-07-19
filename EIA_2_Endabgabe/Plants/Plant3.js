"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Plant3 extends FieldSimulator.Plant {
        name = "Plant3";
        waterDrainage = 2;
        fertilizerDemand = 0.5;
        pestsProbability = 2;
        growthSpeed = 1;
    }
    FieldSimulator.Plant3 = Plant3;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Plant3.js.map