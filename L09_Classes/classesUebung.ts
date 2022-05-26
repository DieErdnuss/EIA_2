namespace ClassesUebung {

    
    class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        set(_x: number, _y: number): void {
            this.x += _x;
            this.y += _y;
        }

    }


    let v1: Vector = new Vector(0,0);
    
    v1.set(3, 5);
    v1.scale(10);
    console.log(v1);





    // window.addEventListener("load", hndLoad);

    // function hndLoad(): void {


    // vector();


    // }

    // function vector(): void {



    // }
}
