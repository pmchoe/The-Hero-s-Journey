let config = {
    type: Phaser.CANVAS,
    width: 1480,
    height: 960,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);