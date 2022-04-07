window.addEventListener("load", hndLoad);
    function hndLoad(_event: Event) {
        let data: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X"];
        let pair: string[] = [""];

        // debugger

        let slider: HTMLInputElement = document.getElementById("slider");
       
        slider.addEventListener("change", hndChange);
        // slider.addEventListener("input", hndChange);

        function hndChange(_event: Event){
            console.log("Pair Value: " + slider.value);
            let output: HTMLElement = document.getElementById("output");
            output.innerHTML = slider.value;
            let CardAmount: number = slider.value;
            console.log("CardAmount: " + CardAmount);
            
            console.log("Data[]: " + data.length);
            console.log("Pair[]: " + pair.length);
            console.log();
            
            for(let i: number = 0; i < CardAmount; i++){
                let rdmNumber: number = Math.floor(Math.random() * data.length);
                // Zufallszahlen in Array pushen, dann Zahlenkette zum Splicen der Elemente aus data nutzen.
                pair = data.splice(rdmNumber, 1);
                // let outputPair: HTMLElement | null = document.getElementById("pair");
                // outputPair.innerHTML = pair[0];
    
            }
        }

        
        
        console.log("Data[]: " + data.length);
        console.log("Pair[]: " + pair.length);
        
        

        

        
        
    }
