/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit} from "@angular/core";
import {Recipe} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import * as _ from 'lodash';
import 'rxjs/Rx';
@Component({
    selector: 'recipe-detail',
    template: require('./recipe-detail.component.html'),
    styles: [require('./recipe-detail.component.scss')]
})

export class RecipeDetailComponent implements OnInit{

    recipe: Recipe;
    recipes: Recipe[];
    cuisines: any[];
    courses: any[];
    skillLevel: any[];
    recipeTypes: any[];
    _ = require('lodash');
    cName: {} = {};
    constructor(private dataService: DataService, private router: Router ,private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.dataService.GetSingle(params['id'])
                .subscribe((recipe: Recipe) => this.recipe = recipe)
        })

        this.dataService.GetAll()
            .subscribe((recipe: Recipe[]) => {
                this.cuisines = recipe[0].cuisine;
                this.cName = _.find(this.cuisines, ['id', this.recipe.cuisineId]);
                if (this.cName != null){
                    this.recipe.cuisineName = this.cName['name'];
                }else{
                    console.log('You have not specified a cuisine');
                }
                console.log(this.cName['name']);

            });
        console.log(this.cName);
        this.dataService.GetAll()
            .subscribe((recipe: Recipe[]) => {
                this.courses = recipe[0].course;
            })
        this.dataService.GetAll()
            .subscribe((recipe: Recipe[]) => {
                this.recipeTypes = recipe[0].recipeType;
            })
        this.dataService.GetAll()
            .subscribe((recipe: Recipe[]) => {
                this.skillLevel = recipe[0].skillLevel;
            })

        console.log(this.cName);
    }




}