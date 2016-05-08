'use strict';

import Default from '../Default';

import Stage1 from '../stages/Stage1';

class MainGame extends Default {
	constructor(game) {
		super(game);
	}

	create() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.game.state.add('Stage1', new Stage1(this.game));

		this.game.state.start('Stage1');
	}
}

export default MainGame;
