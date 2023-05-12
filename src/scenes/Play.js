class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('background', './assets/background.png');
        this.load.atlas('textureAtlas', './assets/textureAtlas.png', './assets/textureAtlas.json');
        /*
        this.load.audio('playBGM', './assets/playBGM.mp3');
        this.load.audio('menuBGM', './assets/menuBGM.mp3');
        this.load.audio('select', './assets/select.mp3');
        this.load.audio('hooray', './assets/hooray.mp3');
        this.load.audio('oopsie', './assets/oopsie.mp3');
        */ 
    }

    create() {
        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 1280, 960, 'background').setOrigin(0, 0); 
        
        // add Hero
        this.player = this.Hero(100, 450, 'textureAtlas', 'textureAtlasSplit-0.png').setOrigin(0.9, 0.5);
        
        // add Enemies as the background scrolls
        this.enemy = this.BadGuy(atRightEndofScroller, 450, 'textureAtlas', 'textureAtlasSplit-9').setOrigin(0, 0.5);

        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        this.background.tilePositionX += 8;
        this.enemy.update();
        this.player.update();

        // stops background scroll when lose
        if(this.enemy.stop == true) {
            this.background.tilePositionX = 0;
        }
    }
}