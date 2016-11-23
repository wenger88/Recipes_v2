/**
 * Created by goran.pavlovski on 11/22/2016.
 */


import {Component, style, animate, state, transition, trigger} from "@angular/core";

@Component({
    selector: 'recipe-filter',
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),//
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({transform: 'translateX(-100%)'}))
            ])
        ])
    ],
    template: require('./recipe-filter.component.html'),
    styles: [require('./recipe-filter.component.scss')]
})

export class RecipeFilterComponent{

    show = false;

    constructor(){}

    showFilter(){
        this.show = !this.show;
    }

}