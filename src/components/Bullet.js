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

		this.damage = 50;

		this.body.enableBody = true;

		this.direction = facingRight ? 'right' : 'left';

		this.checkWorldBounds = true;
        this.outOfBoundsKill = true;

		group.add(this);
	}

	update() {
		this.body.velocity.x = this.direction === 'right' ? 600 : -600;
	}
};

export default Bullet;
