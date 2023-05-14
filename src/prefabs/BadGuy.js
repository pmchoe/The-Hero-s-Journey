// bad guy, aka "Enemy" prefab
class BadGuy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);

        this.moveSpeed = 7;             // enemy movement speed
        this.spawnTimer = 0;            // time since last spawn
        this.spawnRate = 5000;          // rate enemy spawns
        this.spawnRateIncrement = 100;  // how much to decrease the spawn rate by
        this.moveSpeedIncrement = .25;  // how much to increase the enemy move speed by
        
        // chooses one of the 4 enemy types (9 - 12)
        let enemyType = Phaser.Math.Between(9, 12);
        this.setTexture('textureAtlas', `textureAtlasSplit-${enemyType}.png`);
    
        this.x = 1280;
    }

    update(time, delta) {
        // moves enemy to the left
        this.x -= this.moveSpeed;

        // increases movement speed
        this.moveSpeed += delta / 1000;

        // spawns enemy at the spawn rate interval
        this.spawnTimer -= delta;
        if (this.spawnTimer <= 0) {
            // reduces the spawn rate by the specified decrement
            // every time an enemy is spawned
            this.spawnRate -= this.spawnRateDecrement;
            // increases the enemy move speed after every enemy spawn
            this.moveSpeed += this.moveSpeedIncrement;
            // updates enemy spawn timer to spawn rate
            this.spawnTimer = this.spawnRate;
            // spawn another enemy
            this.spawnEnemy();
        }
    }

    spawnEnemy() {
        // spawns one of the 4 enemies and adds it to enemy group
        let enemy = new BadGuy(this, 1280, 650, 'textureAtlas', `textureAtlasSplit-${Phaser.Math.Between(9, 12)}.png`).setOrigin(0, 0.5);
        this.enemies.add(enemy);
    }
}