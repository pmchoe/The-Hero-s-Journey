class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('background', './assets/background.png');
        this.load.atlas('textureAtlas', './assets/textureAtlas.png', './assets/textureAtlas.json');
        this.load.audio('playBGM', './assets/(Play bgm) freedom.mp3');
        this.load.audio('menuBGM', './assets/(Menu bgm) Fluffing-a-Duck.mp3');
        this.load.audio('select', './assets/(select sfx) mixkit-explainer-video-game-alert-sweep-236.mp3');
        this.load.audio('hooray', './assets/(hooray sfx) mixkit-quick-positive-video-game-notification-interface-265.mp3');
        this.load.audio('oopsie', './assets/(oopsie sfx) mixkit-arcade-mechanical-bling-210.mp3');
    }

    create() {
        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 1280, 960, 'background').setOrigin(0, 0); 
        
        // adds Hero
        this.player = new Hero(this, 300, 650, 'textureAtlas', 'textureAtlasSplit-0.png').setOrigin(1, 0.5);
        
        // adds icon in WASD fashion, again (after removing them from menu)
        this.iconW = new Icons(this, 185, 470, 'textureAtlas', 'textureAtlasSplit-5.png').setAlpha(0.4);
        this.iconA = new Icons(this, 135, 525, 'textureAtlas', 'textureAtlasSplit-6.png').setAlpha(0.4);
        this.iconS = new Icons(this, 185, 519, 'textureAtlas', 'textureAtlasSplit-7.png').setAlpha(0.4);
        this.iconD = new Icons(this, 235, 520, 'textureAtlas', 'textureAtlasSplit-8.png').setAlpha(0.4);

        // REPLACE LATER, spawns ONE enemy
        this.enemy = new BadGuy(this, 1280, 650, 'textureAtlas', 'textureAtlasSplit-9.png').setOrigin(0, 0.5);

        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        // transition from Play to Menu when player loses
        // and increases enemy speed if player defeats enemy
        /* if(player.collideWith.enemy && iconNum != enemyNum) {
          moveSpeed = 0;
          this.hero.destroy();
          this.allEnemies.destroy();
          this.scene.start("menuScene");
        } else if(player.collideWith.enemy ** iconNum == enemyNum) {
            moveSpeed += 0.03;
        }
        */
        // MAYBE add a 1 second delay after losing

        // scrolls background at 8 frames per second (i think)
        this.background.tilePositionX += 8;
        
        this.iconW.update();
        this.iconA.update();
        this.iconS.update();
        this.iconD.update();
        this.enemy.update();
        this.player.update();
      }      
}