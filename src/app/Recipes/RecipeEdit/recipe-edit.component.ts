/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit, ViewChild} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";
import {NgForm} from "@angular/forms";
import * as _ from 'lodash';

@Component({
    selector: 'recipe-edit',
    template: require('./recipe-edit.component.html'),
    styles: [require('./recipe-edit.component.scss')]
})

export class RecipeEditComponent implements OnInit{

    recipe: Recipe;
    @ViewChild('recipeForm') recipeForm: NgForm;
    cuisines: any[];
    courses: any[];
    skillLevel: any[];
    recipeTypes: any[];
    occasion: any[];
    _ = require('lodash');
    errorMessage: string;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private router: Router,
    ){}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.dataService.GetSingle(params['id'])
                .subscribe((recipe: Recipe) => this.recipe = recipe)
        });

        this.dataService.GetAll()
            .subscribe((recipe: Recipe[]) => {
                this.cuisines = recipe[0].cuisine;
            })
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
        this.dataService.GetAll()
            .subscribe((recipe: Recipe[]) => {
                this.occasion = recipe[0].occasion;
            })
    }

    findCuisineName(value: any){
        value = parseInt(value);
        let name = _.filter(this.cuisines,['id', value]);
        this.recipe.cuisineName = name[0].name;
    }

    findRecipeTypeName(value: any){
        value = parseInt(value);
        let name = _.filter(this.recipeTypes,['id', value]);
        this.recipe.recipeTypeName = name[0].name;
    }
    findCourseName(value: any){
        value = parseInt(value);
        let name = _.filter(this.courses,['id', value]);
        this.recipe.courseName = name[0].name;
    }
    findSkillLevelName(value: any){
        value = parseInt(value);
        let name = _.filter(this.skillLevel,['id', value]);
        this.recipe.skillLevelName = name[0].name;
    }
    findOccasionName(value: any){
        value = parseInt(value);
        let name = _.filter(this.occasion,['id', value]);
        this.recipe.occasionName = name[0].name;
    }

    onSubmit(){
        this.dataService.Update(this.recipe)
            .subscribe((status: boolean) => {
                if (status){
                    this.recipeForm.form.markAsPristine();
                    this.router.navigate(['/recipe-details', this.recipe.id]);
                    console.log(this.recipeForm);
                }else {
                    this.errorMessage = 'Unable to save recipe';
                }
            });
    }
    removeDirection(i: number){
        this.recipe.steps.splice(i,1);
        this.recipeForm.form.markAsDirty();
    }

    removeIngredient(i: number){
        this.recipe.ingredients.splice(i,1);
        this.recipeForm.form.markAsDirty();
    }

    addIngredient(name: HTMLInputElement){
        let ingredient: any = {
            'name': name.value,
        }

        if (ingredient.name != ""){
            console.log(ingredient);
            this.recipe.ingredients.push(ingredient);
            name.value = null;
        }else{
            console.log('Empty Fields!');
        }

        console.log(ingredient);

    }

    addDirection(directionName: HTMLInputElement){
        let direction: any = {
            'name': directionName.value,
        }

        if (direction.name != ""){
            console.log(direction);
            this.recipe.steps.push(direction);
            directionName.value = null;
        }else{
            console.log('Empty Fields!');
        }

        console.log(direction);

    }

}