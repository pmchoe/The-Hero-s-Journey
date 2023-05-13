// Icons prefab
class Icons extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyW)) {
            this.scene.iconW.setAlpha(1);
            this.scene.iconA.setAlpha(0.4);
            this.scene.iconS.setAlpha(0.4);
            this.scene.iconD.setAlpha(0.4);
        } else if(Phaser.Input.Keyboard.JustDown(keyA)) {
            this.scene.iconW.setAlpha(0.4);
            this.scene.iconA.setAlpha(1);
            this.scene.iconS.setAlpha(0.4);
            this.scene.iconD.setAlpha(0.4);
        } else if(Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.iconW.setAlpha(0.4);
            this.scene.iconA.setAlpha(0.4);
            this.scene.iconS.setAlpha(1);
            this.scene.iconD.setAlpha(0.4);
        } else if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.scene.iconW.setAlpha(0.4);
            this.scene.iconA.setAlpha(0.4);
            this.scene.iconS.setAlpha(0.4);
            this.scene.iconD.setAlpha(1);
        }
    }    
}