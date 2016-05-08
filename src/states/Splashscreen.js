'use strict';

import assign from 'object-assign';

import Default from '../Default';
import Controls from '../Controls';

class Splashscreen extends Default {
	constructor(Game) {
		super(Game);
	}

	preload() {
		this.Game.load.image('bearbig', 'assets/images/bear.png');
	}

	setLogo() {
		let logo = this.Game.add.sprite(this.Game.world.centerX, this.Game.world.centerY, 'bearbig');
		logo.anchor.setTo(0.5, 0.5);

		return logo;
	}

	setTitle() {
		const {centerX, centerY} = this.Game.world;

		let title = this.Game.add.text(centerX, centerY - 100, 'GunBear', assign(this.getTextStyles(), {fontSize: 60}));
		title.anchor.setTo(0.5, 0.5);

		return title;
	}

	setMenuButtons() {
		let menuButtons = [{
			text: 'New game',
			action: () => this.Game.state.start('MainGame')
		}, {
			text: 'Options',
			action: () => this.Game.state.start('Options')
		}, {
			text: 'Highscores',
			action: () => this.Game.state.start('Highscores')
		}];

		let y = 2;
		return menuButtons.map((btn, i) => {
			let b = this.Game.add.text(this.Game.world.centerX, this.Game.world.centerY + 90 + (i * 30), btn.text, this.getTextStyles());
			b.anchor.setTo(0.5, 0.5);
			b.action = btn.action;
			return b;
		});
	}

	onSelect() {
		this.menuButtons.find(b => b.selected).action();
	}

	onMenuUp() {
		let index = this.menuButtons.indexOf(this.menuButtons.find(b => b.selected));
		this.setSelectedMenuButton(index !== 0 ? index - 1 : this.menuButtons.length - 1);
	}

	onMenuDown() {
		let index = this.menuButtons.indexOf(this.menuButtons.find(b => b.selected));
		this.setSelectedMenuButton(index + 1 === this.menuButtons.length ? 0 : index + 1);
	}

	setSelectedMenuButton(index) {
		this.menuButtons.forEach((b, i) => b.selected = i === index);
	}

	create() {
		new Controls(this.Game, {
			enter: e => this.onSelect(e),
			spacebar: e => this.onSelect(e),
			up: e => this.onMenuUp(e),
			down: e => this.onMenuDown(e)
		});

		this.Game.stage.backgroundColor = '#fff';
		this.logo = this.setLogo();
		this.title = this.setTitle();
		this.menuButtons = this.setMenuButtons();
		this.menuButtons[0].selected = true;
	}

	update() {
		this.menuButtons.forEach(b => b.setStyle(assign(this.getTextStyles(), {fontSize: b.selected ? 30 : 20})));
	}
}

export default Splashscreen;
