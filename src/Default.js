'use strict';

class Default {
	constructor(game) {
		this.game = game;
	}

	preload() {

	}

	create() {

	}

	update() {

	}

	getTextStyles() {
		return {
			font: 'Comfortaa',
			fontSize: 20,
			fill: '#000'
		};
	}

	makeSolid() {
		this.game.physics.arcade.enable(this.instance);
		this.instance.body.enableBody = true;
	}
}

export default Default;
