class Game {
    constructor() {
        this.boardWidth = 2
        this.boardHeight = 6
        this.boardSpaces = []
        this.start = Date.now()
        this.moles = []
        this.player = 15
        this.score = 0
        this.gameover = false
        this.alive = true
        this.occupedspace = []
    }

    update() {
        //this.player.update
        console.log(this.player)
        this.generateMole()
        if (this.moles)
        this.moles.map(mole => {
            mole.update()
            if (mole.active === false) {
                this.removeMole(mole)
                this.deductPlayerLife()
            }
        })
    }

    deductPlayerLife() {
        if (this.player == 0) {
            alert("YOU'VE BEEN HOFFSMASHED")
            return
            // CREATE HTML BOX TO DEDUCT LIFE
        } else {
            this.player -= 1
        }
    }

    removeMole(mole) {
        this.moles.splice(this.moles.indexOf(mole), 1)
        this.boardSpaces.splice(this.boardSpaces.indexOf([mole.x, mole.y]), 1)
        // ADD GAME LOGIC FOR MOLE REMOVAL LIKE LESS HEALTH
    }

    getPosition() {
        return [Math.floor(Math.random() * this.boardHeight), Math.floor(Math.random() * this.boardWidth)]
    }

    getRandomOpenSpace() {
        let position = this.getPosition()
        while (this.boardSpaces.includes(position) && this.boardSpaces.length) {
            position = this.getPosition()
        }
        return position
    }

    generateMole() {
        if (this.boardSpaces.length < this.boardHeight * this.boardWidth) {
            if (((Date.now() - this.start) % 2000) < 89) {
                let position = this.getRandomOpenSpace()
                let moley = new Mole(...position)
                this.moles.push(moley)
                this.boardSpaces.push(position)
            }
        }
    }
}


class Mole {
    constructor(x, y) {
        this.start = Date.now()
        this.lifespan = 3000
        this.x = x
        this.y = y
        this.active = true
    }

    update() {
        if (this.lifespan < Date.now() - this.start) {
            this.active = false
        }
    }
}