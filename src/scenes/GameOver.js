class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
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
        
        // game over text
        this.gameOverText = this.add.text(640, 360, "You Tried", {fontFamily: 'Arial', fontSize: '74px', fill: '#3d3d3d', fontStyle: 'bold'}).setOrigin(0.5);

        // displays points counter from Play.js
        this.pointsText = this.add.text(640, 500, "Points: " + pointsGameOver, {fontFamily: 'Arial', fontSize: '32px', fill: '#3d3d3d', fontStyle: 'bold'}).setOrigin(0.5);

        // bgm for gameover (same as menu)
        this.music = this.sound.add('menuBGM', {loop: true});
        this.music.play({volume: 0.35});

        // instructions text
        this.resetText = this.add.text (20, 70, "Press R to restart", {fontFamily: 'Arial', fontSize: '32px', fill: '#3d3d3d', fontStyle: 'bold'});
        this.creditText = this.add.text (20, 20, "Press T for credits", {fontFamily: 'Arial', fontSize: '32px', fill: '#3d3d3d', fontStyle: 'bold'});

        // define keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    }

    update() {
        // brings player to credit screen by pressing T
        if(Phaser.Input.Keyboard.JustDown(keyT)) {
            // resets points to 0
            pointsGameOver = 0;
            points = 0;
            // destroys objects and switches to credit scene
            this.gameOverText.destroy();
            this.resetText.destroy();
            this.creditText.destroy();
            this.pointsText.destroy();
            this.music.stop();
            this.scene.start("creditScene");
        }

        // restarts game by pressing R
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            // resets points to 0
            pointsGameOver = 0;
            points = 0;
            // destroys objects and switches to game scene
            this.gameOverText.destroy();
            this.resetText.destroy();
            this.creditText.destroy();
            this.pointsText.destroy();
            this.music.stop();
            this.scene.start("menuScene");
        }
    }
}
