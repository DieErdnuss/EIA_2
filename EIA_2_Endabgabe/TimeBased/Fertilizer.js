"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Fertilizer extends FieldSimulator.TimeBased {
        decrease(_plantType) { this.value = this.value - _plantType.fertilizerDemand; }
        increase() { this.value = this.value + 25; }
    }
    FieldSimulator.Fertilizer = Fertilizer;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Fertilizer.js.map