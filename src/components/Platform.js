'use strict';

import PlatformSide from './PlatformSide';
import PlatformCenter from './PlatformCenter';

class Platform extends Phaser.Group {
	constructor(game, {x, y, width, height, key, group}) {
		super(game);

		const centerWidth = width - 64;

		game.physics.arcade.enable(this);
		this.enableBody = true;

		this.add(new PlatformSide(game, {x: x, y: y, key: key, frame: 0}));
		if (centerWidth >= 32) this.add(new PlatformCenter(game, {
			x: x + 32,
			y,
			width: centerWidth,
			height,
			key
		}));
		this.add(new PlatformSide(game, {x: x + width - 32, y: y, key: key, frame: 2}));
	}
};

export default Platform;
