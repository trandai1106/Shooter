import Phaser from '../lib/phaser.js';
import Soldier from './Soldier.js';

export default class Enemy extends Soldier {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);

        this.setColor('black'); // default color
        this.fireKey = 'F';
		this.leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.colorHealthBar = '0xeb3d34';

        this._create();
    }
}