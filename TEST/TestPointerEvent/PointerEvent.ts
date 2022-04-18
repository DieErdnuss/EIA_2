window.addEventListener("load", hndLoad);
let button: HTMLDivElement;
let checkbox: HTMLInputElement;

function hndLoad(_event: Event) {
    button = <HTMLDivElement> document.getElementById("button");
    button.addEventListener("click", hndClick);
    checkbox = <HTMLInputElement> document.getElementById("checkbox");
    checkbox.addEventListener("change", hndChange);
}

function hndClick(_click: Event) {
    console.log(_click);
    let formData: FormData = new FormData(document.forms[0]);

}

function hndChange(_event: Event) {
    console.log("changed");
    for (let entry of FormData.entries);
    
}








