namespace CanvasBeach {
    export class Cloud {
        position: Vector;
        velocity: Vector;
        size: Vector;

        constructor() {
            this.position = new Vector(0, 0);
            // this.size.scale();
        }

        move(_timeslice: number): void {
            console.log("Cloud move");

        }

        draw(): void {
            console.log("Cloud draw");
            crc2.save();
            crc2.translate(500, 500);
            crc2.scale(this.size.x, this.size.y);
            crc2.arc(0, 0, 200, 0, 2 * Math.PI);
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.restore();
        }


    }
}