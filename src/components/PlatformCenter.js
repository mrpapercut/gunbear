'use strict';

class PlatformCenter extends Phaser.TileSprite {
	constructor(game, {x, y, width, height, key}) {
		super(game, x, y, width, height, key);

		this.frame = 1;

		game.physics.arcade.enable(this);

		this.body.enableBody = true;
		this.body.allowGravity = false;
		this.body.immovable = true;
	}
};

export default PlatformCenter;
