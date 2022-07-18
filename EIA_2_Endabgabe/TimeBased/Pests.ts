namespace FieldSimulator {

    export class Pests extends TimeBased {
        decrease(): void { 
            this.value = this.value = 0; 
                
        }
        increase(_plantType: Plant): void {
            if (Math.random() <= _plantType.pestsProbability / 100 && this.value < 1) {
                this.value = 1;              
            }
            if (this.value >= 1) {
                this.value += 0.05;
            }
        }
    }
}