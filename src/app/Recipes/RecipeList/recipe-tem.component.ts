/**
 * Created by Goran on 11/30/2016.
 */

import {Component, Input} from "@angular/core";
import {Recipe} from "../../shared/interfaces";
@Component({
    selector: 'recipe-item',
    template: require('./recipe-tem.component.html'),
    styles: [require('./recipe-tem.component.scss')]
})

export class RecipeItemComponent{

    @Input() recipe: Recipe[];

    constructor(){}

}