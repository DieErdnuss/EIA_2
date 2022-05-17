namespace ClassesUebung {

    debugger;

    class Vector {
        x: number = 0;
        y: number = 0;

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


    let v1: Vector = new Vector();
    v1.scale(2);
    v1.set(3, 5);
    console.log(v1);





    // window.addEventListener("load", hndLoad);

    // function hndLoad(): void {


    // vector();


    // }

    // function vector(): void {



    // }
}
