import { Actor, Vector, Keys, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Shark extends Actor {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        this.speed = 0;
        console.log(`Shark ${this.name} is ${this.age} years old`);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Shark.toSprite());
        this.body.collisionType = CollisionType.Active;

        // Add a rectangular hitbox (adjust size as needed)
        this.body.useBoxCollider(150, 60);

        this.anchor = new Vector(0.5, 0.5);
        this.scale = new Vector(0.1, 0.1);
        this.pos = new Vector(Math.random() * 960, Math.random() * 540);
        this.speed = 200;

        this.events.on("exitviewport", () => this.sharkLeave());
    }

    onPreUpdate(engine) {
        const kb = engine.input.keyboard;
        let xspeed = 0;
        let yspeed = 0;

        if (kb.isHeld(Keys.W)) yspeed -= this.speed;
        if (kb.isHeld(Keys.S)) yspeed += this.speed;
        if (kb.isHeld(Keys.A)) xspeed -= this.speed;
        if (kb.isHeld(Keys.D)) xspeed += this.speed;

        this.vel = new Vector(xspeed, yspeed);
    }

    sharkLeave() {
        this.pos = new Vector(960, 540);
        this.vel = Vector.Zero;
    }
}