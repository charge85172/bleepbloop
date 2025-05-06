import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1920,
            height: 1080,
            maxFps: 288,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        // forloop 30 keer een vis maken
        for (let i = 0; i < 60; i++) {
            this.createFish();
        }

        // bubbles maken
        for (let i = 0; i < 600; i++) {
            this.createBubble();
        }

    }

    createFish() {
        const fish = new Actor();
        fish.graphics.use(Resources.Fish.toSprite());

        // Set random position within the viewport
        const randomX = Math.random() * this.drawWidth;
        const randomY = Math.random() * this.drawHeight;
        fish.pos = new Vector(randomX, randomY);

        //set random scale
        const randomScaleX = Math.random() * 0.5 + 0.5; // Random scale between 0.5 and 1.0
        fish.scale = new Vector(randomScaleX, randomScaleX); // Set the scale of the fish

        // Set random velocity
        const randomVelocityX = Math.random() * -200 - 50; // Fish moving left
        const randomVelocityY = Math.random() * 100 - 50; // Random vertical movement
        fish.vel = new Vector(randomVelocityX, randomVelocityY);

        fish.events.on("exitviewport", (e) => this.fishLeft(e));
        this.add(fish);
    }

    createBubble() {
        const bubble = new Actor();
        bubble.graphics.use(Resources.bubble.toSprite()); // Use your own image resource

        // Set random position at the bottom of the screen
        const randomX = Math.random() * this.drawWidth;
        const randomY = Math.random() * this.drawHeight;
        bubble.pos = new Vector(randomX, randomY); // Set the position of the fish

        //set random scale
        const randomScaleX = Math.random() * 0.1 + 0.2; // Random scale between 0.1 and 0.3
        bubble.scale = new Vector(randomScaleX, randomScaleX); // Set the scale of the fish


        //bubbles bewegen naar boven
        const randomVelocityX = Math.random() * -50 - 50; // Fish moving left
        const randomVelocityY = Math.random() * -100 - 50; // Random vertical movement
        bubble.vel = new Vector(randomVelocityX, randomVelocityY);

        bubble.events.on("exitviewport", (e) => this.bubbleLeft(e));
        this.add(bubble);
    }

    fishLeft(e) {
        e.target.pos = new Vector(1920, Math.random() * this.drawHeight); // Reset to a random vertical position
    }
    bubbleLeft(e) {
        e.target.pos = new Vector(Math.random() * this.drawWidth, 1080); // Reset to a random vertical position
    }
}

new Game();
