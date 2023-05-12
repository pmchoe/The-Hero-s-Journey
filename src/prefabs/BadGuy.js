// bad guy, aka "Enemy" prefab
class BadGuy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // THIS NEEDS TO BE RANDOMIZED BETWEEN ENEMY 9-12 SPRITES
        scene.add.existing(this);   // add to existing, displayList, updateList
        this.moveSpeed = 3/* update to match accelerating background scroll*/;   // pixels per frame
    }

    update() {
        // moves enemy left
        this.x -= this.moveSpeed;

        // spawns next randomized enemy
        /* every.spawnTimer.amount.of.seconds or frames.new.enemy*/

        // stops all enemy movement after defeating Hero
        if(enemy.defeatHero == true) {
            stop.allEnemy.movement
        }

        // removes enemy entity when hero defeats hero
        /* if(enemy.isDefeated == true) {
            remove.enemy
        }
        */
    }
}