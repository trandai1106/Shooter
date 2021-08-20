import Phaser from '../lib/phaser.js';

const BULLET_SPEED = 200;

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet');
        this.setOrigin(0, 0.5).setScale(2, 2);
        this.setDepth(6);

        scene.physics.add.existing(this);
        scene.add.layer(this);
        
        this.setDirect(1);
    }

    setDirect(direct) {
        this.setFlipX(direct == 1 ? false : true);
        this.setVelocityX(direct * BULLET_SPEED);
    }
}
