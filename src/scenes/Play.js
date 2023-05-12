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
        
        // add Hero
        this.player = new Hero(this, 500, 500, 'textureAtlas', 'textureAtlasSplit-0.png').setOrigin(1, 0.5);
        
        // DELETE LATER, spawns ONE enemy
        this.enemy = new BadGuy(this, game.config.width - 1000, 200, 'textureAtlas', 'textureAtlasSplit-9.png').setOrigin(0, 0.5);

        // unsure if this belongs here or in update()
        // add Enemies as long as Hero isnt dead
        /* if(defeatedHero == 1){
            this.enemy = new BadGuy(this, game.config.width + 250, 450, 'textureAtlas', 'textureAtlasSplit-9.png').setOrigin(0, 0.5);
        }
        */

        // define keys
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    
        // define initial scroll speed
        scrollSpeed = 8;

        // define defeatedHero at 1 
        // (0 means game is on Menu, 1 is surviving, 2 is defeated)
        defeatedHero = 1;
    }

    update() {
        // accelerating background scroll
        /* while(enemy.defeatsHero == false) {
            this.background.tilePositionX += scrollSpeed;
            scrollSpeed += 0.5
        }
        */

        // DELETE LATER fixed speed at 8
        this.background.tilePositionX += scrollSpeed;

        // checks if enemy defeats Hero
        /* if((enemy.originpoint? == player.originpoint?) && iconType != enemyType) {
            enemy.defeatsHero = 2;
        } 
        */

        this.enemy.update();
        this.player.update();

        // stops background scroll when lose
        /* if(enemy.defeatsHero == true) {
            scrollSpeed = 0;
        }
        */
    }
}