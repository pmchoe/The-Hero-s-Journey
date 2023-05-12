// bad guy, aka "Enemy" prefab
class BadGuy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // THIS NEEDS TO BE RANDOMIZED BETWEEN ENEMY 9-12 SPRITES
        scene.add.existing(this);   // add to existing, displayList, updateList
        this.moveSpeed = scrollSpeed // pixels per frame, matches background speed
    }

    update() {
        // moves enemy left
        this.x -= this.moveSpeed;

        // spawns next randomized enemy
        /* every.spawnTimer.amount.of.seconds or frames.new.enemy*/

        // removes all enemies after defeating Hero
        /* if(defeatedHero == 2) {
            stop all enemy movement (might be optional)
            remove all enemy entities
        }
        */
    }
}