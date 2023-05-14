// Icons prefab
class Icons extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
    }

    preload() {
        this.load.audio('select', './assets/(select sfx) mixkit-explainer-video-game-alert-sweep-236.mp3');
    }

    update() {
        // get reference to the scene
        let scene = this.scene;
        
        // When W key is pressed, iconW is "highlighted" while
        // the others are transparent when not selected
        if(Phaser.Input.Keyboard.JustDown(keyW)) {
            this.scene.iconW.setAlpha(1);
            this.scene.iconA.setAlpha(0.4);
            this.scene.iconS.setAlpha(0.4);
            this.scene.iconD.setAlpha(0.4);

            // make a lil sound
            let selectSFX = this.sound.add('select');
            selectSFX.play({volume: 0.5});
        } else if(Phaser.Input.Keyboard.JustDown(keyA)) {
            this.scene.iconW.setAlpha(0.4);
            this.scene.iconA.setAlpha(1);
            this.scene.iconS.setAlpha(0.4);
            this.scene.iconD.setAlpha(0.4);

            // make a lil sound
            let selectSFX = this.sound.add('select');
            selectSFX.play({volume: 0.5});
        } else if(Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.iconW.setAlpha(0.4);
            this.scene.iconA.setAlpha(0.4);
            this.scene.iconS.setAlpha(1);
            this.scene.iconD.setAlpha(0.4);

            // make a lil sound
            let selectSFX = this.sound.add('select');
            selectSFX.play({volume: 0.5});
        } else if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.scene.iconW.setAlpha(0.4);
            this.scene.iconA.setAlpha(0.4);
            this.scene.iconS.setAlpha(0.4);
            this.scene.iconD.setAlpha(1);
            
            // make a lil sound
            let selectSFX = this.sound.add('select');
            selectSFX.play({volume: 0.5});
        }
    }    
}