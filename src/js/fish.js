import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Shark } from './shark.js'

export class Fish extends Actor {
    onInitialize(engine) {
        this.graphics.use(Resources.Fish.toSprite())
        this.body.collisionType = CollisionType.Active

        // Add a rectangular hitbox (adjust size as needed)
        this.body.useBoxCollider(100, 50)

        const randomX = Math.random() * 1920
        const randomY = Math.random() * 1080
        this.pos = new Vector(randomX, randomY)

        const randomScale = Math.random() * 0.5 + 0.5
        this.scale = new Vector(randomScale, randomScale)

        const randomVelocityX = Math.random() * -200 - 50
        const randomVelocityY = Math.random() * 100 - 50
        this.vel = new Vector(randomVelocityX, randomVelocityY)

        this.events.on("exitviewport", (e) => this.fishLeft(e))

        this.events.on('collisionstart', (evt) => {
            if (evt.other.owner instanceof Shark) {
                this.kill()
            }
        })
    }

    fishLeft(e) {
        e.target.pos = new Vector(1920, Math.random() * 1080)
    }
}