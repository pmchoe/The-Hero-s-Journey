class Play extends Phaser.Scene {
    constructor() {
        super("playScene");

        // sets enemy move speed range 5-15
        this.moveSpeedLower = 5;
        this.moveSpeedUpper = 15;

        // sets points to 0
        this.points = 0;
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

        // places point counter
        this.resetText = this.add.text(1200, 20, "Points: ", {fontFamily: 'Arial', fontSize: '32px', fill: '#3d3d3d', fontStyle: 'bold'}).setOrigin(1, 0);

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

        // creates enemy randomly chosen 9-12
        this.enemyType = Phaser.Math.Between(9, 12);
        this.enemy = new BadGuy(this, 1280, 590, 'textureAtlas', `textureAtlasSplit-${this.enemyType}.png`).setOrigin(0, 0.5);

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

    // depreciated code, doesnt work, hate it, glad it didnt work honestly
    /*spawnEnemy() {
        // spawns one of the 4 enemies and adds it to enemy group
        let enemy = new BadGuy(this, 1280, 650, 'textureAtlas', `textureAtlasSplit-${Phaser.Math.Between(9, 12)}.png`).setOrigin(0, 0.5);
        this.enemies.add(enemy);
    }*/

    update() {
        // updates everything but enemy
        this.iconW.update();
        this.iconA.update();
        this.iconS.update();
        this.iconD.update();
        this.player.update();

        
        // sets iconType to match the pressed buttons
        document.addEventListener('keydown', (event) => {
            if(event.key === 'w') {
              this.iconType = 9;
            } else if(event.key === 'a') {
                this.iconType = 10;
            } else if(event.key === 's') {
                this.iconType = 11;
            } else if(event.key === 'd') {
                this.iconType = 12;
            }
        });

        // checks for collision
        if(this.checkCollision(this.enemy)) {
            // bad stuff for non-matching collision
            if(this.iconType != this.enemyType) {
                // make a lil oopsie sound if haven't already
                let selectSFX = this.sound.add('oopsie');
                selectSFX.play({volume: 0.5});

                // removes and respawns enemy
                this.enemy.destroy();
                this.enemyType = Phaser.Math.Between(9, 12);
                this.enemy = new BadGuy(this, 1280, 590, 'textureAtlas', `textureAtlasSplit-${this.enemyType}.png`).setOrigin(0, 0,5);

                // send to gameOver screen
                //this.music.stop();
                //this.scene.start("gameOverScene");
            } else if (this.iconType === this.enemyType) {
                // good stuff for matching collision

                // make a lil hooray sound
                let selectSFX = this.sound.add('hooray');
                selectSFX.play({volume: 0.5});

                // increases enemy movement speed
                this.moveSpeedLower++;
                this.moveSpeedUpper++;

                // removes and respawns enemy
                this.enemy.destroy();
                this.enemyType = Phaser.Math.Between(9, 12);
                this.enemy = new BadGuy(this, 1280, 590, 'textureAtlas', `textureAtlasSplit-${this.enemyType}.png`).setOrigin(0, 0,5);
            
                // add to points counter
                this.points++;
            } 
        }

        // scrolls background at 7 frames per second 
        this.background.tilePositionX += 7; 
        
        // updates enemy
        if(this.enemy.getBounds().left >= 210) {
            this.enemy.update(this.moveSpeedLower, this.moveSpeedUpper);
        }
        
        // USELESS, DOESNT WORK, COULDNT MAKE IT WORK, WONT MAKE IT WORK
        // I GIVE UP
        // updates entire enemy group
        /*this.enemies.children.iterate((enemy) => {
            enemy.x -= enemy.moveSpeed;

            // increases movement speed
            enemy.moveSpeed += this.time.deltaTime / 1000;

            // spawns enemy at the spawn rate interval
            enemy.spawnTimer -= this.time.deltaTime;
            if (enemy.spawnTimer <= 0) {
                // reduces the spawn rate by the specified increment 
                // every time an enemy is spawned
                enemy.spawnRate -= enemy.spawnRateIncrement;

                // increases the enemy move speed after every enemy spawn
                enemy.moveSpeed += enemy.moveSpeedIncrement;

                // updates enemy spawn timer to spawn rate
                enemy.spawnTimer = enemy.spawnRate;

                // spawns another enemy
                let newEnemy = new BadGuy(this, 1280, 650, 'textureAtlas', `textureAtlasSplit-${Phaser.Math.Between(9, 12)}.png`).setOrigin(0, 0.5);
                this.enemies.add(newEnemy);
            }

            // destroys enemy if it goes off the screen
            if (enemy.x < -enemy.width) {
                enemy.destroy();
            }
        });*/
    }  
    
    checkCollision(enemy) {
        // checks for collision
        if(this.enemy.getBounds().left <= 210) {
            return true;
        } else if(this.enemy.getBounds().left > 210) {
            return false;
        }
    }
}