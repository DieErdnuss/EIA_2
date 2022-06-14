namespace vererbung {

    export class Circle extends Vector {

        super(): void{};

        draw(): void {
            // crc.save();
            crc.beginPath();
            crc.arc(this.x, this.y, 100, 0, Math.PI * 2);
            crc.closePath();
            crc.stroke();


        }

    }
}