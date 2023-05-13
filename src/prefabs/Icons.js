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
            iconW.setAlpha(1);
            iconA.setAlpha(0.3);
            iconS.setAlpha(0.3);
            iconD.setAlpha(0.3);
        } else if(Phaser.Input.Keyboard.JustDown(keyA)) {
            iconW.setAlpha(0.3);
            iconA.setAlpha(1);
            iconS.setAlpha(0.3);
            iconD.setAlpha(0.3);
        } else if(Phaser.Input.Keyboard.JustDown(keyS)) {
            iconW.setAlpha(0.3);
            iconA.setAlpha(0.3);
            iconS.setAlpha(1);
            iconD.setAlpha(0.3);
        } else if(Phaser.Input.Keyboard.JustDown(keyW)) {
            iconW.setAlpha(0.3);
            iconA.setAlpha(0.3);
            iconS.setAlpha(0.3);
            iconD.setAlpha(1);
        }
    }
}