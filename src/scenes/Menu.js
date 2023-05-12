class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('background', './assets/background.png');
        this.load.atlas('textureAtlas', './assets/textureAtlas.png', './assets/textureAtlas.json');
        this.load.audio('playBGM', './assets/(Play bgm) freedom');
        this.load.audio('menuBGM', './assets/(Menu bgm) Fluffing-a-Duck');
        this.load.audio('select', './assets/(select sfx) mixkit-explainer-video-game-alert-sweep-236');
    }

    create() {
        // place tile sprite
        this.background = this.add.image(0, 0, 1280, 960, 'background').setOrigin(0, 0); 
        
        // title text
        this.add.text(500, 860, "The Hero's Journey");

        // spawns static hero
        /*this.player = new Hero(this, 300, 650, 'textureAtlas', 'textureAtlasSplit-0.png').setOrigin(1, 0.5);
        */

        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    
        // when W, A, S, D pressed, switches scenes from Menu to Play
        if(Phaser.Input.Keyboard.JustDown(keyW) || Phaser.Input.Keyboard.JustDown(keyA)
        || Phaser.Input.Keyboard.JustDown(keyS) || Phaser.Input.Keyboard.JustDown(keyD)) {
            this.scene.start("playScene");
        }
    }
}