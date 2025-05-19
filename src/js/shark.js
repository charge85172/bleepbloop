import { Actor, Vector, Keys, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Shark extends Actor {
    constructor() {
        super({width: 1000,height: 1000}); // Hitbox van de haai

        this.graphics.use(Resources.shark.toSprite());

        // this.body.collisionType = CollisionType.Active;

        let X = Math.random() * 960;
        let Y = Math.random() * 540;
        this.scale = new Vector(0.1, 0.1); // Make the shark visible
        this.pos = new Vector(X, Y);

        this.speed = 200; // snelheid van de haai

        this.on("exitviewport", () => this.SharkLeave());
    }

    onPreUpdate(engine) {
        const kb = engine.input.keyboard;

        let xspeed = 0;
        let yspeed = 0;
        if (kb.isHeld(Keys.W)) {
            yspeed -= 200;
        }
        if (kb.isHeld(Keys.S)) {
            yspeed += 200;
        }
        if (kb.isHeld(Keys.A)) {
            xspeed -= 200;
        }
        if (kb.isHeld(Keys.D)) {
            xspeed += 200;
        }
        this.vel = new Vector(xspeed, yspeed);
        // // Movement vector
        // let move = new Vector(0, 0);

        // if (kb.isHeld(Keys.W)) move.y -= 1;
        // if (kb.isHeld(Keys.S)) move.y += 1;
        // if (kb.isHeld(Keys.A)) move.x -= 1;
        // if (kb.isHeld(Keys.D)) move.x += 1;

        // if (move.x !== 0 || move.y !== 0) {
        //     move = move.normalize().scale(this.speed * engine.delta / 1000);
        //     this.pos = this.pos.add(move);

        //     // Clamp position to screen bounds (assuming 1920x1080)
        //     this.pos.x = Math.max(0, Math.min(1920, this.pos.x));
        //     this.pos.y = Math.max(0, Math.min(1080, this.pos.y));
        // }
    }

    SharkLeave() {
        this.pos = new Vector(960, 540); // Center of the screen
        this.vel = Vector.Zero;
    }
}