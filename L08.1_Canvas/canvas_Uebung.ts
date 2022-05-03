window.addEventListener("load", hndLoad);


function hndLoad(): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

    crc2.fillRect(50, 50, crc2.canvas.width, crc2.canvas.height);
    crc2.fillStyle = "#FF0000";

}

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;



