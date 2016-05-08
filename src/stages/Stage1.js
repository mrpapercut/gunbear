'use strict';

import assign from 'object-assign';

import Default from '../Default';
import Controls from '../Controls';
import Player from '../components/Player';
import Ground from '../components/Ground';
import Platform from '../components/Platform';

import StageConfig from '../configs/Stage1';

class Stage1 extends Default {
	constructor(Game) {
		super(Game);
	}

	preload() {
		this.Game.load.spritesheet('bear', 'assets/sprites/bearsprite.png', 108, 96);
		this.Game.load.spritesheet('platform', 'assets/sprites/platform.png', 32, 32);

		this.Game.load.image('ground', 'assets/sprites/ground.png');
		this.Game.load.image('bullet', 'assets/sprites/bullet.png');
		this.Game.load.image('background', 'assets/images/forest_bg.png');
	}

	create() {
		this.background = this.Game.add.tileSprite(0, -360, StageConfig.width, 1080, 'background');
		this.background.alpha = 0.75;

		this.ground = new Ground(this.Game);
		this.platforms = StageConfig.platforms.map(p => new Platform(this.Game, assign(p, {key: 'platform'})));

		this.player = new Player(this.Game);

		this.Game.world.setBounds(0, 0, StageConfig.width, StageConfig.height);
		this.Game.camera.follow(this.player);
	}

	update() {
		this.Game.physics.arcade.collide([this.ground].concat(this.platforms), this.player);
	}
};

export default Stage1;
