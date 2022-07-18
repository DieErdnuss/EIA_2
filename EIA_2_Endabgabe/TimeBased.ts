namespace FieldSimulator {

    export abstract class TimeBased {
        value: number;
        constructor () {
            this.value = 0;
        }
        abstract decrease(_plantType: Plant): void;
        abstract increase(_plantType: Plant): void;
    }
}