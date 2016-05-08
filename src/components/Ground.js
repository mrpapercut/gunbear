'use strict';

import StageConfig from '../configs/Stage1';

class Ground extends Phaser.TileSprite {
	constructor(game) {
		super(game, 0, game.world.height - 32, StageConfig.width, StageConfig.height, StageConfig.ground.key);

		game.physics.arcade.enable(this);
		this.body.enableBody = true;
		this.body.immovable = true;

		game.world.add(this);
	}
};

export default Ground;
