'use strict';

import assign from 'object-assign';

import Default from '../Default';
import Controls from '../Controls';

class Highscores extends Default {
	constructor(game) {
		super(game);
	}

	getHighscores() {
		return [].concat(JSON.parse(localStorage.getItem('gunbear-highscores')) || [],
			[{name:'AAA',score:100000,},{name:'BBB',score:90000,},{name:'CCC',score:80000},{name:'DDD',score:70000},{name:'EEE',score:60000},{name:'FFF',score:50000},{name:'GGG',score:40000},{name:'HHH',score:30000},{name:'III',score:20000},{name:'JJJ',score:10000}])
			.sort((a, b) => b.score - a.score).splice(0, 10);
	}

	create() {
		const {centerX, centerY} = this.game.world;

		this.game.stage.backgroundColor = '#fff';

		const title = this.game.add.text(centerX, 50, 'GunBear Highscores', assign(this.getStyles(), {fontSize: 30}));
		title.anchor.setTo(0.5, 0.5);

		this.getHighscores().map((sco, i) => {
			let n = this.game.add.text(centerX - 100, 90 + (i * 25), sco.name, this.getStyles());
			n.anchor.setTo(0, 0.5);
			let s = this.game.add.text(centerX + 60, 90 + (i * 25), sco.score, this.getStyles());
			s.anchor.setTo(0, 0.5);
		});

		new Controls(this.game, {
			enter: () => this.game.state.start('Splashscreen'),
			esc: () => this.game.state.start('Splashscreen')
		});
	}
};

export default Highscores;
