namespace FieldSimulator {
    export let market: Market;
    let difficulty: string;
    interface Fields {
        field: Field;
        position: HTMLDivElement;
    }

    let settings: FormDataEntryValue [] = [];
    let fields: Fields[] = [];
    let action: string;

    let globalTimer: ReturnType<typeof setInterval>;

    window.addEventListener("load", hndLoad);
    function hndLoad(): void { 
        document.getElementById("startButton")?.addEventListener("click", hndStart);
    }
    function hndStart(): void {
        let formData: FormData = new FormData(document.forms[0]);
        for (let value of formData.values())
        settings.push(value);
        console.log(settings);
        createGame(parseInt(`${settings[0]}`), `${settings[1]}`);        
    }
    function update(): void {
        for (let i: number = 0; i < 40; i++) {
            let posX: number = Math.floor(fields[i].position.getBoundingClientRect().x);
            let posY: number = Math.floor(fields[i].position.getBoundingClientRect().y);
            fields[i].position.innerHTML = "";
            let fieldParagraph: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            fields[i].position.appendChild(fieldParagraph);
            if (fields[i].field.plantType.name == "Plant0") {
                fields[i].position.setAttribute("class", "empty"); /*Classes*/
            }



            if (fields[i].field.plantType != new Plant0() || fields[i].field.growthLevel.value <= 100) {
                if ((fields[i].field.fertilizerLevel.value > 100 || fields[i].field.fertilizerLevel.value < 0) || (fields[i].field.waterLevel.value > 100 || fields[i].field.waterLevel.value < 0) || fields[i].field.pestsLevel.value >= 4) {
                    fields[i].field.growthLevel.value = 200;
                    fields[i].position.setAttribute("class", "dead"); /*Classes*/
                    fieldParagraph.innerHTML = `Dead`;
                }


                else if ((200 > fields[i].field.growthLevel.value && fields[i].field.growthLevel.value > 100) || fields[i].field.growthLevel.value == 100) {
                    fields[i].field.growthLevel.value = 100;
                    fields[i].position.setAttribute("class", `${fields[i].field.plantType.name}ripe`); /*Classes*/
                    fieldParagraph.innerHTML = ``;
                }

                else if (fields[i].field.growthLevel.value != 100) {
                    let waterLevel: string = `${fields[i].field.waterLevel.value}`;
                    let fertilizerLevel: string = `${fields[i].field.fertilizerLevel.value}`;
                    let growthLevel: string = `${fields[i].field.growthLevel.value}`;
                    fields[i].field.waterLevel.decrease(fields[i].field.plantType);
                    fields[i].field.fertilizerLevel.decrease(fields[i].field.plantType);
                    fields[i].field.pestsLevel.increase(fields[i].field.plantType);
                    fieldParagraph.innerHTML = `W:${waterLevel}%, F:${fertilizerLevel}%, G:${growthLevel}%`;

                    if (fields[i].field.pestsLevel.value == 1.05) {
                        attack(posX, posY, fields[i]);
                    }

                    if (fields[i].field.pestsLevel.value > 1.3) {
                        fields[i].position.setAttribute("class", "infected"); /*Classes*/
                    }

                    fields[i].field.growthLevel.increase(fields[i].field.plantType);
                }
            }

            

            if (fields[i].field.growthLevel.value > 0 && fields[i].field.growthLevel.value < 100 && fields[i].field.pestsLevel.value < 1.3) {
                fields[i].position.setAttribute("class", `grow`); /*Classes*/
            }
        }
        let moneyParagraph: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("Money");
        moneyParagraph.innerHTML = `Money ${market.money}$`;
        market.fluctuate(difficulty);
    }

    // Animation Frames Parasite

    function attack(_posX: number, _posY: number, _field: Fields): void {
        let parasite: HTMLImageElement = <HTMLImageElement>document.createElement("div");
        let fieldDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
        parasite.setAttribute("class", "img");
        fieldDiv.appendChild(parasite);
        requestAnimationFrame(move);
        let parasiteX: number = 0;
        let parasiteY: number = 0;

        function move(): void {
            console.log("move");

            parasiteX = parasiteX + _posX / 100;
            parasiteY = parasiteY + _posY / 100;
            parasite.style.transform = `translate(${parasiteX}px, ${parasiteY}px)`;


            if (parasiteX <= _posX && parasiteY <= _posY) {
                requestAnimationFrame(move);
            }
            if (parasiteX >= _posX - 5 && parasiteY >= _posY - 5) {
                parasite.remove();

            }
        }
        // console.log(posX);
    }


