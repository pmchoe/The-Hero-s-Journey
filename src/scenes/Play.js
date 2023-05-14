class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
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
        // starts play bgm
        this.music = this.sound.add('playBGM', {loop: true});
        this.music.play({volume: 0.35});
        
        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 1280, 960, 'background').setOrigin(0, 0); 

        // reset and credit text
        this.resetText = this.add.text(20, 20, "Press R to restart", {fontFamily: 'Arial', fontSize: '32px', fill: '#3d3d3d', fontStyle: 'bold'});

        // replaces static hero with running hero
        this.anims.create({
            key: 'hero_running',
            frames: [
                {key: 'textureAtlas', frame: 'textureAtlasSplit-2.png', origin: {x: 1, y: 0.5}},
                {key: 'textureAtlas', frame: 'textureAtlasSplit-3.png', origin: {x: 1, y: 0.5}},
                {key: 'textureAtlas', frame: 'textureAtlasSplit-4.png', origin: {x: 1, y: 0.5}},
            ],
            frameRate: 6,
            repeat: -1  // loops infinitely
        });
        this.player = new Hero(this, 180, 745, 'textureAtlas', 'textureAtlasSplit-1.png').setOrigin(1, 0.5);
        this.player.anims.play('hero_running', true).setOrigin(1, 0.5);   // animates hero running

        // enemy spawns at faster rates with faster speeds
        //this.spawnEnemy();

        // adds icon in WASD fashion, again (after removing them from menu)
        this.iconW = new Icons(this, 185, 470, 'textureAtlas', 'textureAtlasSplit-5.png').setAlpha(0.4);
        this.iconA = new Icons(this, 135, 525, 'textureAtlas', 'textureAtlasSplit-6.png').setAlpha(0.4);
        this.iconS = new Icons(this, 185, 519, 'textureAtlas', 'textureAtlasSplit-7.png').setAlpha(0.4);
        this.iconD = new Icons(this, 235, 520, 'textureAtlas', 'textureAtlasSplit-8.png').setAlpha(0.4);

        // define keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    /*
    spawnEnemy() {
        let enemyType = Phaser.Math.Between(1, 4);
        new BadGuy(this, game.config.width, 650, 'textureAtlas', `textureAtlasSplit-${enemyType}.png`).setOrigin(0, 0.5);
    }
    */
    
    update() {
        // brings player back to menu screen by pressing R
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.music.stop();
            this.scene.start("menuScene");
        }
        
        // brings player to credit screen by pressing T
        if(Phaser.Input.Keyboard.JustDown(keyT)) {
            this.music.stop();
            this.scene.start("creditScene");
        }


        // scrolls background at 8 frames per second (i think)
        this.background.tilePositionX += 8;
        
        this.iconW.update();
        this.iconA.update();
        this.iconS.update();
        this.iconD.update();
        //this.enemy.update();
        this.player.update();
      }      
}