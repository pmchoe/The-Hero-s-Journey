class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        this.add.text(20, 20, "The Hero's Journey")
        this.scene.start("playScene");
    }
}