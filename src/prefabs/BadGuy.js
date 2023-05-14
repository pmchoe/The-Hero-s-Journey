// bad guy, aka "Enemy" prefab
class BadGuy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
    }

    update(moveSpeedLower, moveSpeedUpper) {
        // moves enemy to the left
        this.x -= Phaser.Math.Between(moveSpeedLower, moveSpeedUpper);
    }
}