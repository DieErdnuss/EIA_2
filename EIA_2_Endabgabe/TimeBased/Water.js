"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Water extends FieldSimulator.TimeBased {
        decrease(_plantType) { this.value = this.value - _plantType.waterDrainage; }
        increase() { this.value = this.value + 20; }
    }
    FieldSimulator.Water = Water;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Water.js.map