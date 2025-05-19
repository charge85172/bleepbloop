import { Actor } from "excalibur"

export class UI extends Actor {
    onInitialize() {
        console.log("UI initialized")
    }
    addScore() {
        console.log("UI adds point")
    }
}