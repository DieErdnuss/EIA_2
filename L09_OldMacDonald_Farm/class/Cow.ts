namespace McDonaldFarm {
    export class Cow extends Animal {

        constructor(_type: string, _name: string, _food: string, _foodAmount: number, _sound: string) {
            super(_type, _name, _food, _foodAmount, _sound);
        }

        eat(): void {
            food = String(this.food);
            console.log(this.name + " ate " + this.foodAmount + " kg of " + this.food);
            // console.log(foodStorage[food]);
            foodStorage[food] = foodStorage[food] - (this.foodAmount);
            // console.log(foodStorage[food]);
            console.log("There are " + foodStorage[food] + " kg of " + this.food + " remaining.");
            console.log();

        }
    }
}
