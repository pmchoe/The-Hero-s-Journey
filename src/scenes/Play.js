class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('background', './assets/background.png');
        this.load.atlas('textureAtlas', './assets/textureAtlas.png', './assets/textureAtlas.json');
        this.load.audio('playBGM', './assets/(Play bgm) freedom');
        this.load.audio('menuBGM', './assets/(Menu bgm) Fluffing-a-Duck');
        this.load.audio('select', './assets/(select sfx) mixkit-explainer-video-game-alert-sweep-236');
        this.load.audio('hooray', './assets/(hooray sfx) mixkit-quick-positive-video-game-notification-interface-265');
        this.load.audio('oopsie', './assets/(oopsie sfx) mixkit-arcade-mechanical-bling-210');
    }

    create() {
        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 1280, 960, 'background').setOrigin(0, 0); 
        
        // adds Hero
        this.player = new Hero(this, 300, 650, 'textureAtlas', 'textureAtlasSplit-0.png').setOrigin(1, 0.5);
        
        // adds icon in WASD fashion, again (after removing them from menu)
        /* this.iconW = new Icons(this, 185, 470, 'textureAtlas', 'textureAtlasSplit-5.png');
        this.iconA = new Icons(this, 135, 525, 'textureAtlas', 'textureAtlasSplit-6.png');
        this.iconS = new Icons(this, 185, 519, 'textureAtlas', 'textureAtlasSplit-7.png');
        this.iconD = new Icons(this, 235, 520, 'textureAtlas', 'textureAtlasSplit-8.png');
        */

        // REPLACE LATER, spawns ONE enemy
        // maybe not replace, but add while statement to keep spawning enemies
        this.enemy = new BadGuy(this, 1280, 650, 'textureAtlas', 'textureAtlasSplit-9.png').setOrigin(0, 0.5);

        // unsure if this belongs here or in update()
        // add Enemies as long as Hero isnt dead
        /* if(defeatedHero == 1){
            this.enemy = new BadGuy(this, game.config.width + 250, 450, 'textureAtlas', 'textureAtlasSplit-9.png').setOrigin(0, 0.5);
        }
        */

        // define scroll speed of background
        scrollSpeed = 8;

        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        // transition from Play to Menu when player loses
        // and increases scroll speed if player defeats enemy
        /* if(player.collideWith.enemy && iconNum != enemyNum) {
          scrollSpeed = 0;
          this.scene.stop("playScene");
          this.scene.start("MenuScene");
        } else if(player.collideWith.enemy ** iconNum == enemyNum) {
            scrollSpeed += 0.03;
        }
        */
        // MAYBE add a 1 second delay after losing


        // scrolls background 
        this.background.tilePositionX += scrollSpeed;
        
        // this.icon.update()
        this.enemy.update();
        this.player.update();
      }      
}