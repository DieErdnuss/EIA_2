

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
    eat(): void {
        food = String(this.food);
        console.log(foodStorage[food]);
    }
    sing(): void {
        console.log(this.sound);
    }
}