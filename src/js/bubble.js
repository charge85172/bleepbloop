import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Fish } from './fish.js'

export class Bubble extends Actor {
    onInitialize(engine) {
        this.graphics.use(Resources.Bubble.toSprite())
        this.body.collisionType = CollisionType.Active
        this.body.useCircleCollider(25)
        const randomX = Math.random() * 1920
        const randomY = 1080
        this.pos = new Vector(randomX, randomY)
        const randomScale = Math.random() * 0.1 + 0.2
        this.scale = new Vector(randomScale, randomScale)
        const randomVelocityX = Math.random() * -50 - 50
        const randomVelocityY = Math.random() * -100 - 50
        this.vel = new Vector(randomVelocityX, randomVelocityY)
        this.events.on('exitviewport', (e) => this.bubbleLeft(e))
        this.events.on('pointerup', () => this.kill())
        this.events.on('collisionstart', (evt) => {
            if (evt.other.owner instanceof Fish) {
                evt.other.owner.kill()
            }
        })
    }
    bubbleLeft(e) {
        e.target.pos = new Vector(Math.random() * 1920, 1080)
    }
}
