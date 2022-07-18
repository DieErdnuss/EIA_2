"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Plant2 extends FieldSimulator.Plant {
        name = "Plant2";
        waterDrainage = 0.5;
        fertilizerDemand = 10;
        pestsProbability = 1;
        growthSpeed = 1;
    }
    FieldSimulator.Plant2 = Plant2;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Plant2.js.map