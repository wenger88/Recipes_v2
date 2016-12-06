/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Recipe, Comments} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import 'rxjs/Rx';
import * as _ from 'lodash';
import {Response} from "@angular/http";

@Component({
    selector: 'recipe-detail',
    template: require('./recipe-detail.component.html'),
    styles: [require('./recipe-detail.component.scss')]
})

export class RecipeDetailComponent implements OnInit{

    recipe: Recipe;
    comments: any[];
    _ = require('lodash');

    readyIn: any;

    constructor(private dataService: DataService, private router: Router ,private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.dataService.GetSingle(params['id'])
                .subscribe((recipe: Recipe) => {
                    this.recipe = recipe;
                    this.dataService.getAllComments(this.recipe.id)
                        .subscribe((comments: Comments[])=>{
                            this.comments = comments;
                            console.log(this.comments);
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

                            console.log(this.recipe.rating);
                            //console.log(this.rating);
                        })
                })
        })




    }



    onDelete(){
        this.dataService.Delete(this.recipe.id)
            .subscribe((recipe) => {
                this.router.navigate([''])
            })
    }





}