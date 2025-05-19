import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Shark } from './shark.js';

export class Fish extends Actor {
    constructor() {
        super({ width: 100, height: 100 }); //Hitbox van de vis\

        this.graphics.use(Resources.Fish.toSprite());
        // this.body.collisionType = CollisionType.Active; // Vis is actief en kan botsingen veroorzaken

        const randomX = Math.random() * 1920;
        const randomY = Math.random() * 1080;
        this.pos = new Vector(randomX, randomY);

        const randomScaleX = Math.random() * 0.5 + 0.5;
        this.scale = new Vector(randomScaleX, randomScaleX); //random groottes 

        const randomVelocityX = Math.random() * -200 - 50; // Naar links met de
        const randomVelocityY = Math.random() * 100 - 50;
        this.vel = new Vector(randomVelocityX, randomVelocityY);

        this.on("exitviewport", (e) => this.fishLeft(e));

        // Collision with Shark
        this.on('collisionstart', (evt) => this.hitSomething(evt));
    }

    hitSomething(evt) {
        console.log("fish hits something!");
        if (evt.other.owner instanceof Shark) {
            console.log("Fish killed by shark!");
            this.kill();
        }
    }

    fishLeft(e) {
        e.target.pos = new Vector(1920, Math.random() * 1080);
    }
}