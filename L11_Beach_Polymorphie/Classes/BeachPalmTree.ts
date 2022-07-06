namespace L11CanvasBeach {
    export class Palmtree {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {
            this.position = new Vector(300 + Math.random() * (-100 - 300), 600 + Math.random() * (1500 - 600));
            // this.position.random(800, 700);
            console.log(this.position);
            
            this.velocity = new Vector(0, 0);
            // this.velocity.random(20, 100);

            this.size = _size;
            // this.size.scale();
            console.log(this.size);

        }

        move(_timeslice: number): void {
            // console.log("Cloud move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0) {
                this.position.x += canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += canvas.height;
            }
            if (this.position.x > canvas.width) {
                this.position.x -= canvas.width;
            }
            if (this.position.y > canvas.height) {
                this.position.y -= canvas.height;
            }


        }

        draw(): void {

            // palmPosX = rndPalmPosX();
            // palmPosY = rndPalmPosY();


            crc2.save();
            crc2.translate(this.position.x, this.position.y);


            crc2.moveTo(0, 0);
            crc2.beginPath();
            // crc2.arc(100, -300, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();


            crc2.beginPath();
            crc2.moveTo(0, 0);

            crc2.bezierCurveTo(0, -200, 100, -200, 100, -300);
            crc2.lineWidth = 15;
            crc2.strokeStyle = "#2e1600";
            crc2.stroke();
            crc2.closePath();

            crc2.restore();


            let j: number = 5.5;
            let k: number = 6;

            crc2.save();
            crc2.translate(this.position.x + 100, this.position.y - 300);


            // crc2.moveTo(0, 0);

            // crc2.arc(0, 0, 10, 0, Math.PI * 2);
            // crc2.closePath();
            // Blätter 

            // crc2.scale(palmScale / 10, palmScale / 10);

            for (let i: number = 0; i < 3; i++) {

                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.rotate(j);

                crc2.lineTo(50, 10);
                crc2.lineTo(100, 50);
                crc2.lineTo(110, 100);
                crc2.lineTo(90, 80);
                crc2.lineTo(80, 60);
                crc2.lineTo(50, 20);
                crc2.lineTo(0, 0);
                crc2.closePath();

                crc2.lineWidth = 5;
                crc2.strokeStyle = "#264014";
                crc2.fillStyle = "#264014";
                crc2.fill();
                crc2.stroke();
                crc2.fill();

                j = + 0.5;
            }

            crc2.scale(-1, 1);

            for (let i: number = 0; i < 3; i++) {


                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.rotate(Math.PI * k / 4);


                crc2.lineTo(50, 10);
                crc2.lineTo(100, 50);
                crc2.lineTo(110, 100);
                crc2.lineTo(90, 80);
                crc2.lineTo(80, 60);
                crc2.lineTo(50, 20);
                crc2.lineTo(0, 0);
                crc2.closePath();

                crc2.lineWidth = 5;
                crc2.strokeStyle = "#264014";
                crc2.fillStyle = "#264014";
                crc2.fill();
                crc2.stroke();
                crc2.fill();

                k = + 1;
            }
            crc2.resetTransform();
            crc2.restore();

        }


    }


}
