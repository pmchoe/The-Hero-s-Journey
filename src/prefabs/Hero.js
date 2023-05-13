// Hero prefab
class Hero extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
    }

    update() {
        // might not belong here, removes idle sprite and starts running animation

        // turns hero sprite 270 degrees when defeated
        /* if(enemy.collidesWith.player && iconType != enemyType) {
            remove.runningHeroAnimation
            put png image textureAtlasSplit-0
            flip it 270 degrees
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