namespace CanvasBeach {
    export class People {
        position: Vector;
        size: number;

        constructor(_size: number) {
            this.position = new Vector(1000, 200);
            this.position.randomPos();
            this.size = _size;
            // this.size.scale();
            // console.log(this.size);
        }

        draw(): void {
            crc2.save();
            crc2.translate(1000, 700);
            crc2.rotate(Math.PI * 1 / 2);
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