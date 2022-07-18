namespace FieldSimulator {

    export class Fertilizer extends TimeBased  {
        decrease(_plantType: Plant): void { this.value = this.value - _plantType.fertilizerDemand; }
        increase(): void { this.value = this.value + 25; }
    }
}