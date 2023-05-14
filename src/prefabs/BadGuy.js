// bad guy, aka "Enemy" prefab
class BadGuy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        
        this.moveSpeed = 7;
        this.spawnTimer = 0;
        this.spawnRate = 5000;
        this.spawnRateIncrement = 100; // how much to decrease the spawn rate by
        this.moveSpeedIncrement = .25; // how much to increase the enemy move speed by
    }

    update(time, delta) {
        // moves enemy to the left
        this.x -= this.moveSpeed;

        // increases movement speed
        this.moveSpeed += delta / 1000;

        // spawn enemy at the spawn rate interval
        this.spawnTimer -= delta;
        if (this.spawnTimer <= 0) {
            // reduce the spawn rate by the specified increment every time an enemy is spawned
            this.spawnRate -= this.spawnRateIncrement;

            // increase the enemy move speed after every enemy spawn
            this.moveSpeed += this.moveSpeedIncrement;

            // updates enemy spawn timer to spawn rate
            this.spawnTimer = this.spawnRate;
        }
    }
}