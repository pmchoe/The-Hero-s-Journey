class Credit extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }

    preload() {
        this.load.image('background', './assets/background.png');
        this.load.image('credits', './assets/credits.png');
        this.load.audio('menuBGM', './assets/(Menu bgm) Fluffing-a-Duck.mp3');
    }

    create() {
        // place tile sprite
        this.background = this.add.image(0, 0, 'background').setOrigin(0, 0); 
    
        // credits "text" image
        this.credits = this.add.image(0, 0, 'credits').setOrigin(0, 0); 

        // reset text
        this.resetText = this.add.text(20, 20, "Press R to restart", {fontFamily: 'Arial', fontSize: '32px', fill: '#3d3d3d', fontStyle: 'bold'});
        
        // define keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        
        // bgm same as menu's
        this.music = this.sound.add('menuBGM', {loop: true});
        this.music.play({volume: 0.5});
    }

    update() {
        // brings player to menu screen by pressing R
        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            // destroys objects and switches to menu scene
            this.credits.destroy();
            this.music.stop();
            this.scene.start("menuScene");
        }
    }
}
