"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Plant {
        name;
        waterDrainage; //0 to 100
        fertilizerDemand; //0 to 100
        pestsProbability; //0 to 100
        growthSpeed; //Divisor of 100
    }
    FieldSimulator.Plant = Plant;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Plant.js.map