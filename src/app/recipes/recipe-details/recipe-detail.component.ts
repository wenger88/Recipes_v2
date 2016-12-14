/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";

import {Recipe, Comments} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";

import 'rxjs/Rx';
import * as _ from 'lodash';
import {RecipeService} from "../recipes.service";
import {Response} from "@angular/http";

@Component({
    selector: 'recipe-detail',
    template: require('./recipe-detail.component.html'),
    styles: [require('./recipe-detail.component.scss')]
})

export class RecipeDetailComponent implements OnInit {

    recipe: Recipe;
    comments: any[];
    cuisines: any[];
    courses: any[];
    skillLevel: any[];
    recipeTypes: any[];
    occasion: any[];
    mainIngredient: any[];
    _ = require('lodash');

    readyIn: any;

    constructor(private recipeService: RecipeService, private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.dataService.getSingleRecipe(params['id'])
                .subscribe((recipe: Recipe) => {
                    this.recipe = recipe;

                    this.dataService.getAllComments(this.recipe.id)
                        .subscribe((comments: Comments[]) => {
                            this.comments = comments;
                            console.log(this.comments);
                            if (this.comments.length != 0) {
                                this.recipe.rating = _.chain(this.comments)
                                    .filter(n => n.rating > 0)
                                    .map('rating')
                                    .sum()
                                    .value()
                                this.recipe.rating = Math.round(this.recipe.rating / this.comments.length);
                                console.log(this.recipe.rating);
                            } else {
                                this.recipe.rating = 0;
                            }

                            console.log(this.recipe.rating);
                            //console.log(this.rating);
                        })
                })
        })

        this.recipeService.getMainIngredient()
            .subscribe((mainIngredient: Response[]) => {
                this.mainIngredient = mainIngredient
                if (this.recipe.mainIngredientId){
                    this.findMainIngredientName(this.recipe.mainIngredientId);
                }
            })

        this.recipeService.getAllRecipeTypes()
            .subscribe((recipeType: Response[]) => {
                this.recipeTypes = recipeType
                if (this.recipe.recipeTypeId){
                    this.findRecipeTypeName(this.recipe.recipeTypeId);
                }
            })

        this.recipeService.getAllCuisines()
            .subscribe((cuisine: Response[]) => {
                this.cuisines = cuisine;
                if (this.recipe.cuisineId){
                    this.findCuisineName(this.recipe.cuisineId);
                }
            })

        this.recipeService.getAllCourses()
            .subscribe((course: Response[]) => {
                this.courses = course
                if (this.recipe.courseId){
                    this.findCourseName(this.recipe.courseId)
                }
            })

        this.recipeService.getAllOccasions()
            .subscribe((occasion: Response[]) => {
                this.occasion = occasion
                if (this.recipe.occasionId){
                    this.findOccasionName(this.recipe.occasionId)
                }

            })

        this.recipeService.getAllSkills()
            .subscribe((skill: Response[]) => {
                this.skillLevel = skill
                if (this.recipe.skillLevelId){
                    this.findSkillLevelName(this.recipe.skillLevelId)
                }
            })



    }

    findMainIngredientName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.mainIngredient, ['id', value]);
        this.recipe.mainIngredientName = name[0].name;
    }

    findCuisineName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.cuisines, ['id', value]);
        this.recipe.cuisineName = name[0].name;
    }

    findRecipeTypeName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.recipeTypes, ['id', value]);
        this.recipe.recipeTypeName = name[0].name;
    }

    findCourseName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.courses, ['id', value]);
        this.recipe.courseName = name[0].name;
    }

    findSkillLevelName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.skillLevel, ['id', value]);
        this.recipe.skillLevelName = name[0].name;
    }

    findOccasionName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.occasion, ['id', value]);
        this.recipe.occasionName = name[0].name;
    }


    onDelete() {
        this.dataService.deleteRecipe(this.recipe.id)
            .subscribe((recipe) => {
                this.router.navigate([''])
            })
    }

}