namespace L11CanvasBeach {
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

        // scale(): void {
        //     // let rndm: number = Math.random() * (1 - 0.3) + 0.3;
        //     // console.log(rndm);

        //     // this.x = rndm;
        //     // this.y = rndm;
        // }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }


        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = 10 * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        randomPos(): void {
            let rndmX: number = Math.floor(Math.random() * (2000 - 1200) + 1200);
            let rndmY: number = Math.floor(Math.random() * 400);
            this.x = rndmX;
            this.y = rndmY;
        }

        add(_addEnd: Vector): void {
            this.x += _addEnd.x;
            this.y += _addEnd.y;
        }


        // random(): void {
        //     let rndmX: number = Math.random() * (2000 - 500) + 500;
        //     let rndmY: number = Math.random() * (400 - 100) + 100;

        //     this.x = rndmX;
        //     this.y = rndmY;
        // }

        // add(_addend: Vector): void {
        // this.x += _addend.x;
        // this.y += _addend.y;
        // }

    }
}