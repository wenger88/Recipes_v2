import { NgModule } from '@angular/core';  

import { AppHeaderComponent, appHeaderRouting } from './header';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [
		BrowserModule,
		appHeaderRouting,
		CommonModule
	],
	exports: [
		AppHeaderComponent,
	],
	providers: [],
	declarations: [
		AppHeaderComponent
	]
})

export class SharedModule { } 