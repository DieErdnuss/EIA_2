namespace McDonaldFarm {


    interface FoodStorage {
        [key: string]: number;
    }

    
    let foodStorage: FoodStorage = { "weed": 100, "grain": 100, "carrots": 100, "meat": 100, "fish": 100 };
    console.log("Foodstorage remains " + foodStorage.food + " kg of the food" + foodStorage.food);

    let cow: Animal = new Animal("cow", "Berta", "weed", 10, "muuh");
    cow.eat();

    console.log(cow);

    console.log("Storage = " + foodStorage);


}


