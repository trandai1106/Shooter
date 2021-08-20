import Phaser from '../lib/phaser.js';

export default class Platform extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y) {
        super(scene, x, y, 'platform-big');
        this.setOrigin(0.5).setScale(2, 2);

        scene.physics.add.existing(this);
        scene.add.layer(this);

        this.setSize(this.width, Math.round(this.height * 0.3));
    }
}
