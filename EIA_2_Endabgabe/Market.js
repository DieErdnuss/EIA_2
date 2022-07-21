"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Market {
        money;
        buyPrice = [30, 30, 50, 100, 150, 150, 250];
        sellPrice = [100, 200, 300, 350, 750];
        fertilizerPrice = document.getElementById("FertilizerPrice");
        pesticedePrice = document.getElementById("PesticedePrice");
        plant1Buy = document.getElementById("Plant1Buy");
        plant2Buy = document.getElementById("Plant2Buy");
        plant3Buy = document.getElementById("Plant3Buy");
        plant4Buy = document.getElementById("Plant4Buy");
        plant5Buy = document.getElementById("Plant5Buy");
        plant1Sell = document.getElementById("Plant1Sell");
        plant2Sell = document.getElementById("Plant2Sell");
        plant3Sell = document.getElementById("Plant3Sell");
        plant4Sell = document.getElementById("Plant4Sell");
        plant5Sell = document.getElementById("Plant5Sell");
        constructor(_startingMoney, _difficulty) {
            this.money = _startingMoney;
            switch (_difficulty) {
            }
        }
        buy(_item) {
            switch (_item) {
                case "fertilizer":
                    this.money = this.money - this.buyPrice[0];
                    break;
                case "pesticede":
                    this.money = this.money - this.buyPrice[1];
                    break;
                case "plant1":
                    this.money = this.money - this.buyPrice[2];
                    break;
                case "plant2":
                    this.money = this.money - this.buyPrice[3];
                    break;
                case "plant3":
                    this.money = this.money - this.buyPrice[4];
                    break;
                case "plant4":
                    this.money = this.money - this.buyPrice[5];
                    break;
                case "plant5":
                    this.money = this.money - this.buyPrice[6];
                    break;
            }
        }
        sell(_plantName) {
            switch (_plantName) {
                case "Plant1":
                    this.money = this.money + this.sellPrice[0];
                    break;
                case "Plant2":
                    this.money = this.money + this.sellPrice[1];
                    break;
                case "Plant3":
                    this.money = this.money + this.sellPrice[2];
                    break;
                case "Plant4":
                    this.money = this.money + this.sellPrice[3];
                    break;
                case "Plant5":
                    this.money = this.money + this.sellPrice[4];
                    break;
            }
        }
        fluctuate(_difficulty) {
            this.fertilizerPrice.innerHTML = `${this.buyPrice[0]}$`;
            this.pesticedePrice.innerHTML = `${this.buyPrice[1]}$`;
            this.plant1Buy.innerHTML = `${this.buyPrice[2]}$`;
            this.plant2Buy.innerHTML = `${this.buyPrice[3]}$`;
            this.plant3Buy.innerHTML = `${this.buyPrice[4]}$`;
            this.plant4Buy.innerHTML = `${this.buyPrice[5]}$`;
            this.plant5Buy.innerHTML = `${this.buyPrice[6]}$`;
            this.plant1Sell.innerHTML = `${this.sellPrice[0]}$`;
            this.plant2Sell.innerHTML = `${this.sellPrice[1]}$`;
            this.plant3Sell.innerHTML = `${this.sellPrice[2]}$`;
            this.plant4Sell.innerHTML = `${this.sellPrice[3]}$`;
            this.plant5Sell.innerHTML = `${this.sellPrice[4]}$`;
            switch (_difficulty) {
                case "Easy":
                    this.buyPrice = this.buyPrice.map(x => Math.floor(Math.random() * (1.01 * x - 0.99 * x + 1) + 0.99 * x));
                    this.sellPrice = this.sellPrice.map(x => Math.floor(Math.random() * (1.015 * x - 0.99 * x + 1) + 0.99 * x));
                    break;
                case "Medium":
                    this.buyPrice = this.buyPrice.map(x => Math.floor(Math.random() * (1.01 * x - 0.99 * x + 1) + 0.99 * x));
                    this.sellPrice = this.sellPrice.map(x => Math.floor(Math.random() * (1.01 * x - 0.99 * x + 1) + 0.99 * x));
                    break;
                case "Hard":
                    this.buyPrice = this.buyPrice.map(x => Math.floor(Math.random() * ((1.01 * x - 0.99 * x + 1)) + 0.99 * x));
                    this.sellPrice = this.sellPrice.map(x => Math.floor(Math.random() * ((1.005 * x - 0.99 * x + 1)) + 0.99 * x));
                    break;
            }
        }
    }
    FieldSimulator.Market = Market;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Market.js.map