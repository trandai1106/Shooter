import Phaser from '../lib/phaser.js';

export default class Preload extends Phaser.Scene {
    title
    progressBar
    processBarBorder
    progressText

    constructor() {
        super("preload");
    }

    preload() {
        // Title
        const style = { color: '#E7ECEF', fontSize: 50, fontFamily: 'monospace' };
        this.title = this.add.text(600, 140, 'Shoot', style)
            .setOrigin(0.5);
        this.progressText = this.add.text(600, 240, 'Loading 0%', style)
            .setOrigin(0.5);    
        
        // Loading bar
        this.progressBar = this.add.graphics({x: 300, y: 340});
        this.processBarBorder = this.add.graphics({x: 300, y: 340});
        this.processBarBorder.lineStyle(4, '0x000000', 1);
        this.processBarBorder.strokeRect(0, 0, 600, 30);

        // Load the background image

        // Load the platform

        // Load objects

        // Load the player sprite
        this.load.image('black-idle0', '/assets/sprites/character/black/idle0.png');
        this.load.image('black-idle1', '/assets/sprites/character/black/idle1.png');
        this.load.image('black-idle2', '/assets/sprites/character/black/idle2.png');
        this.load.image('black-idle3', '/assets/sprites/character/black/idle3.png');
        this.load.image('black-idle4', '/assets/sprites/character/black/idle4.png');
        this.load.image('black-run0', '/assets/sprites/character/black/run0.png');
        this.load.image('black-run1', '/assets/sprites/character/black/run1.png');
        this.load.image('black-run2', '/assets/sprites/character/black/run2.png');
        this.load.image('black-run3', '/assets/sprites/character/black/run3.png');
        this.load.image('black-run4', '/assets/sprites/character/black/run4.png');
        this.load.image('black-run5', '/assets/sprites/character/black/run5.png');
        this.load.image('black-jump0', '/assets/sprites/character/black/jump0.png');
        this.load.image('black-jump1', '/assets/sprites/character/black/jump1.png');
        this.load.image('black-crouch0', '/assets/sprites/character/black/crouch0.png');
        this.load.image('black-crouch1', '/assets/sprites/character/black/crouch1.png');
        this.load.image('black-crouch2', '/assets/sprites/character/black/crouch2.png');
        this.load.image('black-death0', '/assets/sprites/character/black/death0.png');
        this.load.image('black-death1', '/assets/sprites/character/black/death1.png');
        this.load.image('black-death2', '/assets/sprites/character/black/death2.png');
        this.load.image('black-death3', '/assets/sprites/character/black/death3.png');
        this.load.image('black-death4', '/assets/sprites/character/black/death4.png');
        this.load.image('black-death5', '/assets/sprites/character/black/death5.png');
        this.load.image('black-death6', '/assets/sprites/character/black/death6.png');
        this.load.image('black-death7', '/assets/sprites/character/black/death7.png');
        
        this.load.image('red-idle0', '/assets/sprites/character/red/idle0.png');
        this.load.image('red-idle1', '/assets/sprites/character/red/idle1.png');
        this.load.image('red-idle2', '/assets/sprites/character/red/idle2.png');
        this.load.image('red-idle3', '/assets/sprites/character/red/idle3.png');
        this.load.image('red-idle4', '/assets/sprites/character/red/idle4.png');
        this.load.image('red-run0', '/assets/sprites/character/red/run0.png');
        this.load.image('red-run1', '/assets/sprites/character/red/run1.png');
        this.load.image('red-run2', '/assets/sprites/character/red/run2.png');
        this.load.image('red-run3', '/assets/sprites/character/red/run3.png');
        this.load.image('red-run4', '/assets/sprites/character/red/run4.png');
        this.load.image('red-run5', '/assets/sprites/character/red/run5.png');
        this.load.image('red-jump0', '/assets/sprites/character/red/jump0.png');
        this.load.image('red-jump1', '/assets/sprites/character/red/jump1.png');
        this.load.image('red-crouch0', '/assets/sprites/character/red/crouch0.png');
        this.load.image('red-crouch1', '/assets/sprites/character/red/crouch1.png');
        this.load.image('red-crouch2', '/assets/sprites/character/red/crouch2.png');
        this.load.image('red-death0', '/assets/sprites/character/red/death0.png');
        this.load.image('red-death1', '/assets/sprites/character/red/death1.png');
        this.load.image('red-death2', '/assets/sprites/character/red/death2.png');
        this.load.image('red-death3', '/assets/sprites/character/red/death3.png');
        this.load.image('red-death4', '/assets/sprites/character/red/death4.png');
        this.load.image('red-death5', '/assets/sprites/character/red/death5.png');
        this.load.image('red-death6', '/assets/sprites/character/red/death6.png');
        this.load.image('red-death7', '/assets/sprites/character/red/death7.png');
        
        this.load.image('blue-idle0', '/assets/sprites/character/blue/idle0.png');
        this.load.image('blue-idle1', '/assets/sprites/character/blue/idle1.png');
        this.load.image('blue-idle2', '/assets/sprites/character/blue/idle2.png');
        this.load.image('blue-idle3', '/assets/sprites/character/blue/idle3.png');
        this.load.image('blue-idle4', '/assets/sprites/character/blue/idle4.png');
        this.load.image('blue-run0', '/assets/sprites/character/blue/run0.png');
        this.load.image('blue-run1', '/assets/sprites/character/blue/run1.png');
        this.load.image('blue-run2', '/assets/sprites/character/blue/run2.png');
        this.load.image('blue-run3', '/assets/sprites/character/blue/run3.png');
        this.load.image('blue-run4', '/assets/sprites/character/blue/run4.png');
        this.load.image('blue-run5', '/assets/sprites/character/blue/run5.png');
        this.load.image('blue-jump0', '/assets/sprites/character/blue/jump0.png');
        this.load.image('blue-jump1', '/assets/sprites/character/blue/jump1.png');
        this.load.image('blue-crouch0', '/assets/sprites/character/blue/crouch0.png');
        this.load.image('blue-crouch1', '/assets/sprites/character/blue/crouch1.png');
        this.load.image('blue-crouch2', '/assets/sprites/character/blue/crouch2.png');
        this.load.image('blue-death0', '/assets/sprites/character/blue/death0.png');
        this.load.image('blue-death1', '/assets/sprites/character/blue/death1.png');
        this.load.image('blue-death2', '/assets/sprites/character/blue/death2.png');
        this.load.image('blue-death3', '/assets/sprites/character/blue/death3.png');
        this.load.image('blue-death4', '/assets/sprites/character/blue/death4.png');
        this.load.image('blue-death5', '/assets/sprites/character/blue/death5.png');
        this.load.image('blue-death6', '/assets/sprites/character/blue/death6.png');
        this.load.image('blue-death7', '/assets/sprites/character/blue/death7.png');

        // Shadow of player
        this.load.image('shadow', '/assets/sprites/extra/Shadow.png');

        // Platform
        this.load.image('platform-big', '/assets/sprites/extra/Platform.png');
        this.load.image('platform-thin', '/assets/sprites/extra/Platform_Thin.png');

        // Bullet
        this.load.image('bullet', '/assets/sprites/extra/SpongeBullet.png');
        this.load.image('bullet-stream', '/assets/sprites/extra/BulletStream.png');
        this.load.image('muzzle-flash', '/assets/sprites/extra/MuzzleFlash.png');
        
        // Load GUI
        this.load.image('resume-button-click', 'assets/sprites/gui/Resume_click.png');
        
        // Sound effect

        // Loading statement
        this.load.on('progress', (val) => {
            // Text
            this.progressText.text = 'Loading ' + (Math.round(val * 100)) + '%';
            // Bar
            this.progressBar.clear();
            this.progressBar.fillStyle('0xE7ECEF', 1);
            this.progressBar.fillRect(0, 0, val * 600, 30);
        }, this);
    }

