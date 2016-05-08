'use strict';

import GameConfig from '../configs/GameConfig';
import Enemies from '../configs/Enemies';

class Enemy extends Phaser.Sprite {
	constructor(game, {x, y, key, group, hp}) {
		super(game, x, y, key);

		const enemyConfig = Enemies[key];

		if (typeof group === 'undefined') { group = game.world; }

		game.physics.arcade.enable(this);

		this.anchor.x = 0.5;
		this.anchor.y = 0.5;
		this.scale.setTo(-1, 1);

		this.hp = enemyConfig.hp;

		this.body.enableBody = true;
		this.width = enemyConfig.width;
		this.height = enemyConfig.height;

		this.body.collideWorldBounds = true;

		this.body.bounce.x = 0;
		this.body.bounce.y = 0;
		this.body.gravity.y = GameConfig.gravity.main;
		this.body.velocity.x = 80;

		group.add(this);
	}

	update() {
	}
};

export default Enemy;
