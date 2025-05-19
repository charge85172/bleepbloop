import {actor} from "excalibur"

export class ui extends actor {
    constructor(){
        super()
        console.log("ik ben ui")
    }
    addScore () {
        console.log("ui adds point")
    }

    
}