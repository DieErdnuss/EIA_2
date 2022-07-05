namespace CanvasBeach {

    export let hit: boolean;

    export class Person {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {
            this.position = new Vector(1000 + Math.random() * (700 - 1000), 500 + Math.random() * (1200 - 500));
            // this.position.random(1000,80);
            this.velocity = new Vector(0, 0);
            this.velocity.random(200, 100);
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
                this.position.x -= canvas.width / 2;
            }
            if (this.position.y > canvas.height) {
                this.position.y -= canvas.height;
            }


        }

        isHit(_x: number, _y: number): void {
            if (_x > this.position.x && _x < this.position.x + 100) {
                if (_y > this.position.y && _y < this.position.y + 50) {
                    hit = true;
                    console.log(hit);
                    
                }
            } else hit = false;
        }


        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(Math.PI * 1);
            // Head
            crc2.moveTo(0, 0);
            crc2.beginPath();
            crc2.arc(0, 10, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#7A6145";
            crc2.fill();
            // Arms
            crc2.beginPath();
            crc2.moveTo(30, 10);
            crc2.lineTo(60, 40);
            crc2.moveTo(30, 10);
            crc2.lineTo(60, -20);
            crc2.strokeStyle = "#7A6145";
            crc2.lineWidth = 6;
            crc2.stroke();
            crc2.closePath();
            // Body
            crc2.beginPath();
            crc2.moveTo(10, 10);
            crc2.lineTo(100, 10);
            crc2.lineTo(150, 30);
            crc2.strokeStyle = "#7A6145";
            crc2.lineWidth = 6;
            crc2.stroke();
            crc2.closePath();
            // Legs
            crc2.moveTo(100, 10);
            crc2.beginPath();
            crc2.moveTo(100, 10);
            crc2.lineTo(160, 0);
            crc2.strokeStyle = "#7A6145";
            crc2.lineWidth = 6;
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }
    }


}