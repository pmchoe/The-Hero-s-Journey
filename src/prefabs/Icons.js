// Icons prefab
class Icons extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
    }

    update() {
        // highlights icon with W, A, S, D presses
        if(Phaser.Input.Keyboard.JustDown(keyW)) {
            // make pink icon 100% opaque
            /* const image = this.add.atlas(this, above players x, above players y, 'textureAtlas', 'textureAtlasSplit-5.png').setAlppha(0.5);
            */
            // make all other icons 35% opaque
        } else if(Phaser.Input.Keyboard.JustDown(keyA)) {
            // make orange tri 100% opaque
            // make all other icons 35% opaque
        } else if(Phaser.Input.Keyboard.JustDown(keyS)) {
            // make purp square 100% opaque
            // make all other icons 35% opaque
        } else if(Phaser.Input.Keyboard.JustDown(keyW)) {
            // make yellow poly 100% opaque
            // make all other icons 35% opaque
        }
    }
}