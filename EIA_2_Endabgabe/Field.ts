namespace FieldSimulator {
    export class Field {
        plantType:  Plant = new Plant0();
        waterLevel: Water = new Water();
        fertilizerLevel: Fertilizer = new Fertilizer();
        pestsLevel: Pests = new Pests();
        growthLevel: Growth = new Growth();
        interval: ReturnType<typeof setInterval>;
        constructor () {
            this.waterLevel.value = 50;
            this.fertilizerLevel.value = 50;
        }
        plant(_plantType: Plant): void {
            if (this.plantType.name == "Plant0") {
                this.reset();
                this.plantType = _plantType;
            }
            
        }
        water (): void {
            if (this.plantType.name != "Plant0" && this.growthLevel.value != 200) {
            this.waterLevel.increase(); 
        }
        }
        fertilize (): void {
            if (this.plantType.name != "Plant0" && this.growthLevel.value != 200) {
            this.fertilizerLevel.increase(); }
        }
        killPests (): void {
            if (this.plantType.name != "Plant0" && this.growthLevel.value != 200) {
            this.pestsLevel.decrease(); 
            this.plantType.pestsProbability = 0;
        }
        }
        harvest (): void {
            if (this.growthLevel.value == 100) {
                money++;
                outputMoney.innerHTML = String(money);
                console.log(money);
            }
            this.reset();
        }
        reset  (): void  {
            this.plantType = new Plant0();
            this.growthLevel.value = 0;
            this.waterLevel.value = 50;
            this.fertilizerLevel.value = 50;
            this.pestsLevel.value = 0;

        }
    }}
