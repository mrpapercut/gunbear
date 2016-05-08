'use strict';

import GameConfig from './configs/GameConfig';

import Splashscreen from './states/Splashscreen';
import Highscores from './states/Highscores';
import MainGame from './states/MainGame';

class GunBear {
	constructor() {
		this.Game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.AUTO, '');

		this.addStates();
	}

	addStates() {
		this.Game.state.add('Splashscreen', new Splashscreen(this.Game));
		this.Game.state.add('Highscores', new Highscores(this.Game));
		this.Game.state.add('MainGame', new MainGame(this.Game));
	}

	getState() {

	}

	start() {
		this.Game.state.start('Splashscreen');
	}
}

window.WebFontConfig = {
	active() {
		// Start when fonts are loaded
		window.GunBear = new GunBear();
		window.GunBear.start();
	},

	google: {
		families: ['Comfortaa']
	}
};
