import '../css/style.css'
import { Engine, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Bubble } from './bubble.js'
import { Shark } from './shark.js'
import { UI } from './ui.js'

export class Game extends Engine {
    constructor() {
        super({
            width: 1920,
            height: 1080,
            maxFps: 12,
            displayMode: DisplayMode.FitScreen
        })
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        for (let i = 0; i < 50; i++) this.add(new Fish())
        for (let i = 0; i < 50; i++) this.add(new Bubble())
    let shark = new Shark("Bruce", 65)
        this.add(new Shark())
        this.ui = new UI()
        this.add(this.ui)
    }
}

new Game()
