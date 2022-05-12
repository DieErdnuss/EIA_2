namespace BobRossAtelier {

    window.addEventListener("load", hndLoad);
    window.addEventListener("resize", hndResize);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let values: number[] = new Array();

    let resizeW: number;
    let resizeH: number;
    let beginW: number = 1500;

    let w: number;
    let h: number;



    // LOAD
    function hndLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        fillCanvas();
        single();
        // triangle();

        // circle();
    }
    // -------------------------

    // RESIZE
    function hndResize(): void {
        resizeW = window.innerWidth;
        resizeH = window.innerHeight;
        console.log("W= " + resizeW + " H= " + resizeH);    
        crc2.transform(1, 0.5, -0.5, 1, 30, 10);
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


    // TRIANGLE GENERATOR
    function triangle(): void {

        for (let i: number = 1; i <= 30; i++) {
            values.push(randomNumber());
            // let gradient = crc2.createRadialGradient(100,110,15,100,110,45);

            crc2.beginPath();
            crc2.lineWidth = rndmStroke();
            crc2.moveTo(randomNumber(), randomNumber());
            crc2.lineTo(randomNumber(), randomNumber());
            crc2.lineTo(randomNumber(), randomNumber());
            crc2.closePath();
            crc2.stroke();
            // gradient.addColorStop(0, 'red');
            // gradient.addColorStop(1, 'green');
            // crc2.strokeStyle = gradient;
            // crc2.strokeStyle = "HSL(" + rndmH + "," + rndmS() + "%," + rndmL() + "%,)";
            crc2.strokeStyle = "HSL(23, 85%, 50%)";

            // crc2.strokeStyle = "rgb(" + 0 + "," + rndmRGB() + "," + rndmRGB() + 0 + ")";
            crc2.shadowOffsetX = 5;
            crc2.shadowOffsetY = 5;
            crc2.shadowBlur = 5;
            // crc2.shadowColor = "grey";
            frame();

        }
        console.log(values);
    }


    // FRAME GENERATOR
    function frame(): void {
        crc2.beginPath();
        crc2.lineWidth = 20;
        crc2.moveTo(100, 100);
        crc2.lineTo(800, 100);
        crc2.lineTo(800, 800);
        crc2.lineTo(100, 800);
        crc2.closePath();
        crc2.stroke();
        crc2.shadowOffsetX = rndmShadow();
        crc2.shadowOffsetY = rndmShadow();
        crc2.shadowBlur = 5;
        crc2.shadowColor = String(rndmRGB());

    }


    // CIRCLE GENERATOR
    function circle(): void {
        for (let i: number = 1; i <= 30; i++) {
            values.push(randomNumber());
            crc2.beginPath();
            crc2.lineWidth = rndmStroke();
            crc2.beginPath();
            crc2.arc(randomNumber(), randomNumber(), randomNumber(), randomNumber(), 1.2 + Math.PI);


            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "rgb(" + rndmH + "," + rndmS() + "," + rndmL() + ")";
        }
        console.log(values);
    }
    // -----------------------------------

    // RANDOM NUMBER GENERATOR
    function rndmStroke(): number {
        return (Math.floor(Math.random() * 15));
    }

    // Random Color Hue
    function rndmH(): number {
        return (Math.floor(Math.random() * 100));
    }
    // Random Color Saturation
    function rndmS(): number {
        return (Math.floor(Math.random() * 100));
    }

    // Random Color Lumetri
    function rndmL(): number {
        return (Math.floor(Math.random() * 100));
    }

    // Random Color RGB
    function rndmRGB(): number {
        return (Math.floor(Math.random() * 255));
    }

    function randomNumber(): number {
        return (Math.floor(Math.random() * (700 - 200) + 200));
    }

    // Shadow Offset
    function rndmShadow(): number {
        return (Math.floor(Math.random() * 20));
    }


}