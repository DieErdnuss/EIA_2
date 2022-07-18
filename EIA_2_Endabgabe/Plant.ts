namespace FieldSimulator {
    export abstract class Plant {
        name: string;
        waterDrainage: number; //0 to 100
        fertilizerDemand: number; //0 to 100
        pestsProbability: number; //0 to 100
        growthSpeed: number; //Divisor of 100
    }
}