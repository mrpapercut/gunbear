'use strict';

import GameConfig from './configs/GameConfig';

import Splashscreen from './states/Splashscreen';
import Highscores from './states/Highscores';
import MainGame from './states/MainGame';

class GunBear {
	constructor() {
		this.game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.AUTO, '');

		this.addStates();
	}

	addStates() {
		this.game.state.add('Splashscreen', new Splashscreen(this.game));
		this.game.state.add('Highscores', new Highscores(this.game));
		this.game.state.add('MainGame', new MainGame(this.game));
	}

	getState() {

	}

	start() {
		this.game.state.start('Splashscreen');
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
