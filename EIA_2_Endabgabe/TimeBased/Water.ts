namespace FieldSimulator {

    export class Water extends TimeBased  {
        decrease(_plantType: Plant): void {this.value = this.value - _plantType.waterDrainage; }
        increase(): void {this.value = this.value + 20; }
    }
}