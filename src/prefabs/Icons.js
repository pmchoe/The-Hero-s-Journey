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
            this.iconW.setAlpha(1);
            this.iconA.setAlpha(0.3);
            this.iconS.setAlpha(0.3);
            this.iconD.setAlpha(0.3);
        } else if(Phaser.Input.Keyboard.JustDown(keyA)) {
            this.iconW.setAlpha(0.3);
            this.iconA.setAlpha(1);
            this.iconS.setAlpha(0.3);
            this.iconD.setAlpha(0.3);
        } else if(Phaser.Input.Keyboard.JustDown(keyS)) {
            this.iconW.setAlpha(0.3);
            this.iconA.setAlpha(0.3);
            this.iconS.setAlpha(1);
            this.iconD.setAlpha(0.3);
        } else if(Phaser.Input.Keyboard.JustDown(keyW)) {
            this.iconW.setAlpha(0.3);
            this.iconA.setAlpha(0.3);
            this.iconS.setAlpha(0.3);
            this.iconD.setAlpha(1);
        }
    }
}