    create() {
        
        // Create animations black
        this.anims.create({
            key: 'black-idle', 
            frames: [
                { key: 'black-idle0' },
                { key: 'black-idle1' },
                { key: 'black-idle2' },
                { key: 'black-idle3' },
                { key: 'black-idle4' }
            ],
            repeat: -1,
            frameRate: 8,
        });
        this.anims.create({
            key: 'black-run', 
            frames: [
                { key: 'black-run0' },
                { key: 'black-run1' },
                { key: 'black-run2' },
                { key: 'black-run3' },
                { key: 'black-run4' },
                { key: 'black-run5' },
            ],
            repeat: -1,
            frameRate: 6,
        });
        this.anims.create({
            key: 'black-jump', 
            frames: [
                { key: 'black-jump0' }
            ],
            repeat: -1,
            frameRate: 2,
        });
        this.anims.create({
            key: 'black-fall', 
            frames: [
                { key: 'black-jump1' }
            ],
            repeat: -1,
            frameRate: 2,
        });
        this.anims.create({
            key: 'black-crouch', 
            frames: [
                { key: 'black-crouch0' },
                { key: 'black-crouch1' },
                { key: 'black-crouch2' }
            ],
            repeat: -1,
            frameRate: 16,
        });
        this.anims.create({
            key: 'black-death', 
            frames: [
                { key: 'black-death0' },
                { key: 'black-death1' },
                { key: 'black-death2' },
                { key: 'black-death3' },
                { key: 'black-death4' },
                { key: 'black-death5' },
                { key: 'black-death6' },
                { key: 'black-death7' }
            ],
            repeat: -1,
            frameRate: 8,
        });

        // Create animations red
        this.anims.create({
            key: 'red-idle', 
            frames: [
                { key: 'red-idle0' },
                { key: 'red-idle1' },
                { key: 'red-idle2' },
                { key: 'red-idle3' },
                { key: 'red-idle4' }
            ],
            repeat: -1,
            frameRate: 8,
        });
        this.anims.create({
            key: 'red-run', 
            frames: [
                { key: 'red-run0' },
                { key: 'red-run1' },
                { key: 'red-run2' },
                { key: 'red-run3' },
                { key: 'red-run4' },
                { key: 'red-run5' },
            ],
            repeat: -1,
            frameRate: 6,
        });
        this.anims.create({
            key: 'red-jump', 
            frames: [
                { key: 'red-jump0' }
            ],
            repeat: -1,
            frameRate: 2,
        });
        this.anims.create({
            key: 'red-fall', 
            frames: [
                { key: 'red-jump1' }
            ],
            repeat: -1,
            frameRate: 2,
        });
        this.anims.create({
            key: 'red-crouch', 
            frames: [
                { key: 'red-crouch0' },
                { key: 'red-crouch1' },
                { key: 'red-crouch2' }
            ],
            repeat: -1,
            frameRate: 16,
        });
        this.anims.create({
            key: 'red-death', 
            frames: [
                { key: 'red-death0' },
                { key: 'red-death1' },
                { key: 'red-death2' },
                { key: 'red-death3' },
                { key: 'red-death4' },
                { key: 'red-death5' },
                { key: 'red-death6' },
                { key: 'red-death7' }
            ],
            repeat: -1,
            frameRate: 8,
        });

        // Create animations blue
        this.anims.create({
            key: 'blue-idle', 
            frames: [
                { key: 'blue-idle0' },
                { key: 'blue-idle1' },
                { key: 'blue-idle2' },
                { key: 'blue-idle3' },
                { key: 'blue-idle4' }
            ],
            repeat: -1,
            frameRate: 8,
        });
        this.anims.create({
            key: 'blue-run', 
            frames: [
                { key: 'blue-run0' },
                { key: 'blue-run1' },
                { key: 'blue-run2' },
                { key: 'blue-run3' },
                { key: 'blue-run4' },
                { key: 'blue-run5' },
            ],
            repeat: -1,
            frameRate: 6,
        });
        this.anims.create({
            key: 'blue-jump', 
            frames: [
                { key: 'blue-jump0' }
            ],
            repeat: -1,
            frameRate: 2,
        });
        this.anims.create({
            key: 'blue-fall', 
            frames: [
                { key: 'blue-jump1' }
            ],
            repeat: -1,
            frameRate: 2,
        });
        this.anims.create({
            key: 'blue-crouch', 
            frames: [
                { key: 'blue-crouch0' },
                { key: 'blue-crouch1' },
                { key: 'blue-crouch2' }
            ],
            repeat: -1,
            frameRate: 16,
        });
        this.anims.create({
            key: 'blue-death', 
            frames: [
                { key: 'blue-death0' },
                { key: 'blue-death1' },
                { key: 'blue-death2' },
                { key: 'blue-death3' },
                { key: 'blue-death4' },
                { key: 'blue-death5' },
                { key: 'blue-death6' },
                { key: 'blue-death7' }
            ],
            repeat: -1,
            frameRate: 8,
        });

        // Delay and change scene
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.scene.start('play');
            },
            callbackScope: this
        });
    }
}