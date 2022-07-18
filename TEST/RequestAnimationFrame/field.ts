namespace AnimationFrame {
    export class Field {
        posX: number;
        posY: number;

        constructor() {
            this.posX = Math.floor(Math.random() * windowWidth);
            this.posY = Math.floor(Math.random() * windowHeight);
        }

    }
}