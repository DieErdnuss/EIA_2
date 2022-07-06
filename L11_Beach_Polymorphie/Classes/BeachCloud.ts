namespace L11CanvasBeach {
    export class Cloud {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {
            this.position = new Vector(500, 200);
            // this.position.random(200,800);
            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 100);

            this.size = _size;
            // this.size.scale();
            // console.log(this.size);
            
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
            
            // console.log("Cloud draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.beginPath();
            crc2.ellipse(-50, 20, 40, 60, 80, 0, Math.PI * 2);
            crc2.closePath();
            crc2.moveTo(0, 20);
            crc2.ellipse(-50, 45, 200, 15, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.arc(0, 0, 60, 0, Math.PI * 2);
            crc2.closePath();
            crc2.arc(50, 15, 40, 0, Math.PI * 2);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.fillStyle = "rgba(235, 78, 72, 0.5)";
            crc2.fill();
            crc2.restore();
        }


    }
}