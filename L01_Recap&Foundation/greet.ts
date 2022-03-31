window.addEventListener("load", hndLoad);



function hndLoad(_event: Event){
    let ElementInput: HTMLInputElement = document.querySelector("input");
    
    
    console.log(input);
    ElementInput.addEventListener("change", hndChange);
}

function hndChange(_event: Event){
    
}