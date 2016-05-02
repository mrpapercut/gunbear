'use strict';

class Splashscreen {
	constructor(Game) {
		this.Game = Game;
	}

	preload() {
		this.Game.load.image('bearbig', 'assets/images/bear.png');
	}

	create() {
		this.logo = this.Game.add.sprite(this.Game.world.centerX, this.Game.world.centerY, 'bearbig');
		this.logo.anchor.setTo(0.5, 0.5);

		this.title = this.Game.add.text(this.Game.world.centerX, this.Game.world.centerY - 100, 'GunBear', {
			font: 'Comfortaa',
			fontSize: 60,
			fill: '#000'
		});
		this.title.anchor.setTo(0.5, 0.5);

		this.startbutton = this.Game.add.text(this.Game.world.centerX, this.Game.world.centerY + 100, 'Press [space] to start', {
			font: 'Comfortaa',
			fontSize: 30,
			fill: '#000'
		});
		this.startbutton.anchor.setTo(0.5, 0.5);

		this.Game.stage.backgroundColor = '#fff';
	}

	update() {

	}
}

export default Splashscreen;
