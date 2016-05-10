'use strict';

class PlatformSide extends Phaser.Sprite {
	constructor(game, {x, y, key, group, frame}) {
		super(game, x, y, key);

		this.frame = frame;

		game.physics.arcade.enable(this);

		this.body.enableBody = true;
		this.body.allowGravity = false;
		this.body.immovable = true;

		['left', 'right', 'bottom'].forEach(d => this.body.checkCollision[d] = false);
	}
};

export default PlatformSide;
