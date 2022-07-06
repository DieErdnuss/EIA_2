namespace L11CanvasBeach {
    window.addEventListener("load", hndLoad);
    window.addEventListener("resize", hndResize);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let clouds: Cloud[] = [];
    let palmtrees: Palmtree[] = [];
    let persons: Person[] = [];
    let ships: Ship[] = [];


    // let resizeW: number;
    // let resizeH: number;

    // let winWidth: HTMLElement;
    // let winHeight: HTMLElement;
    let mousePos: HTMLElement;

    let reload: HTMLElement;

    function hndLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // winWidth = <HTMLElement>document.getElementById("windowWidth");
        // winHeight = <HTMLElement>document.getElementById("windowHeight");
        mousePos = <HTMLElement>document.getElementById("mousePos");
        reload = <HTMLElement>document.getElementById("reload");
        reload.addEventListener("click", hndClick);
        canvas.addEventListener("click", hndMouse);

        hndResize();

        cloud(10);
        palmtree(20);
        person(3);
        ship(1);

        window.setInterval(update, 20);
    }


    // ________________MOUSE EVENT_______________

    function hndMouse(_event: MouseEvent): void {
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;
        let i: number = 0;

        console.log(x, y);

        for (let person of persons) {

            person.isHit(x, y);

            if (hit == true) {
                die(i);
            }

            if (i == persons.length + 1) {
                i = 0;
            }

            i++;
        }

        mousePos.innerHTML = String("X" + " " + x + " " + "Y" + " " + y);
    }

    function hndClick(_event: Event): void {
        let target: EventTarget = <EventTarget>_event.target;
        console.log(target);

    }

    // RESIZE
    function hndResize(): void {
        // resizeW = window.innerWidth;
        // resizeH = window.innerHeight;

        // if (resizeH >= resizeW) {
        // canvas.style.height = String(resizeH - 50 + "px");
        // } else canvas.style.width = String(resizeW - 200 + "px");

        // console.log("W= " + resizeW + " H= " + resizeH);
        // canvas.style.width = String(resizeW - 200 + "px");
        // winWidth.innerHTML = String(resizeW + " W");
        // winHeight.innerHTML = String(resizeH + " H");
    }

    function die(_i: number): void {

        persons.splice(_i, 1);
        console.log("kill");

    }

    function update(): void {
        console.log("update");

        sky();
        sun();

        // console.log("update");

        for (let cloud of clouds) {
            cloud.move(1 / 50);
            cloud.draw();

        }

        for (let ship of ships) {
            ship.draw();
            ship.move(1 / 100);
        }

        rock();
        water();
        mountain();

        for (let person of persons) {
            person.draw();
            person.move(1 / 50);
        }

        coast();


        for (let palmtree of palmtrees) {
            // palmtree.move(1 / 50);
            palmtree.draw();
        }

        // canvas.style.backgroundColor = 

    }

    function sky(): void {
        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(2000, 0);
        crc2.lineTo(2000, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createRadialGradient(1100, 400, 50, 1000, 400, 1000);
        gradient.addColorStop(0, "#f18d00");
        gradient.addColorStop(0.5, "#d8dadd");
        gradient.addColorStop(1, "#71739a");
        crc2.fillStyle = gradient;
        // crc2.fillStyle = "#E080BD";
        crc2.fill();
        crc2.restore();
    }
    function sun(): void {
        crc2.beginPath();
        // crc2.arc(1800, 400, 50, 0, Math.PI * 2);
        crc2.stroke();
        crc2.fillStyle = "#ffb300";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(1100, 400, 300, 0, Math.PI * 2);
        let gradient: CanvasGradient = crc2.createRadialGradient(1100, 400, 200, 1100, 400, 500);
        gradient.addColorStop(0, "#FDC90D");
        gradient.addColorStop(1, "#f18d00");
        crc2.fillStyle = gradient;
        crc2.fill();
        // crc2.stroke();
    }
    function mountain(): void {
        crc2.beginPath();
        crc2.moveTo(300, 0);
        crc2.bezierCurveTo(350, 150, 650, 450, 900, 550);
        crc2.bezierCurveTo(950, 450, 950, 440, 1000, 540);
        crc2.bezierCurveTo(1050, 440, 1100, 500, 1150, 600);
        crc2.lineTo(0, 600);
        crc2.lineTo(0, 0);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(100, 100, 100, 500);
        gradient.addColorStop(0, "#5C6144");
        gradient.addColorStop(1, "#416139");
        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function water(): void {
        crc2.beginPath();
        crc2.moveTo(0, 500);
        crc2.lineTo(2000, 500);
        crc2.lineTo(2000, 1200);
        crc2.lineTo(0, 1200);
        crc2.closePath();
        // crc2.bezierCurveTo(1150, 500, -350, 600, 2000, 1200);
        crc2.lineTo(2000, 500);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(2000, 500, 500, 1000);
        gradient.addColorStop(0, "#4C8DAD");
        gradient.addColorStop(1, "#61C6FA");
        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function rock(): void {
        crc2.save();
        crc2.translate(1200, 500);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(10, -50);
        crc2.lineTo(20, -30);
        crc2.lineTo(35, -70);
        crc2.lineTo(45, -35);
        crc2.lineTo(70, -50);
        crc2.lineTo(80, 0);
        crc2.fillStyle = "#242424";
        crc2.fill();
        crc2.strokeStyle = "grey";
        // crc2.stroke();
        crc2.closePath();
        crc2.restore();
    }

    function coast(): void {

        crc2.beginPath();
        crc2.moveTo(1150, 600);
        crc2.bezierCurveTo(1150, 630, -350, 700, 2000, 1400);
        crc2.lineTo(0, 1200);
        crc2.lineTo(0, 600);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 700, 1000, 1000);
        gradient.addColorStop(1, "#FAD456");
        gradient.addColorStop(0, "#E0B249");
        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function cloud(_n: number): void {
        for (let i: number = 0; i < _n; i++) {
            let rndmSize: number = Math.random() * (0.5 - 0.1) + 1;
            let cloud: Cloud = new Cloud(rndmSize);
            // console.log(cloud);
            clouds.push(cloud);
        }
    }

    function palmtree(_n: number): void {
        for (let i: number = 0; i < _n; i++) {
            let palmtree: Palmtree = new Palmtree(1);
            palmtrees.push(palmtree);
        }
    }

    function person(_n: number): void {
        for (let i: number = 0; i < _n; i++) {
            let person: Person = new Person(3);
            persons.push(person);
        }
    }

    function ship(_n: number): void {
        for (let i: number = 0; i < _n; i++) {
            let ship: Ship = new Ship(1);
            ships.push(ship);

        }

    }
}