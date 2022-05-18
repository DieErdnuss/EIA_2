namespace McDonaldFarm {
    export class Animal {
        type: string;
        food: string;
        foodAmount: number;
        size: number;
        sound: string;
        lyrics: string;

        constructor(_type: string, _food: string, _foodAmount: number, _size: number, _sound: string, _lyrics: string) {
            this.type = _type;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.size = _size;
            this.sound = _sound;
            this.lyrics = _lyrics;
        }

        eat(_food: string, _foodAmount: number): void {
            this.food = ;
        }

        sing(_sound: string): void {
     
        }

        draw(): void{
            
        }

    }

    let cow: Animal = new Animal("cow", "corn", 100, 10, "muuh", "HiaHiaHo");

    console.log(cow);

}


