"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Plant4 extends FieldSimulator.Plant {
        name = "Plant4";
        waterDrainage = 0.5;
        fertilizerDemand = 10;
        pestsProbability = 1;
        growthSpeed = 1;
    }
    FieldSimulator.Plant4 = Plant4;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Plant4.js.map