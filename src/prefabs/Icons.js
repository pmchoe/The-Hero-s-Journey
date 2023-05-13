// Icons prefab
class Icons extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
    }

    update() {
        // highlights icon with W, A, S, D presses
        // also de-highlights any other button
        if(Phaser.Input.Keyboard.JustDown(keyW)) {
            this.setAlpha(1);
        } else if(Phaser.Input.Keyboard.JustDown(keyA)) {
            this.setAlpha(1);
        } else if(Phaser.Input.Keyboard.JustDown(keyS)) {
            this.setAlpha(1);
        } else if(Phaser.Input.Keyboard.JustDown(keyW)) {
            this.setAlpha(1);
        } else {
            this.setAlpha(0.3);
        }
    }
}