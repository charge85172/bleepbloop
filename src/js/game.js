import '../css/style.css';
import { Engine, DisplayMode } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Fish } from './fish.js'; // Importeer de Fish class
import { Bubble } from './bubble.js'; // Importeer de Bubble class
import { Shark } from './shark.js'; // Importeer de Shark class
import { UI } from './ui.js';

export class Game extends Engine {
    constructor() {
        super({
            width: 1920,
            height: 1080,
            maxFps: 12,
            displayMode: DisplayMode.FitScreen
        });
        this.showDebug (true); // Debug mode aanzetten om de hitbox te zien
        this.start(ResourceLoader).then(() => this.startGame());
    }
    startGame() {

        console.log("Start de game!");

        

        // Create 50 fish
        for (let i = 0; i < 50; i++) {
            this.createFish();
        }

        // Create 1 shark
        for (let i = 0; i < 1; i++) {
            this.createShark();
        }

        // Create 50 bubbles
        for (let i = 0; i < 50; i++) {
            this.createBubble();
        }



        this.ui = new UI()
        this.add(this.ui)
    }

    createFish() {
        const fish = new Fish(); // 1 instantie van de Fish class 
        this.add(fish); // 1 visje toevoegen aan de game 

    }
    createBubble() {
        const bubble = new Bubble(); // zelfde hiero
        this.add(bubble); //1 bubbel toevoegen lol 
    }
    createShark() {
        const shark = new Shark(); // 1 instantie van de Shark class 
        this.add(shark); // 1 haai toevoegen aan de game 

    }
}



new Game() //game starten 
