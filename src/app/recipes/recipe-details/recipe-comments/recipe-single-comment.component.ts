/**
 * Created by goran.pavlovski on 11/29/2016.
 */

import {Component, Input} from "@angular/core";

import {Recipe, Comments} from "../../../shared/interfaces";
import * as _ from 'lodash';
import {DataService} from "../../../core/services/data.service";
import {Response} from "@angular/http";
import {Params, ActivatedRoute} from "@angular/router";


@Component({
    selector: 'recipe-single-comment',
    template: require('./recipe-single-comment.component.html'),
    styles: [require('./recipe-single-comment.component.scss')]
})

export class RecipeSingleCommentComponent {

    @Input() recipe: Recipe;
    @Input() comment: Comments;
    comments: Comments[];
    counter: number = Math.floor(Math.random() * 10) + 1
    liked: boolean = false;
    _ = require('lodash');

    constructor(private dataService: DataService, private route: ActivatedRoute) {

            /*this.route.params.subscribe((params: Params) => {
                this.dataService.getSingleRecipe(params['id'])
                    .subscribe((recipe: Recipe) => {
                        this.recipe = recipe;
                    })
            })*/
    }

    likedComment() {
        this.liked = true;
        this.comment.likes++;
        /*this.dataService.updateComment(this.comment)
            .subscribe((status: boolean) => {
                if (status) {
                   this.comment.likes++;
                } else {
                    console.log('Unable to save recipe')
                }
            });*/
    }
}