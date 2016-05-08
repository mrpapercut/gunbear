'use strict';

class Default {
	constructor(Game) {
		this.Game = Game;
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
		this.Game.physics.arcade.enable(this.instance);
		this.instance.body.enableBody = true;
	}
}

export default Default;
