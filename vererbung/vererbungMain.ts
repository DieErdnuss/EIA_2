namespace vererbung {

    window.addEventListener("load", hndLoad);

    export let canvas: HTMLCanvasElement;
    export let crc: CanvasRenderingContext2D;

    function hndLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc = <CanvasRenderingContext2D>canvas.getContext("2d");


        let circle: Circle = new Circle(100, 100);
        circle.draw();
        // debugger;
    }

    



}