    function createGame(_startingMoney: number, _difficulty: string): void {
        globalTimer = setInterval(update, 400);
        market = new Market(_startingMoney, _difficulty);
        difficulty = _difficulty;
        let statusName: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("typ");
        let statusImage: HTMLDivElement = <HTMLDivElement> document.getElementById("imageProduct");
        let statusText: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("text");
        document.getElementById("settings")?.classList.add("hidden");
        document.getElementById("game")?.classList.remove("hidden");
        document.getElementById("Water")?.addEventListener("click", function (): void { action = "water"; console.log("water");  statusName.innerHTML = "Water"; statusImage.setAttribute("id", "Water"); statusText.innerHTML = "Every plant needs water and for you it's free. Don't overdo it!"; });
        document.getElementById("Fertilize")?.addEventListener("click", function (): void { action = "fertilize"; statusName.innerHTML = "Fertilizer"; statusImage.setAttribute("id", "Fertilize"); statusText.innerHTML = "Almost every plant needs fertilizer. Without it your plant wont grow to it's fullest, but don't use too much of it."; });
        document.getElementById("Pesticide")?.addEventListener("click", function (): void { action = "pesticide"; statusName.innerHTML = "Pesticide"; statusImage.setAttribute("id", "Pesticide"); statusText.innerHTML = "The best way to kill those nasty bugs, unfortunately not usable for coding."; });
        document.getElementById("Harvest")?.addEventListener("click", function (): void { action = "harvest"; statusName.innerHTML = "Harvest"; statusImage.setAttribute("id", "Harvest"); statusText.innerHTML = "Harvest your goods or remove your dead crops."; });
        document.getElementById("Plant1")?.addEventListener("click", function (): void { action = "Plant1"; statusName.innerHTML = "Salad"; statusImage.setAttribute("id", "Plant1"); statusText.innerHTML = "Easy for beginners, this plant only uses water and can't get infested by parasites."; });
        document.getElementById("Plant2")?.addEventListener("click", function (): void { action = "Plant2"; statusName.innerHTML = "Peanuts"; statusImage.setAttribute("id", "Plant2"); statusText.innerHTML = "A good common plant. It needs fertilizer and water and has a small chance for parasites."; });
        document.getElementById("Plant3")?.addEventListener("click", function (): void { action = "Plant3"; statusName.innerHTML = "Cucumber"; statusImage.setAttribute("id", "Plant3"); statusText.innerHTML = "This plant needs alot of water and has a medium chance for parasites."; });
        document.getElementById("Plant4")?.addEventListener("click", function (): void { action = "Plant4"; statusName.innerHTML = "Eggplant"; statusImage.setAttribute("id", "Plant4"); statusText.innerHTML = "This plant is very fertilizer intensive and has a high chance for parasites."; });
        document.getElementById("Plant5")?.addEventListener("click", function (): void { action = "Plant5"; statusName.innerHTML = "Ananas"; statusImage.setAttribute("id", "Plant5"); statusText.innerHTML = "This plant is very hard to care for, but it pays out. Look out for those parasites."; });


        let fieldSpace: HTMLDivElement = <HTMLDivElement>document.getElementById("Fields");
        for (let i: number = 0; i < 40; i++) {
            let fieldDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            let fieldParagraph: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            fieldDiv.appendChild(fieldParagraph);
            // let fieldRect: DOMRect = fieldDiv.getBoundingClientRect();
            let testfield: Fields = { field: new Field(), position: fieldDiv };

            fields.push(testfield);
            fields[i].position.addEventListener("click", function (): void { act(action); });
            function act(_action: string): void {
                switch (_action) {
                    case "water": fields[i].field.water(); break;
                    case "fertilize": fields[i].field.fertilize(); break;
                    case "pesticide": fields[i].field.killPests(); break;
                    case "harvest": fields[i].field.harvest(); break;
                    case "Plant1": if (market.money > market.buyPrice[2] && fields[i].field.plantType.name == "Plant0") {market.buy("plant1"); fields[i].field.plant(new Plant1()); } break;
                    case "Plant2": if (market.money > market.buyPrice[3] && fields[i].field.plantType.name == "Plant0") {market.buy("plant2"); fields[i].field.plant(new Plant2()); } break;
                    case "Plant3": if (market.money > market.buyPrice[4] && fields[i].field.plantType.name == "Plant0") {market.buy("plant3"); fields[i].field.plant(new Plant3()); } break;
                    case "Plant4": if (market.money > market.buyPrice[5] && fields[i].field.plantType.name == "Plant0") {market.buy("plant4"); fields[i].field.plant(new Plant4()); } break;
                    case "Plant5": if (market.money > market.buyPrice[6] && fields[i].field.plantType.name == "Plant0") {market.buy("plant5"); fields[i].field.plant(new Plant5()); } break;
                }
            }
            let waterLevel: string = `${fields[i].field.waterLevel.value}`;
            let fertilizerLevel: string = `${fields[i].field.fertilizerLevel.value}`;
            let growthLevel: string = `${fields[i].field.growthLevel.value}`;
            fieldParagraph.innerHTML = `W:${waterLevel}%, F:${fertilizerLevel}%, G:${growthLevel}%`;
            fieldSpace.appendChild(fieldDiv);
        }
    }

}