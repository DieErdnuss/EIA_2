namespace vererbung {

    export class Circle extends Vector {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            // this.x = _x;
            // this.y = _y;

        }


        draw(): void {

            console.log("Draw Circle");

            // crc.save();
            crc.beginPath();
            crc.arc(this.x, this.y, 100, 0, Math.PI * 2);
            crc.closePath();
            crc.stroke();
        }

    }
}