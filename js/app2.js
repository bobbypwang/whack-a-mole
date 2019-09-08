var canvasWidth = window.innerWidth
var canvasHeight = window.innerHeight - $("h1").offsetHeight
var fieldWidth = canvasWidth / 6
var fieldHeight = canvasHeight / 2


var myGameArea = {
    canvas: document.createElement("canvas"),
    frames: 0,

    loadCanvasLargeScreen: function () {
        this.canvas.width = canvasWidth - 120
        this.canvas.height = canvasHeight - 120
    },

    loadCanvasSmallScreen: function () {
        this.canvas.width = window.innerWidth - 60
        this.canvas.height = window.innerHeight - $("h1").offsetHeight - 60
    },

    loadCanvas: function () {
        this.ctx = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.assets).classList.add('game-canvas')
        this.interval = setInterval(updateGameArea, 20)
    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },

    stop: function () {
        clearInterval(this.interval)
    },

}

class Component {
    constructor(width, height, color, x, y) {
        this.width = width
        this.height = height
        this.color = color
        this.x = x
        this.y = y
    }

    update() {
        var ctx = myGameArea.ctx
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Mole extends Component {
    constructor(width, height, color, x, y, lifeline) {
        super(width, height, color, x, y)
        this.health = 1
        this.attack = 1
        this.lifeline = 2
        this.date = Date.now()
    }

    function globalTime {
        var start = Date.now();
        let millis = Date.now() - start;
        return millis
    }
}

class Hassellhoff extends Component {
    constructor(width, height, color, x, y) {
        super(width, height, color, x, y)
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.health = 2
        this.attack = 2
    }

    image(attr) {
        var ctx = myGameArea.ctx
        var image = new Image()
        if (attr === "") {
            image.src = ''
        } else {
            image.src = './img/hasselhoff.jpg'
        }

        ctx.drawImage(image, this.x, this.y, this.width, this.height)
    }
}


function clearArea(x, y, width, height) {
    var ctx = myGameArea.ctx
    ctx.clearRect(width, height, x, y)
    console.log("this")
}


var myMoles = []

var activeMoles = []

var myMoleHoles = [{
        "key": "q",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": 0,
        "yCoord": 0,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', 0, 0),
        "active": 0
    },
    {
        "key": "w",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth,
        "yCoord": 0,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth, 0),
        "active": 0
    },
    {
        "key": "e",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth * 2,
        "yCoord": 0,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth * 2, 0),
        "active": 0
    },
    {
        "key": "u",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth * 3,
        "yCoord": 0,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth * 3, 0),
        "active": 0
    },
    {
        "key": "i",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth * 4,
        "yCoord": 0,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth * 4, 0),
        "active": 0
    },
    {
        "key": "o",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth * 5,
        "yCoord": 0,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth * 5, 0),
        "active": 0
    },
    {
        "key": "a",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": 0,
        "yCoord": fieldHeight,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', 0, fieldHeight),
        "active": 0
    },
    {
        "key": "s",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth,
        "yCoord": fieldHeight,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth, fieldHeight),
        "active": 0
    },
    {
        "key": "d",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth * 2,
        "yCoord": fieldHeight,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth * 2, fieldHeight),
        "active": 0
    },
    {
        "key": "j",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth * 3,
        "yCoord": fieldHeight,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth * 3, fieldHeight),
        "active": 0
    },
    {
        "key": "k",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth * 4,
        "yCoord": fieldHeight,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth * 4, fieldHeight),
        "active": 0
    },
    {
        "key": "l",
        "mole": "Hassellhoff",
        "width": fieldWidth,
        "height": fieldHeight,
        "xCoord": fieldWidth * 5,
        "yCoord": fieldHeight,
        "location": new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth * 5, fieldHeight),
        "active": 0
    }
]

// let topQ = new Hassellhoff(fieldWidth, fieldHeight, '', 0, 0)
// let topW = new Hassellhoff(fieldWidth, fieldHeight, '', fieldWidth, 0)
// let topE = myMoleHoles[2]
// let topU = myMoleHoles[3]
// let topI = myMoleHoles[4]
// let topO = myMoleHoles[5]
// let bottomA = myMoleHoles[6]
// let bottomS = myMoleHoles[7]
// let bottomD = myMoleHoles[8]
// let bottomJ = myMoleHoles[9]
// let bottomK = myMoleHoles[10]
// let bottomL = myMoleHoles[11]

function randomMoles() {
    myGameArea.frames += 1

    if (myGameArea.frames % 1 === 0) {
        for (i = 0; i < LEVEL_LENGTH; i++) {
            let rand = Math.floor(Math.random() * 12)
            if (myMoleHoles[rand].active == 0) {
                myMoleHoles[rand].location.image()
                myMoleHoles[rand].active = 1
            }
        }
    }
}


function checkGameOver() {

}


document.onkeydown = function (e) {
    switch (e.keyCode) {
        // Left Side QWEASD
        case 81: // Q
            console.log(`Q key pressed`)

            var ctx = myGameArea.ctx
            ctx.clearRect(myMoleHoles[0].xCoord, myMoleHoles[0].yCoord, myMoleHoles[0].width, myMoleHoles[0].height)
            ctx.clearRect(0, 0, 100, 100)
            break
        case 87: // W
            console.log(`W key pressed`)
            topW = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            topW.image()
            break
        case 69: // E
            console.log(`E key pressed`)
            topE = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            topE.image()
            break
        case 65: // A
            console.log(`A key pressed`)
            bottomA = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            bottomA.image()
            break
        case 83: // S
            console.log(`S key pressed`)
            bottomS = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            bottomS.image()
            break
        case 68: // D
            console.log(`D key pressed`)
            bottomD = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            bottomD.image()
            break
            // Right Side UIOJKL
        case 85: // U
            console.log(`U key pressed`)
            topU = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            topU.image()
            break
        case 73: // I
            console.log(`I key pressed`)
            topI = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            topI.image()
            break
        case 79: // O
            console.log(`O key pressed`)
            topO = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            topO.image()
            break
        case 74: // J
            console.log(`J key pressed`)
            bottomJ = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            bottomJ.image()
            break
        case 75: // K
            console.log(`K key pressed`)
            bottomK = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            bottomK.image()
            break
        case 76: // L
            console.log(`L key pressed`)
            bottomL = new Hassellhoff(fieldWidth, fieldHeight, "rgba(0,0,0,0)", 99999, 99999)
            bottomL.image()
            break
    }
}

function initialLoad() {

}

function updateGameArea() {
    // myGameArea.clear()
    //initialLoad()
    //checkGameOver() // Checks to see how much health is left
    randomMoles()
}

window.onload = function () {
    if (window.innerWidth > 420) {
        myGameArea.loadCanvasSmallScreen()
    } else {
        myGameArea.loadCanvasLargeScreen()
    }
    myGameArea.loadCanvas()
    initialLoad()
    updateGameArea()
}


window.onresize = function () {
    if (window.innerWidth <= 420) {
        myGameArea.loadCanvasSmallScreen()
    } else {
        myGameArea.loadCanvasLargeScreen()
    }
    initialLoad()
    updateGameArea()
}