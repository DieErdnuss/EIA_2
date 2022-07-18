namespace AnimationFrame {
    let box: HTMLDivElement;
    let output: HTMLDivElement;
    let parasite: HTMLImageElement;

    let posX: number = 0;
    let posY: number = 0;

    export let windowWidth: number = window.innerWidth;
    export let windowHeight: number = window.innerHeight;

    let field: HTMLDivElement;
    let rect: DOMRect;

    let callParasite: HTMLButtonElement;

    function move(): void {
        posX = posX + rect.x / 100;
        posY = posY + rect.y / 100;
        parasite.style.transform = "translate(" + posX + "px ," + posY + "px)";
        // console.log(posX);

        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;


        if (posX < rect.x && posY < rect.y) {
            requestAnimationFrame(move);

        }

    }

    function hndLoad(): void {
        box = <HTMLDivElement>document.getElementById("box");
        output = <HTMLDivElement>document.getElementById("output");
        field = <HTMLDivElement>document.getElementById("target");
        rect = <DOMRect>field.getBoundingClientRect();
        callParasite = <HTMLButtonElement>document.getElementById("button");
        callParasite.addEventListener("click", hndClick);
        parasite = <HTMLImageElement>document.getElementById("parasite");

        console.log(rect);
    }

    window.addEventListener("load", hndLoad);
    

    function hndClick(_event: Event): void {
        window.requestAnimationFrame(move);
        posX = 0;
        posY = 0;
    }
}