namespace FieldSimulator {
    export let money: number = 1000;
    export let outputMoney: HTMLDivElement; /*Classes*/

    interface Fields {
        field: Field;
        position: HTMLDivElement;
    }

    let fields: Fields[] = [];
    let action: string;
    let globalTimer: ReturnType<typeof setInterval> = setInterval(update, 400);
    function update(): void {
        for (let i: number = 0; i < 40; i++) {
            let posX: number = Math.floor(fields[i].position.getBoundingClientRect().x);
            let posY: number = Math.floor(fields[i].position.getBoundingClientRect().y);
            fields[i].position.innerHTML = "";
            let fieldParagraph: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            fields[i].position.appendChild(fieldParagraph);
            if (fields[i].field.plantType.name == "Plant0"){
            fields[i].position.setAttribute("class", "empty"); /*Classes*/
            }



            if (fields[i].field.plantType != new Plant0() || fields[i].field.growthLevel.value <= 100) {
                if ((fields[i].field.fertilizerLevel.value > 100 || fields[i].field.fertilizerLevel.value < 0) || (fields[i].field.waterLevel.value > 100 || fields[i].field.waterLevel.value < 0) || fields[i].field.pestsLevel.value >= 4) {
                    fields[i].field.growthLevel.value = 200;
                    fields[i].position.setAttribute("class", "dead"); /*Classes*/
                }


                else if ((200 > fields[i].field.growthLevel.value && fields[i].field.growthLevel.value > 100) || fields[i].field.growthLevel.value == 100 ) {
                    fields[i].field.growthLevel.value = 100;
                    fields[i].position.setAttribute("class", "ripe"); /*Classes*/
                }

                else if (fields[i].field.growthLevel.value != 100) {
                    fields[i].field.waterLevel.decrease(fields[i].field.plantType);
                    fields[i].field.fertilizerLevel.decrease(fields[i].field.plantType);
                    fields[i].field.pestsLevel.increase(fields[i].field.plantType);
                  

                    if (fields[i].field.pestsLevel.value == 1.05) {
                        attack(posX, posY, fields[i]);
                    }

                    if (fields[i].field.pestsLevel.value > 1.3) {
                        fields[i].position.setAttribute("class", "infected"); /*Classes*/
                    }
                    
                    fields[i].field.growthLevel.increase(fields[i].field.plantType);
                }
            }
            fieldParagraph.innerHTML = `${fields[i].field.plantType.name}`;

            if (fields[i].field.growthLevel.value > 0 && fields[i].field.growthLevel.value < 100 && fields[i].field.pestsLevel.value < 1.3  ) {
                fields[i].position.setAttribute("class", "grow"); /*Classes*/
            }
        }
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


            if (parasiteX <= _posX && parasiteY <= _posY){
            requestAnimationFrame(move);
            }
            if (parasiteX >= _posX - 5 && parasiteY >= _posY - 5) {
                parasite.remove();
                
            }
        }
        // console.log(posX);
    }


    window.addEventListener("load", function (): void {
        document.getElementById("Water")?.addEventListener("click", function (): void { action = "water"; console.log("water"); });
        document.getElementById("Fertilize")?.addEventListener("click", function (): void { action = "fertilize"; });
        document.getElementById("Pesticide")?.addEventListener("click", function (): void { action = "pesticide"; });
        document.getElementById("Harvest")?.addEventListener("click", function (): void { action = "harvest"; });
        document.getElementById("Plant1")?.addEventListener("click", function (): void { action = "Plant1"; console.log("Plant1"); });
        document.getElementById("Plant2")?.addEventListener("click", function (): void { action = "Plant2"; });
        document.getElementById("Plant3")?.addEventListener("click", function (): void { action = "Plant3"; });
        document.getElementById("Plant4")?.addEventListener("click", function (): void { action = "Plant4"; });
        document.getElementById("Plant5")?.addEventListener("click", function (): void { action = "Plant5"; });
        // -----------------------------
        outputMoney = <HTMLDivElement>document.getElementById("Money");
        outputMoney.innerHTML = String(money);
        // -------------------------

        let fieldSpace: HTMLDivElement = <HTMLDivElement>document.getElementById("Fields");
        for (let i: number = 0; i < 40; i++) {
            let fieldDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            let fieldParagraph: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            fieldDiv.appendChild(fieldParagraph);
            // let fieldRect: DOMRect = fieldDiv.getBoundingClientRect();
            let testfield: Fields = { field: new Field(), position: fieldDiv};
            
            fields.push(testfield);
            fields[i].position.addEventListener("click", function (): void { act(action); });
            function act(_action: string): void {
                switch (_action) {
                    case "water": fields[i].field.water(); break;
                    case "fertilize": fields[i].field.fertilize(); break;
                    case "pesticide": fields[i].field.killPests(); break;
                    case "harvest": fields[i].field.harvest(); break;
                    case "Plant1": fields[i].field.plant(new Plant1()); break;
                    case "Plant2": fields[i].field.plant(new Plant2()); break;
                    case "Plant3": fields[i].field.plant(new Plant3()); break;
                    case "Plant4": fields[i].field.plant(new Plant4()); break;
                    case "Plant5": fields[i].field.plant(new Plant5()); break;
                }
            }
            fields[i].position.addEventListener("mouseover", display);
            function display(_event: MouseEvent): void {
                let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
                let plantType: string = `${fields[i].field.plantType.name}`;
                let waterLevel: string = `${fields[i].field.waterLevel.value}`;
                let fertilizerLevel: string = `${fields[i].field.fertilizerLevel.value}`;
                let growthLevel: string = `${fields[i].field.growthLevel.value}`;
                let posXoffset: number = 10 + _event.clientX;
                let posYoffset: number = 10 + _event.clientY;
                if (fields[i].field.growthLevel.value != 200) {
                    span.innerHTML = `Plant: ${plantType}, Water: ${waterLevel}% , Fertilizer: ${fertilizerLevel}% , Growth: ${growthLevel}%`;
                } else {
                    span.innerHTML = `Plant: ${plantType}, Water: ${waterLevel}% , Fertilizer: ${fertilizerLevel}% , Growth: DEAD`;
                }
                span.style.left = posXoffset + "px";
                span.style.top = posYoffset + "px";
            }
            fieldParagraph.innerHTML = `${fields[i].field.plantType.name}`;
            fieldSpace.appendChild(fieldDiv);
        }
        console.log(fields);

    });

}