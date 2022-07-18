namespace FieldSimulator {

    export class Market {
        money: number;
        fluctuation: number;
        buyPrice: number [] = [50 , 50 , 100, 150, 125, 175, 200];
        sellPrice: number [] = [150, 200, 200, 300, 500];

        constructor(_startingMoney: number, _difficulty: string) {
            this.money = _startingMoney;
            switch (_difficulty) {
                case "Easy": this.fluctuation = 1; break;
                case "Medium": this.fluctuation = 2; break;
                case "Hard": this.fluctuation = 3; break;
            }
        }

        buy(_item: string): void {
            switch (_item) {
                case "fertilizer": this.money = this.money - this.buyPrice[0]; break;
                case "pesticede": this.money = this.money - this.buyPrice[1]; break;
                case "plant1": this.money = this.money - this.buyPrice[2]; break;
                case "plant2": this.money = this.money - this.buyPrice[3]; break;
                case "plant3": this.money = this.money - this.buyPrice[4]; break;
                case "plant4": this.money = this.money - this.buyPrice[5]; break;
                case "plant5": this.money = this.money - this.buyPrice[6]; break;
            }
        }

        sell(_plantName: String): void {
            switch (_plantName) {
                case "Plant1": this.money = this.money + this.sellPrice[0]; break;
                case "Plant2": this.money = this.money + this.sellPrice[1]; break;                
                case "Plant3": this.money = this.money + this.sellPrice[2]; break;
                case "Plant4": this.money = this.money + this.sellPrice[3]; break;
                case "Plant5": this.money = this.money + this.sellPrice[4]; break;
            }
        }

        fluctuate(_difficulty: string): void {
            switch (_difficulty) {
                case "Easy": this.buyPrice = this.buyPrice.map(x => x + Math.floor(2 + 0.5 - Math.random()));
                             this.sellPrice = this.sellPrice.map(x => x + Math.floor(5 * (0.5 - Math.random()))); break;
                case "Medium": this.buyPrice = this.buyPrice.map(x => x + Math.floor(1 + Math.random()));
                               this.sellPrice = this.sellPrice.map(x => x + Math.floor(5 * (0.5 - Math.random()))); break;
                case "Hard": this.buyPrice = this.buyPrice.map(x => x + Math.floor(2.5 * Math.random()));
                             this.sellPrice = this.sellPrice.map(x => x + Math.floor(5 * (0.25 - Math.random()))); break;
            }
        }
    }
}