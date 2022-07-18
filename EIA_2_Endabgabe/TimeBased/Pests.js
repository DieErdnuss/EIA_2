"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Pests extends FieldSimulator.TimeBased {
        decrease() {
            this.value = this.value = 0;
        }
        increase(_plantType) {
            if (Math.random() <= _plantType.pestsProbability / 100 && this.value < 1) {
                this.value = 1;
            }
            if (this.value >= 1) {
                this.value += 0.05;
            }
        }
    }
    FieldSimulator.Pests = Pests;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Pests.js.map