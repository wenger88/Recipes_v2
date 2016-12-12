/**
 * Created by goran.pavlovski on 11/29/2016.
 */

import {Component, Input} from "@angular/core";

import {Recipe, Comments} from "../../../shared/interfaces";

@Component({
    selector: 'recipe-single-comment',
    template: require('./recipe-single-comment.component.html'),
    styles: [require('./recipe-single-comment.component.scss')]
})

export class RecipeSingleCommentComponent {

    @Input() recipe: Recipe;
    @Input() comment: Comments;
    singleComment: any;
    counter: number = Math.floor(Math.random() * 10) + 1
    liked: boolean = false;

    constructor() {

    }

    likedComment() {
        this.liked = true;
    }
}