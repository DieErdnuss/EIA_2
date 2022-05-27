namespace CanvasBeach {
    window.addEventListener("load", hndLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    function hndLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        
        let cloud: Cloud = new Cloud();
        console.log(cloud);
        cloud.draw();
        
    }
    
}