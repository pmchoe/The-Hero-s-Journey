let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 960,
    scene: [ Menu, Play ],
};

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyR, keyT, keyW, keyA, keyS, keyD;

// reserve icon vars
let iconW, iconA, iconS, iconD;

// reserve enemy move speed
let moveSpeed;