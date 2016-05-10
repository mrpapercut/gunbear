'use strict';

import PlatformSide from './PlatformSide';
import PlatformCenter from './PlatformCenter';

import GameConfig from '../configs/GameConfig';

class Platform extends Phaser.Group {
	constructor(game, {x, y, width, height, key, group}) {
		super(game);

		const {gridSize} = GameConfig;
		[x, y, width, height] = [x, y, width, height].map(v => v * gridSize);

		const centerWidth = width - (gridSize * 2);

		game.physics.arcade.enable(this);
		this.enableBody = true;

		this.add(new PlatformSide(game, {
			x: x,
			y,
			key,
			frame: 0
		}));
		if (centerWidth >= gridSize) this.add(new PlatformCenter(game, {
			x: x + gridSize,
			y,
			width: centerWidth,
			height,
			key,
			frame: 1
		}));
		this.add(new PlatformSide(game, {
			x: x + width - gridSize,
			y,
			key,
			frame: 2
		}));
	}
};

export default Platform;
