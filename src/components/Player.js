'use strict';

import Controls from '../Controls';

import Bullet from './Bullet';

import GameConfig from '../configs/GameConfig';

class Player extends Phaser.Sprite {
	constructor(game) {
		super(game, 16, game.world.height - 80, 'bear');

		// Make physical
		game.physics.arcade.enable(this);
		this.body.enableBody = true;

		this.body.collideWorldBounds = true;
		this.body.checkCollision.up = false;
		this.body.checkCollision.left = true;
		this.body.checkCollision.right = true;

		this.body.bounce.y = GameConfig.bounce.main;
		this.body.gravity.y = GameConfig.gravity.main;

		// Set scale & position
		const {scale} = GameConfig;
		this.scale.setTo(scale.x, scale.y);
		this.anchor.x = 0.5;
		this.anchor.y = 0.5;

		this.facingRight = true;
		this.animations.add('walk', [0, 2], 10, true);

		// Movement controls
		this.cursors = this.game.input.keyboard.createCursorKeys();

		// Other controls
		this.bullets = [];
		new Controls(this.game, {
			spacebar: () => this.body.touching.down ? this.jump() : null,
			control: () => this.bullets.push(new Bullet(game, {
				x: this.body.x + (this.facingRight ? this.body.width - 16 : 16),
				y: this.body.y,
				key: 'bullet',
				facingRight: this.facingRight
			})),
			left: () => this.lookLeft(),
			right: () => this.lookRight()
		});

		game.world.add(this);
	}

	jump() {
		if (this.cursors.down.isDown) {
			// Check if not standing on the ground
			if (this.body.y < this.game.world.height - this.body.height - 32) {
				this.body.checkCollision.down = false;
				window.setTimeout(() => this.body.checkCollision.down = true, 100);
			}
		} else this.body.velocity.y = -450;
	}

	lookLeft() {
		this.scale.x = -GameConfig.scale.x;
		this.facingRight = false;
	}

	lookRight() {
		this.scale.x = GameConfig.scale.x;
		this.facingRight = true;
	}

	dies() {
		// You die
	}

	update() {
		this.body.velocity.x = 0;

		if (this.cursors.right.isDown) this.lookRight(), this.body.velocity.x += 300, this.animations.play('walk');
		else if (this.cursors.left.isDown) this.lookLeft(), this.body.velocity.x -= 300, this.animations.play('walk');
		else this.frame = 0, this.animations.stop();

		if (!this.body.touching.down) this.frame = 1;
	}
};

export default Player;
