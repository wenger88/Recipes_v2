import {NgModule} from '@angular/core';

import {AppHeaderComponent, appHeaderRouting} from './header';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
        appHeaderRouting,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AppHeaderComponent,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    declarations: [
        AppHeaderComponent
    ]
})

export class SharedModule {
}