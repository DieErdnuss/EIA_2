namespace RobBossAtelier {

    window.addEventListener("load", hndLoad);
    window.addEventListener("resize", hndResize);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    
    let resizeW: number;
    let resizeH: number;
   

    // LOAD
    function hndLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        fillCanvas();
        single();
        
    }
    // -------------------------

    // RESIZE
    function hndResize(): void {
        resizeW = window.innerWidth;
        resizeH = window.innerHeight;
        console.log("W= " + resizeW + " H= " + resizeH);    
        crc2.transform(100, 0, 0, 100, 0, 0);
    }


    // -------------------------

    // CANVAS
    function fillCanvas(): void {
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 0, 700, 700);
        crc2.save();


    }
    // EINZELNES ELEMENT
    function single(): void {

        crc2.beginPath();
        crc2.lineWidth = 20;
        crc2.moveTo(50, 50);
        crc2.lineTo(400, 400);
        crc2.lineTo(200, 400);
        crc2.closePath();
        crc2.stroke();
    }