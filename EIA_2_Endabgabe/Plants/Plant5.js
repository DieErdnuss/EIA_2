"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Plant5 extends FieldSimulator.Plant {
        name = "Plant5";
        waterDrainage = 1;
        fertilizerDemand = 1;
        pestsProbability = 3;
        growthSpeed = 1;
    }
    FieldSimulator.Plant5 = Plant5;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Plant5.js.map