namespace L11CanvasBeach {

    export class Ship {
        position: Vector;
        velocity: Vector;
        

        constructor(_size: number) {
            this.position = new Vector(1000 + Math.random() * (1000 - 2000), 500);
            this.velocity = new Vector(0, 0);
            this.velocity.random(-200, -100);

        }

        draw(): void {
            
            let j: number = 30;

            crc2.save();
            crc2.translate(this.position.x, 500);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-10, -20);
            crc2.lineTo(200, -20);
            crc2.lineTo(200, 0);
            crc2.lineTo(0, 0);
            crc2.fillStyle = "#a11b00";
            crc2.fill();
            crc2.strokeStyle = "#a11b00";
            crc2.stroke();
            crc2.closePath();
            // Schornstein 
            for (let i: number = 1; i <= 4; i++) {
                crc2.beginPath();
                crc2.moveTo(j, -20);
                crc2.lineTo(j + 5, -50);
                crc2.lineTo(j + 20, -50);
                crc2.lineTo(j + 15, -20);
                crc2.fillStyle = "#212121";
                crc2.fill();
                crc2.strokeStyle = "#212121";
                crc2.stroke();
                j += 30;
            }
            crc2.restore();
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
                this.position.x -= canvas.width / 2;
            }
            if (this.position.y > canvas.height) {
                this.position.y -= canvas.height;
            }
        }


    }
}
