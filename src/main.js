let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 960,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);