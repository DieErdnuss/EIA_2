window.addEventListener("load", hndLoad);



function hndLoad(): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    canvas.addEventListener("click", hndClick);
    crc2.fillStyle = "#f999";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    crc2.beginPath();
    crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
    crc2.stroke();
    
    crc2.beginPath();
    crc2.ellipse(20, 20, 5, 8, Math.PI / 4, 0.5, 1.5 * Math.PI)
    crc2.stroke();
    crc2.closePath();

    crc2.beginPath();
    crc2.moveTo(200, 20);
    crc2.lineTo(260, 100);
    crc2.lineTo(120, 80);
    crc2.lineTo(200, 20);
    crc2.stroke();
    crc2.closePath();

    crc2.fillText()
}

function hndClick(_event: Event): void {

}

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;



