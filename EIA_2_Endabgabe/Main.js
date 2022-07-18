"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    FieldSimulator.money = 1000;
    let posX = 0;
    let posY = 0;
    let parasite;
    let fields = [];
    let action;
    let globalTimer = setInterval(update, 400);
    function update() {
        for (let i = 0; i < 40; i++) {
            fields[i].position.innerHTML = "";
            let fieldParagraph = document.createElement("p");
            fields[i].position.setAttribute("class", "dead"); /*Classes*/
            fields[i].position.appendChild(fieldParagraph);
            if (fields[i].field.plantType != new FieldSimulator.Plant0() || fields[i].field.growthLevel.value <= 100) {
                if ((fields[i].field.fertilizerLevel.value > 100 || fields[i].field.fertilizerLevel.value < 0) || (fields[i].field.waterLevel.value > 100 || fields[i].field.waterLevel.value < 0) || fields[i].field.pestsLevel.value >= 2) {
                    fields[i].field.growthLevel.value = 200;
                }
                else if (200 > fields[i].field.growthLevel.value && fields[i].field.growthLevel.value > 100) {
                    fields[i].field.growthLevel.value = 100;
                }
                else if (fields[i].field.growthLevel.value != 100) {
                    fields[i].field.waterLevel.decrease(fields[i].field.plantType);
                    fields[i].field.fertilizerLevel.decrease(fields[i].field.plantType);
                    fields[i].field.pestsLevel.increase(fields[i].field.plantType);
                    fields[i].field.growthLevel.increase(fields[i].field.plantType);
                }
            }
            fieldParagraph.innerHTML = `${fields[i].field.plantType.name}`;
            if (fields[i].field.growthLevel.value == 100) {
                fields[i].position.setAttribute("class", "ripe"); /*Classes*/
            }
            if (fields[i].field.growthLevel.value > 0 && fields[i].field.growthLevel.value < 100) {
                fields[i].position.setAttribute("class", "grow"); /*Classes*/
            }
        }
    }
    // Animation Frames Parasite
    function move() {
        posX = posX + 5;
        posY = posY + 5;
        parasite.style.transform = "translate(" + posX + "px ," + posY + "px)";
        // console.log(posX);
        if (posX < 600 && posY < 500) {
            requestAnimationFrame(move);
            console.log("moving");
        }
    }
    FieldSimulator.move = move;
    window.addEventListener("load", function () {
        document.getElementById("Water")?.addEventListener("click", function () { action = "water"; console.log("water"); });
        document.getElementById("Fertilize")?.addEventListener("click", function () { action = "fertilize"; });
        document.getElementById("Pesticide")?.addEventListener("click", function () { action = "pesticide"; });
        document.getElementById("Harvest")?.addEventListener("click", function () { action = "harvest"; });
        document.getElementById("Plant1")?.addEventListener("click", function () { action = "Plant1"; console.log("Plant1"); });
        document.getElementById("Plant2")?.addEventListener("click", function () { action = "Plant2"; });
        document.getElementById("Plant3")?.addEventListener("click", function () { action = "Plant3"; });
        document.getElementById("Plant4")?.addEventListener("click", function () { action = "Plant4"; });
        document.getElementById("Plant5")?.addEventListener("click", function () { action = "Plant5"; });
        // -----------------------------
        FieldSimulator.outputMoney = document.getElementById("Money");
        FieldSimulator.outputMoney.innerHTML = String(FieldSimulator.money);
        parasite = document.getElementById("parasite");
        // -------------------------
        let fieldSpace = document.getElementById("Fields");
        for (let i = 0; i < 40; i++) {
            let fieldDiv = document.createElement("div");
            let fieldParagraph = document.createElement("p");
            fieldDiv.appendChild(fieldParagraph);
            let testfield = { field: new FieldSimulator.Field(), position: fieldDiv };
            fields.push(testfield);
            fields[i].position.addEventListener("click", function () { act(action); });
            function act(_action) {
                switch (_action) {
                    case "water":
                        fields[i].field.water();
                        break;
                    case "fertilize":
                        fields[i].field.fertilize();
                        break;
                    case "pesticide":
                        fields[i].field.killPests();
                        break;
                    case "harvest":
                        fields[i].field.harvest();
                        break;
                    case "Plant1":
                        fields[i].field.plant(new FieldSimulator.Plant1());
                        break;
                    case "Plant2":
                        fields[i].field.plant(new FieldSimulator.Plant2());
                        break;
                    case "Plant3":
                        fields[i].field.plant(new FieldSimulator.Plant3());
                        break;
                    case "Plant4":
                        fields[i].field.plant(new FieldSimulator.Plant4());
                        break;
                    case "Plant5":
                        fields[i].field.plant(new FieldSimulator.Plant5());
                        break;
                }
            }
            fields[i].position.addEventListener("mouseover", display);
            function display(_event) {
                let span = document.querySelector("span");
                let plantType = `${fields[i].field.plantType.name}`;
                let waterLevel = `${fields[i].field.waterLevel.value}`;
                let fertilizerLevel = `${fields[i].field.fertilizerLevel.value}`;
                let growthLevel = `${fields[i].field.growthLevel.value}`;
                let posXoffset = 10 + _event.clientX;
                let posYoffset = 10 + _event.clientY;
                if (fields[i].field.growthLevel.value != 200) {
                    span.innerHTML = `Plant: ${plantType}, Water: ${waterLevel}% , Fertilizer: ${fertilizerLevel}% , Growth: ${growthLevel}%`;
                }
                else {
                    span.innerHTML = `Plant: ${plantType}, Water: ${waterLevel}% , Fertilizer: ${fertilizerLevel}% , Growth: DEAD`;
                }
                span.style.left = posXoffset + "px";
                span.style.top = posYoffset + "px";
            }
            fieldParagraph.innerHTML = `${fields[i].field.plantType.name}`;
            fieldSpace.appendChild(fieldDiv);
        }
    });
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Main.js.map