/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit} from "@angular/core";
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

    constructor(private dataService: DataService, private router: Router ,private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.dataService.GetSingle(params['id'])
                .subscribe((recipe: Recipe) => {
                    this.recipe = recipe;
                    /*this.dataService.getAllComments(this.recipe.id)
                        .subscribe((comments: Comments[])=>{
                            this.comments = comments;
                            console.log(this.comments);
                        })*/
                })
        })



       /* this.dataService.GetAll().subscribe((recipe: Recipe[])=>{
            let elem = _.filter(recipe, ['id', this.recipe.id]);
            console.log(elem);
            this.comments = elem[0].comments;
        })*/



    }

    onDelete(){
        this.dataService.Delete(this.recipe.id)
            .subscribe((recipe) => {
                this.router.navigate([''])
            })
    }





}