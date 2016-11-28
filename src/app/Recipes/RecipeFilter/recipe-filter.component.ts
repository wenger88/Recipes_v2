/**
 * Created by goran.pavlovski on 11/22/2016.
 */


import {Component, style, animate, state, transition, trigger} from "@angular/core";

@Component({
    selector: 'recipe-filter',
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateY(0)'})),
            transition('void => *', [
                style({transform: 'translateY(-100%)', opacity: '0'}),//
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({transform: 'translateY(-100%)', opacity: '0'}))
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