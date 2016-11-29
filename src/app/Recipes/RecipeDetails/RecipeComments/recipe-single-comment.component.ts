import {Component, Input} from "@angular/core";
import {Recipe} from "../../../shared/interfaces";
/**
 * Created by goran.pavlovski on 11/29/2016.
 */

@Component({
    selector: 'single-comment',
    template: require('./recipe-single-comment.component.html'),
    styles: [require('./recipe-single-comment.component.scss')]
})

export class RecipeSingleCommentComponent{

    @Input() recipe: Recipe;

    constructor(){}

}