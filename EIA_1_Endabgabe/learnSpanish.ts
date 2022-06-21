namespace leraningSpanish {
    window.addEventListener("load", hndLoad);

    let lvlBtn: HTMLDivElement;
    let lvlBtnOne: HTMLButtonElement;
    let lvlBtnTwo: HTMLButtonElement;
    let lvlBtnThree: HTMLButtonElement;

    function hndLoad(): void {
        lvlBtnOne = <HTMLButtonElement>document.getElementById("#levelBtnOne");
        lvlBtnTwo = <HTMLButtonElement>document.getElementById("#levelBtnTwo");
        lvlBtnThree = <HTMLButtonElement>document.getElementById("#levelBtnThree");
        lvlBtn = <HTMLDivElement>document.getElementById("#levelBtn");
        lvlBtn.addEventListener("click", hndClick);
        

    }

    function hndClick(_event: Event): void {
        let target: EventTarget = <EventTarget> _event.target;
        console.log(target);
        
    }


}