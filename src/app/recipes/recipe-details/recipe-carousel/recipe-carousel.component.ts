/**
 * Created by goran.pavlovski on 12/20/2016.
 */

import {Component, Input} from "@angular/core";
import {Recipe} from "../../../shared/interfaces";
@Component({
    selector: 'recipe-carousel',
    template: require('./recipe-carousel.component.html'),
    styles: [require('./recipe-carousel.component.scss')]
})

export class RecipeCarouselComponent{

    @Input() recipe: Recipe;

}