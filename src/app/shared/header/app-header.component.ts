import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	template: require('./app-header.component.html'),
	styles: [require('./app-header.component.scss')]
})

export class AppHeaderComponent {

	isCollapsed: boolean = true;

	constructor(){}

	openNavbar(){
		this.isCollapsed = !this.isCollapsed;
	}

}