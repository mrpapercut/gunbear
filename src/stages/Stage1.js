'use strict';

import assign from 'object-assign';

import Default from '../Default';
import Controls from '../Controls';
import Player from '../components/Player';
import Ground from '../components/Ground';
import Platform from '../components/Platform';
import Enemy from '../components/Enemy';

import StageConfig from '../configs/Stage1';

class Stage1 extends Default {
	constructor(game) {
		super(game);
	}

	preload() {
		this.game.load.spritesheet('bear', 'assets/sprites/bearsprite.png', 108, 96);
		this.game.load.spritesheet('platform', 'assets/sprites/platform.png', 32, 32);

		this.game.load.image('ground', 'assets/sprites/ground.png');
		this.game.load.image('bullet', 'assets/sprites/bullet.png');
		this.game.load.image('enemy1', 'assets/sprites/enemy1.png');
		this.game.load.image('background', 'assets/images/forest_bg.png');
	}

	create() {
		this.background = this.game.add.tileSprite(0, -360, StageConfig.width, 1080, 'background');
		this.background.alpha = 0.75;

		this.ground = new Ground(this.game);
		this.platforms = [this.ground].concat(StageConfig.platforms.map(p => new Platform(this.game, assign(p, {key: 'platform'}))));

		this.enemies = StageConfig.enemies.map(e => new Enemy(this.game, assign(e, {key: 'enemy1'})));

		this.player = new Player(this.game);

		this.game.world.setBounds(0, 0, StageConfig.width, StageConfig.height);
		this.game.camera.follow(this.player);
	}

	update() {
		this.game.physics.arcade.collide(this.platforms, this.player);

		this.game.physics.arcade.overlap(this.enemies, this.player.bullets, (enemy, bullet) => {
			enemy.hp -= bullet.damage;
			if (enemy.hp <= 0) {
				enemy.destroy();
			}
			bullet.destroy();
		});

		this.game.physics.arcade.collide(this.enemies, this.platforms, (enemy, platform) => {
			if (enemy.body.velocity.x > 0 && enemy.x > platform.parent.children[2].x + (platform.parent.children[2].width - enemy.body.halfWidth) ||
				enemy.body.velocity.x < 0 && enemy.x - enemy.body.halfWidth < platform.parent.children[0].x) {
				enemy.body.velocity.x *= -1;
			}
		});
	}
};

export default Stage1;
