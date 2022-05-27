namespace CanvasBeach {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }
        scale(): void {
            let rndm: number = Math.random() * (1 - 0.3) + 0.3;
            console.log(rndm);

            this.x = rndm;
            this.y = rndm;
        }

        random(): void {
            let rndmX: number = Math.random() * (2000 - 500) + 500;
            let rndmY: number = Math.random() * (400 - 100) + 100;

            this.x = rndmX;
            this.y = rndmY;
        }

        // add(_addend: Vector): void {
        // this.x += _addend.x;
        // this.y += _addend.y;
        // }
    }

}