'use strict';

import GameConfig from '../configs/GameConfig';
import Enemies from '../configs/Enemies';

class Enemy extends Phaser.Sprite {
	constructor(game, {x, y, key, group, hp}) {
		super(game, x, y, key);

		const {width, height, health, bounceX, bounceY, velocity} = Enemies[key];

		if (typeof group === 'undefined') { group = game.world; }

		game.physics.arcade.enable(this);

		this.anchor.x = 0.5;
		this.anchor.y = 0.5;
		this.scale.setTo(-1, 1);

		this.body.enableBody = true;
		this.width = width;
		this.height = height;

		this.health = health;

		this.body.collideWorldBounds = true;

		this.body.bounce.x = bounceX;
		this.body.bounce.y = bounceY;
		this.body.velocity.x = velocity;
		this.body.gravity.y = GameConfig.gravity.main;

		group.add(this);
	}
};

export default Enemy;
