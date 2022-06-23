namespace McDonaldFarm {


    export interface FoodStorage {
        [key: string]: number;
    }

    export let foodStorage: FoodStorage = { "weed": 100, "grain": 100, "carrots": 100, "meat": 100, "fish": 100 };

    export let food: string;

    export class Animal {
        type: string;
        name: string;
        food: string;
        foodAmount: number;
        sound: string;

        constructor(_type: string, _name: string, _food: string, _foodAmount: number, _sound: string) {
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
        }

        eat(): void { console.log("Super Eat"); }

        sing(): void {
            console.log("Old McDonald had a farm E-I-E-I-O. And on his farm he had a " + this.type + " E-I-E-I-O. With a " + this.sound + this.sound + "here and a " + this.sound + this.sound + " there. Here a " + this.sound + " there a " + this.sound + " Everywhere a " + this.sound + this.sound + " . Old MacDonald had a farm E-I-E-I-O");
            console.log();

        }
    }
}
