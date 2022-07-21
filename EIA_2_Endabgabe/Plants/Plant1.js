"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Plant1 extends FieldSimulator.Plant {
        name = "Plant1";
        waterDrainage = 0.75;
        fertilizerDemand = 0;
        pestsProbability = 0;
        growthSpeed = 1;
    }
    FieldSimulator.Plant1 = Plant1;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Plant1.js.map