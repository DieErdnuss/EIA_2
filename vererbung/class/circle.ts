namespace vererbung {

    export class Circle extends Vector {

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