import Phaser from '../lib/phaser.js';
import Bullet from '../prefabs/Bullet.js';

const RUN_SPEED = 100;
const JUMP_SPEED = 220;
const GRAVITY = 300;
const MAX_HEALTH = 100;
const EACH_DAMAGE_TAKE = 25;


export default class Soldier extends Phaser.Physics.Arcade.Sprite {
    health
    healthBar
    healthBarBorder
    shadow
    canShoot
    bullets
    isOnPlatform

    color

    fireKey
    colorHealthBar

    constructor(scene, x, y, key) {
        super(scene, x, y, key != null ? key : 'black-idle0');
        // Scale up
        this.setOrigin(0.5, 0.5).setScale(2);
        // Shadow under the player's feet
        this.shadow = scene.add.image(x - this.width * 0.05, y + this.height * 0.65, 'shadow');
        this.shadow.setDepth(5);
        
        // Add player to scene
        scene.physics.add.existing(this);
        scene.add.layer(this);

        // Resize the body, set z-coordinates and set gravity
        this.setOffset(15, 8).setSize(15, 30, false);
        this.setDepth(10);
        this.setGravityY(GRAVITY);
        
        // Init the able to shoot is true
        this.canShoot = true;

        // Health init = 100
        this.health = 100;

        // Bullet
        this.bullets = scene.physics.add.group({
            classType: Bullet
        });

        this.fireKey = 'J';
		this.leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
		this.rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
		this.upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
		this.downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.colorHealthBar = '0x3deb34';
    }

    setColor(_color) {
        this.color = _color;
        return this;
    }

    _create() {
        // Health bar
        this.healthBar = this.scene.add.graphics({
            x: this.x - this.width * 0.4, 
            y: this.y - this.height
        });
        this.healthBar.fillStyle(this.colorHealthBar, 1);
        this.healthBar.fillRect(0, 0, this.health/MAX_HEALTH * 40, 4);
        this.healthBarBorder = this.scene.add.graphics({
            x: this.x - this.width * 0.4, 
            y: this.y - this.height
        });
        this.healthBarBorder.lineStyle(2, '0x3a3c40', 1);
        this.healthBarBorder.strokeRect(0, 0, 40, 4);

        // Fire
        this.scene.input.keyboard.addListener('keydown-' + this.fireKey, () => {
            if (this.health <= 0) return;
            if (!this.canShoot) return;
            this.canShoot = false;

            const direct = this.flipX ? -1 : 1;
            let _x, _y;
            if (this.anims.currentAnim.key == this.color + '-crouch') {
                _x = this.x + direct * this.width * 0.67;
                _y = this.y + this.height * 0.05;
            }
            else {
                _x = this.x + direct * this.width * 0.67;
                _y = this.y - this.height * 0.15;
            }

            const muzzleFlash = this.scene.add.image(_x, _y, 'muzzle-flash').setOrigin(0, 0.5).setScale(2 * direct, 2);
            this.bullets.create(_x, _y, 'bullet').setDirect(direct);

            // Destroy muzzle flash and set up to fire
            setTimeout(() => {
                this.canShoot = true;
            }, 250);
            setTimeout(() => {
                muzzleFlash.destroy();
            }, 50);
        });
    }

    _update() {
        // Shadow and HP bar follow the player
        this.shadow.setPosition(this.x - this.width * 0.05, this.y + this.height * 0.65);
        this.healthBar.setPosition(this.x - this.width * 0.4, this.y - this.height);
        this.healthBarBorder.setPosition(this.x - this.width * 0.4, this.y - this.height);

        if (this.health <= 0) return;

        // If stand on the platform, show shadow 
        if (this.isOnPlatform) {
            this.shadow.setVisible(true);
        }     
        // Else, animation jump and fall
        else {
            this.shadow.setVisible(false);
            if (this.body.velocity.y < 0) {
                this.anims.play(this.color + '-jump', true);
            }
            else if (this.body.velocity.y > 0) {
                this.anims.play(this.color + '-fall', true);
            }
        }

        if (this.isOnPlatform && this.upKey.isDown) {
            this.setIsOnPlatform(false);
            this.body.setVelocityY(- JUMP_SPEED);
            return;
        }
        if (this.isOnPlatform && this.downKey.isDown) {
            if (this.anims.currentFrame.isLast && this.anims.currentAnim.key == this.color + '-crouch') {
                this.anims.pause();
            }            
            else {
                this.anims.play(this.color + '-crouch', true);
            }
            this.body.setVelocityX(0);
            return;
        }

        // Horizontal control: move left, move right
        if (!this.leftKey.isDown && !this.rightKey.isDown && !this.downKey.isDown) {
            // If stand on the platform, then play animation idle
            if (this.isOnPlatform) this.anims.play(this.color + '-idle', true);
            this.body.setVelocityX(0);
        }

        else if (this.leftKey.isDown) {
            // If stand on the platform, then play animation run
            if (this.isOnPlatform) this.anims.play(this.color + '-run', true);
            this.setFlipX(true);
            if (!this.downKey.isDown) this.body.setVelocityX(- RUN_SPEED);
        }
        else if (this.rightKey.isDown) {
            // If stand on the platform, then play animation run
            if (this.isOnPlatform) this.anims.play(this.color + '-run', true);
            this.setFlipX(false);
            if (!this.downKey.isDown) this.body.setVelocityX(RUN_SPEED);
        }
        
        // Fire

    }

    takeDamage() {
        if (this.health <= 0) return;

        this.health -= EACH_DAMAGE_TAKE;
        if (this.health <= 0) {
            this.setVelocityX(0);
            this.anims.play({key: this.color + '-death', repeat: 0});
            this.healthBar.destroy();
            this.healthBarBorder.destroy();
            this.body.setOffset(15, 28).setSize(15, 10, false);
            this.shadow.destroy();
            setTimeout(() => {
                this.destroy();
            }, 1500);
        }
        this.healthBar.clear();
        this.healthBar.fillStyle(this.colorHealthBar, 1);
        this.healthBar.fillRect(0, 0, this.health/MAX_HEALTH * 40, 4);
    }

    setIsOnPlatform(_isOnPlatform) {
        this.isOnPlatform = _isOnPlatform;
    }
}