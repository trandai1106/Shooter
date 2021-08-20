import Phaser from '../lib/phaser.js';
import Soldier from './Soldier.js';

export default class Player extends Soldier {
    constructor(scene, x, y, key) {
        super(scene, x, y, key)

        this.setColor('blue'); // default color
        this.fireKey = 'H';
		this.leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
		this.rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
		this.upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
		this.downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        this.colorHealthBar = '0x3d34eb';
        
        this._create();
    }
}