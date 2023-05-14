class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('background', './assets/background.png');
        this.load.image('credits', './assets/credits.png');
        this.load.atlas('textureAtlas', './assets/textureAtlas.png', './assets/textureAtlas.json');
        this.load.audio('playBGM', './assets/(Play bgm) freedom.mp3');
        this.load.audio('menuBGM', './assets/(Menu bgm) Fluffing-a-Duck.mp3');
        this.load.audio('select', './assets/(select sfx) mixkit-explainer-video-game-alert-sweep-236.mp3');
        this.load.audio('hooray', './assets/(hooray sfx) mixkit-quick-positive-video-game-notification-interface-265.mp3');
        this.load.audio('oopsie', './assets/(oopsie sfx) mixkit-arcade-mechanical-bling-210.mp3');
    }

    create() {
        // place tile sprite
        this.background = this.add.image(0, 0, 'background').setOrigin(0, 0); 
        
        // title text
        this.titleText = this.add.text(640, 380, "Match the Colors", {fontFamily: 'Arial', fontSize: '74px', fill: '#3d3d3d', fontStyle: 'bold'}).setOrigin(0.5);

        // bgm for menu
        this.music = this.sound.add('menuBGM', {loop: true});
        this.music.play({volume: 0.35});

        // instructions text
        this.instructionsText = this.add.text(640, 480, "Press W, A, S, D", {fontFamily: 'Arial', fontSize: '32px', fill: '#3d3d3d', fontStyle: 'bold'}).setOrigin(0.5);
        this.resetText = this.add.text (20, 20, "Press R to restart", {fontFamily: 'Arial', fontSize: '32px', fill: '#3d3d3d', fontStyle: 'bold'});
        this.creditText = this.add.text (20, 50, "Press T for credits", {fontFamily: 'Arial', fontSize: '25px', fill: '#3d3d3d', fontStyle: 'bold'});

        // adds icon in WASD fashion
        this.icon = new Icons(this, 185, 470, 'textureAtlas', 'textureAtlasSplit-5.png');
        this.icon = new Icons(this, 135, 525, 'textureAtlas', 'textureAtlasSplit-6.png');
        this.icon = new Icons(this, 185, 519, 'textureAtlas', 'textureAtlasSplit-7.png');
        this.icon = new Icons(this, 235, 520, 'textureAtlas', 'textureAtlasSplit-8.png');

        // spawns static hero
        this.player = new Hero(this, 300, 650, 'textureAtlas', 'textureAtlasSplit-0.png').setOrigin(1, 0.5).setAnchor(0.5, 0.5);

        // define keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        // brings player to credit screen by pressing T
        if(Phaser.Input.Keyboard.JustDown(keyT)) {
            // destroys objects and switches to credit scene
            this.titleText.destroy();
            this.instructionsText.destroy();
            this.creditText.destroy();
            this.music.stop();
            this.player.destroy();
            this.icon.destroy();
            this.scene.start("creditScene");
        }

        // check for W, A, S, D key press
        if(Phaser.Input.Keyboard.JustDown(keyW) || Phaser.Input.Keyboard.JustDown(keyA)
        || Phaser.Input.Keyboard.JustDown(keyS) || Phaser.Input.Keyboard.JustDown(keyD)) {
            // make a lil sound
            let selectSFX = this.sound.add('select');
            selectSFX.play({volume: 0.5});

            // destroy objects and switch to play scene
            this.titleText.destroy();
            this.instructionsText.destroy();
            this.creditText.destroy();
            this.music.stop();
            this.player.destroy();
            this.icon.destroy();
            this.scene.start("playScene");
        }
    }
}
