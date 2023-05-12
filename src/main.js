let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 960,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyW, keyA, keyS, keyD;

// reserve scrollSpeed
let scrollSpeed;

// reserve a check if enemy defeats hero
let defeatedHero;