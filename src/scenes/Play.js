import Phaser from '../lib/phaser.js';
import Player from '../prefabs/Player.js';
import Enemy from '../prefabs/Enemy.js';
import Ally from '../prefabs/Ally.js';
import Platform from '../prefabs/Platform.js';

export default class Play extends Phaser.Scene {
    player
    playerState
    player_idle
    player_run
    player_jump
    player_crouch
    player_death
    platforms
    enemy
    ally

    constructor() {
        super("play");
    }
    
    init() {
        this.playerState = 0;
        this.platforms = this.physics.add.group({
            classType: Platform
        });
    }

    create() {
        // Platform
        for (var i = 0; i < 40; ++i) {
            this.platforms.create(i * 64, 176, 'platform-big').setImmovable(true).setFrictionX(0);
        }
        
        // Create player
		/** @type {Player} */
        this.player = new Player(this, 600, 100).setFrictionX(0);

        this.ally = new Ally(this, 500, 100).setFrictionX(0);

        this.enemy = new Enemy(this, 200, 100).setColor('red');

        // Collision detection
        // Player with platform
        this.physics.add.collider(
            this.player, 
            this.platforms,
            (player, bullet) => {
                player.setIsOnPlatform(true);
            }, 
            undefined, 
            this
        );
        // Enemy with platform
        this.physics.add.collider(
            this.enemy, 
            this.platforms,
            (enemy, bullet) => {
                enemy.setIsOnPlatform(true);
            }, 
            undefined, 
            this
        );
        // Ally with platform
        this.physics.add.collider(
            this.ally, 
            this.platforms,
            (player, bullet) => {
                player.setIsOnPlatform(true);
            }, 
            undefined, 
            this
        );
        
        // Enemy with player's bullet
        this.physics.add.overlap(
            this.enemy,
            this.player.bullets, (enemy, bullet) => {
                enemy.takeDamage();
                bullet.destroy();
            }, 
            undefined, 
            this
        );
        // Enemy with ally's bullet
        this.physics.add.overlap(
            this.enemy,
            this.ally.bullets, (enemy, bullet) => {
                enemy.takeDamage();
                bullet.destroy();
            }, 
            undefined, 
            this
        );
        // Player with enemy's bullet
        this.physics.add.overlap(
            this.player,
            this.enemy.bullets, (player, bullet) => {
                player.takeDamage();
                bullet.destroy();
            }, 
            undefined, 
            this
        );
        // Ally with enemy's bullet
        this.physics.add.overlap(
            this.ally,
            this.enemy.bullets, (player, bullet) => {
                player.takeDamage();
                bullet.destroy();
            }, 
            undefined, 
            this
        );

        this.player_idle = this.physics.add.sprite(400, 290, 'black-idle0').setOrigin(0.5).setScale(2);
        this.player_idle.setOffset(15, 8).setSize(15, 30, false);

        this.player_run = this.physics.add.sprite(600, 290, 'black-idle0').setOrigin(0.5).setScale(2);
        this.player_run.body.setOffset(15, 8).setSize(15, 30, false);

        this.player_jump = this.physics.add.sprite(800, 290, 'black-idle0').setOrigin(0.5).setScale(2);
        this.player_jump.body.setOffset(15, 8).setSize(15, 30, false);

        this.player_crouch = this.physics.add.sprite(500, 420, 'black-idle0').setOrigin(0.5).setScale(2);
        this.player_crouch.body.setOffset(15, 8).setSize(15, 30, false);

        this.player_death = this.physics.add.sprite(700, 420, 'black-idle0').setOrigin(0.5).setScale(2);
        this.player_death.body.setOffset(15, 8).setSize(15, 30, false);


        // Play animations
        this.player_idle.anims.play('black-idle', true);
        this.player_run.anims.play('black-run', true);
        this.player_jump.anims.play('black-jump', true);
        this.player_crouch.anims.play('black-crouch', true);
        this.player_death.anims.play('black-death', true);
    }

    update() {
        this.player._update();
        this.enemy._update();
        this.ally._update();
    }
}