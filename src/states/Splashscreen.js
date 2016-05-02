'use strict';

class Splashscreen {
	constructor(Game) {
		this.Game = Game;
	}

	preload() {
		this.Game.load.spritesheet('bear', 'assets/sprites/bear.png', 22, 24);
	}

	create() {
		this.logo = this.Game.add.sprite(this.Game.world.centerX, this.Game.world.centerY, 'bear');
		this.logo.anchor.setTo(0.5, 0.5);
		this.text = this.Game.add.text(this.Game.world.centerX, this.Game.world.centerY - 100, 'GunBear', {
			font: 'Comfortaa',
			fill: '#000',
			fontSize: 60
		});
		this.text.anchor.setTo(0.5, 0.5);

		this.Game.stage.backgroundColor = '#fff';
	}

	update() {

	}
}

export default Splashscreen;
