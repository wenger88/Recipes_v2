/**
 * Created by Goran on 11/30/2016.
 */

import {Component, Input, OnInit} from "@angular/core";
import {Recipe, Comments} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";
import * as _ from 'lodash';

@Component({
    selector: 'recipe-item',
    template: require('./recipe-tem.component.html'),
    styles: [require('./recipe-tem.component.scss')]
})

export class RecipeItemComponent implements OnInit{


    @Input() recipe: Recipe;
    comments: any[];
    _ = require('lodash');
    constructor(private dataService: DataService){}
    ngOnInit(): void {

        this.dataService.getAllComments(this.recipe.id)
            .subscribe((comments: Comments[]) => {
                this.comments = comments;
                if (this.comments.length != 0){
                    this.recipe.rating = _.chain(this.comments)
                        .filter(n => n.rating > 0)
                        .map('rating')
                        .sum()
                        .value()
                    this.recipe.rating = Math.round(this.recipe.rating/this.comments.length);
                    //this.recipe['rating'] = this.recipe.rating;
                    //Array.prototype.push(this.recipe,this.recipe.rating);
                    console.log(this.recipe.rating);
                }else {
                    this.recipe.rating = 0;
                }
            })

    }
}