// bad guy, aka "Enemy" prefab
class BadGuy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
    }

    update(time, delta) {
        // moves enemy to the left
        // matches background speed
        this.x -= 8;
    }
}