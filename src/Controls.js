'use strict';

class Controls {
	constructor(Game, config) {
		this.Game = Game;

		this.keys = [];
		this.mapConfig(config);
	}

	mapConfig(config) {
		for (var i in config) {
			try {
				if (!Phaser.Keyboard[i.toUpperCase()]) {
					throw new Error('Key not found: ' + i);
				}
			} catch(e) {
				console.error(e.message);
			}

			var key = this.keys.push(this.Game.input.keyboard.addKey(Phaser.Keyboard[i.toUpperCase()]));
			this.keys[key - 1].onDown.add(config[i]);
		}
	}
}

export default Controls;
