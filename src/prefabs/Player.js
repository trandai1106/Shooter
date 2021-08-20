import Phaser from '../lib/phaser.js';
import Soldier from './Soldier.js';

export default class Player extends Soldier {
    constructor(scene, x, y, key) {
        super(scene, x, y, key)

        this.setColor('black'); // default color
        this.fireKey = 'J';
		this.leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
		this.rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
		this.upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
		this.downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.colorHealthBar = '0x3deb34';
        
        this._create();
    }
}