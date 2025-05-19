import { Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Bubble extends Actor {
    constructor() {
        // super({width: resources.bubble.width, height: resources.bubble.height}); //Hitbox van de bubbel
        super({width: 100, height: 100}); //Hitbox van de bubbel
        
        this.graphics.use(Resources.bubble.toSprite());

        const randomX = Math.random() * 1920;
        const randomY = 1080; // begint onderaan het scherm
        this.pos = new Vector(randomX, randomY);

        const randomScale = Math.random() * 0.1 + 0.2;
        this.scale = new Vector(randomScale, randomScale);

        const randomVelocityX = Math.random() * -50 - 50;  // beetje naar links omdat de visjes stroming veroorzaken
        const randomVelocityY = Math.random() * -100 - 50; // naar boven versnellen
        this.vel = new Vector(randomVelocityX, randomVelocityY);

        //wat gebeurt er als de bubbel het scherm verlaat?
        this.on('exitviewport', (e) => this.bubbleLeft(e));
        this.on('pointerup', (e) => { this.kill(e)});
    }

    bubbleLeft(e) {
        // terug naar beneden (eigenlijk gewoon nieuw))
        e.target.pos = new Vector(Math.random() * 1920, 1080);
    }
}
