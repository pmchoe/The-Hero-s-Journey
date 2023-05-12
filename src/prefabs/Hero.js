// Hero prefab
class Hero extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
    }

    update() {
        // might be optional, removes idle sprite and starts running animation


        // changes player icon depending on W, A, S, D key pressed
        if(Phaser.Input.Keyboard.JustDown(keyW)) {
            // change to textureAtlasSplit-5 (pink circle)
        }
        if(Phaser.Input.Keyboard.JustDown(keyA)) {
            // change to textureAtlasSplit-6 (orange triangle)
        }
        if(Phaser.Input.Keyboard.JustDown(keyS)) {
            // change to textureAtlasSplit-7 (purple square)
        }
        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            // change to textureAtlasSplit-8 (yellow... polygon?)
        }

        // resets hero after dying to enemy
        /* if(this.BadGuy.collision??? == true) {
            (maybe optional)this.HeroRunning.stop
            this.Hero.goToIdlePosition
        }

        // starts running animation after W, A, S, D is pressed
        if((Phaser.Input.Keyboard.JustDown(keyW) || Phaser.Input.Keyboard.JustDown(keyA) ||
        Phaser.Input.Keyboard.JustDown(keyS) || Phaser.Input.Keyboard.JustDown(keyD))
        && this.scene.Menu == true) {
            remove this.HeroIdle
            start this.HeroRunning
        }
        */
    }
}