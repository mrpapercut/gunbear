'use strict';

class PlatformCenter extends Phaser.TileSprite {
	constructor(game, {x, y, width, height, key, frame}) {
		super(game, x, y, width, height, key);

		this.frame = frame;

		game.physics.arcade.enable(this);

		this.body.enableBody = true;
		this.body.allowGravity = false;
		this.body.immovable = true;

		['left', 'right', 'bottom'].forEach(d => this.body.checkCollision[d] = false);
	}
};

export default PlatformCenter;
