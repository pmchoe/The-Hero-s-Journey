// bad guy, aka "Enemy" prefab
class BadGuy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        
        this.moveSpeed = 7;         // initial enemy speed
        this.spawnTimer = 0;        // timer until next spawn
        this.spawnRate = 5000;      // starting spawn rate of 5 seconds
    }

    update(time, delta) {
        // moves enemy to the left
        this.x -= this.moveSpeed;

        // increases movement speed
        this.moveSpeed += delta / 1000;

        // spawn enemy at the spawn rate interval
        this.spawnTimer -= delta;
        if (this.spawnTimer <= 0) {
            // reduce the spawn rate by 100ms every time an enemy is spawned
            this.spawnRate -= 100;

            // increase the enemy move speed after every enemy spawn
            this.moveSpeed += 3;

            // updates enemy spawn timer to spawn rate
            this.spawnTimer = this.spawnRate;
        }
    }
}