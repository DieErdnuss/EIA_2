namespace BobRossAtelier {

    window.addEventListener("load", hndLoad);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let values: number[] = new Array();


    function hndLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");



        fillCanvas();
        triangle();
        circle();
    }

    function fillCanvas(): void {
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(25, 25, 1000, 1000);
    }

    function triangle(): void {

        for (let i: number = 1; i <= 30; i++) {
            values.push(randomNumber());

            crc2.beginPath();
            crc2.lineWidth = rndmStroke();
            crc2.moveTo(randomNumber(), randomNumber());
            crc2.lineTo(randomNumber(), randomNumber());
            crc2.lineTo(randomNumber(), randomNumber());
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "rgb(" + 0 + "," + rndmRGB() + "," + rndmRGB() + ")";

        }
        console.log(values);
    }

    function circle(): void {
        for (let i: number = 1; i <= 30; i++) {
            values.push(randomNumber());
            crc2.beginPath();
            crc2.lineWidth = rndmStroke();
            crc2.beginPath();
            crc2.arc(randomNumber(), randomNumber(), randomNumber(), randomNumber(), 1.2 + Math.PI);


            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "rgb(" + 0 + "," + rndmRGB() + "," + rndmRGB() + ")";
        }
        console.log(values);
    }


    function rndmStroke(): number {
        return (Math.floor(Math.random() * 50));
    }

    function rndmRGB(): number {
        return (Math.floor(Math.random() * 255));
    }

    function randomNumber(): number {
        return (Math.floor(Math.random() * (1000 - 400) + 100));
    }


}