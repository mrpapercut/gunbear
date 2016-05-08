'use strict';

import GameConfig from '../configs/GameConfig';

class Bullet extends Phaser.Sprite {
	constructor(game, {x, y, key, group, facingRight}) {
		super(game, x, y + 22, key);

		if (typeof group === 'undefined') { group = game.world; }

		game.physics.arcade.enable(this);

		this.anchor.x = 0.5;
		this.anchor.y = 0.5;
		this.scale.setTo(facingRight ? 1 : -1, 1);

		this.body.customSeparateX = true;
		this.body.customSeparateY = true;
		this.body.allowGravity = false;
		this.body.immovable = true;

		this.direction = facingRight ? 'right' : 'left';

		this.checkWorldBounds = true;
        this.outOfBoundsKill = true;

		this.playerLocked = false;

		group.add(this);
	}

	update() {
		this.body.x += this.direction === 'right' ? 10 : -10;
	}
};

export default Bullet;
