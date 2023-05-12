class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('background', './assets/background.png');
        this.load.image('textureAtlas', './assets/textureAtlas.png');
        /*
        this.load.audio('playBGM', './assets/playBGM.mp3');
        this.load.audio('menuBGM', './assets/menuBGM.mp3');
        this.load.audio('gameoverBGM', './assets/gameoverBGM.mp3);
        this.load.audio('select', './assets/select.mp3');
        this.load.audio('hooray', './assets/hooray.mp3');
        this.load.audio('oopsie', './assets/oopsie.mp3');
        */ 
    }

    create() {
        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 1280, 960, 'background').setOrigin(0, 0); 
    }

    update() {
        this.background.tilePositionX += 8;
    }
}