class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.preload.image('background', './assets/background.png');
        this.preload.image('textureAtlas', './assets/textureAtlas.png');
        /*
        this.preload.audio('playBGM', './assets/playBGM.mp3');
        this.preload.audio('menuBGM', './assets/menuBGM.mp3');
        this.preload.audio('gameoverBGM', './assets/gameoverBGM.mp3);
        this.preload.audio('select', './assets/select.mp3');
        this.preload.audio('hooray', './assets/hooray.mp3');
        this.preload.audio('oopsie', './assets/oopsie.mp3');
        */ 
    }

    create() {
        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);
        
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0); 
    }
}