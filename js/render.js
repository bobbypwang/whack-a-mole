const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var canvas,
    ctx,
    gridSizeWidth,
    gridSizeHeight

function canvasConfig() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    gridSizeWidth = window.innerWidth/6
    gridSizeHeight = window.innerHeight/2
}

function initGame () {
    canvas = $("canvas")
    ctx = canvas.getContext("2d")
    canvasConfig()
    new RenderEngine()
}

class RenderEngine {
    constructor() {
        this.spaceWidth = canvas.width/9
        this.game = new Game()
        this.run()
    }

    run() {
        if (!this.game.gameover) {
            this.game.update()
            ctx.clearRect(0,0,canvas.width, canvas.height)
            this.draw()
        }

        requestAnimationFrame(this.run.bind(this))
    }

    draw() {
        this.game.moles.map(moley => {
            let image =  new Image()
            image.src = './img/hasselhoff.jpg'
            ctx.drawImage(image, moley.x*gridSizeWidth, moley.y*gridSizeHeight, gridSizeWidth, gridSizeHeight)
        })
        // this.game.moles //do something with the mole data
    }

}

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 81: // Q
            console.log(`Q key pressed`)
            ctx.clearRect(0, 0, gridSizeWidth, gridSizeHeight)
            console.log(gridSizeHeight + "" + gridSizeWidth)
            break
        case 87: // W
            console.log(`W key pressed`)
            break
        case 69: // E
            console.log(`E key pressed`)
            break
        case 65: // A
            console.log(`A key pressed`)
            break
        case 83: // S
            console.log(`S key pressed`)
            break
        case 68: // D
            console.log(`D key pressed`)
            break
        case 85: // U
            console.log(`U key pressed`)
            break
        case 73: // I
            console.log(`I key pressed`)
            break
        case 79: // O
            console.log(`O key pressed`)
            break
        case 74: // J
            console.log(`J key pressed`)
            break
        case 75: // K
            console.log(`K key pressed`)
            break
        case 76: // L
            console.log(`L key pressed`)
            break
    }
}

window.onload = initGame
window.resize = canvasConfig