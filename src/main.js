'use strict';

import GameConfig from './configs/GameConfig';
import Splashscreen from './states/Splashscreen';

class GunBear {
	constructor() {
		this.Game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.AUTO, '');

		this.addStates();
	}

	addStates() {
		this.Game.state.add('Splashscreen', new Splashscreen(this.Game));
	}

	start() {
		this.Game.state.start('Splashscreen');
	}
}

window.WebFontConfig = {
	active() {
		// Start when fonts are loaded
		window.GunBear.start();
	},

	google: {
		families: ['Comfortaa']
	}
};

window.addEventListener('load', () => window.GunBear = new GunBear());
