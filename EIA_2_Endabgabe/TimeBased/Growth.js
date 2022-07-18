"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Growth extends FieldSimulator.TimeBased {
        decrease() { this.value = 1; }
        increase(_plantType) { this.value = this.value + _plantType.growthSpeed; }
    }
    FieldSimulator.Growth = Growth;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Growth.js.map