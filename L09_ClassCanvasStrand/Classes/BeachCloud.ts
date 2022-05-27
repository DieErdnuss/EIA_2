namespace CanvasBeach {
    export class Cloud {
        position: Vector;
        velocity: Vector;
        size: Vector;

        constructor() {
            this.position = new Vector(0, 0);
            this.position.random();
            this.size = new Vector(0, 0);
            this.size.scale();
            console.log(this.size);

        }

        move(_timeslice: number): void {
            console.log("Cloud move");
            

        }

        draw(): void {
            console.log("Cloud draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size.x, this.size.y);
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