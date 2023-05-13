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
        this.background = this.add.image(0, 0, 'background').setOrigin(0, 0); 
        
        // title text
        this.titleText = this.add.text(640, 380, "Match the Colors", {fontFamily: 'Arial', fontSize: '74px', fill: '#3d3d3d', fontStyle: 'bold'}).setOrigin(0.5);

        // instructions text
        this.instructionsText = this.add.text(640, 480, "Press W, A, S, D", {fontFamily: 'Arial', fontSize: '32px', fill: '#3d3d3d', fontStyle: 'bold'}).setOrigin(0.5);

        // spawns static hero
        this.player = new Hero(this, 300, 650, 'textureAtlas', 'textureAtlasSplit-0.png').setOrigin(1, 0.5);

        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        // Check for key presses and switch to play scene by pressing W, A, S, or D
        if(Phaser.Input.Keyboard.JustDown(keyW) || Phaser.Input.Keyboard.JustDown(keyA)
        || Phaser.Input.Keyboard.JustDown(keyS) || Phaser.Input.Keyboard.JustDown(keyD)) {
            // Destroy objects and switch to play scene
            this.titleText.destroy();
            this.instructionsText.destroy();
            this.player.destroy();
            this.scene.start("playScene");
        }
    }
}
