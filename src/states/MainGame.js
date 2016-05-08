'use strict';

import Default from '../Default';

import Stage1 from '../stages/Stage1';

class MainGame extends Default {
	constructor(Game) {
		super(Game);
	}

	create() {
		this.Game.physics.startSystem(Phaser.Physics.ARCADE);

		this.Game.state.add('Stage1', new Stage1(this.Game));

		this.Game.state.start('Stage1');
	}
}

export default MainGame;
