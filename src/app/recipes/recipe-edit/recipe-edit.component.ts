/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit, ViewChild} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Response} from "@angular/http";
import {NgForm, FormBuilder, FormControl, FormGroup, Validators, FormArray} from "@angular/forms";

import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";

import {CloudinaryOptions, CloudinaryUploader} from "ng2-cloudinary";
import * as _ from 'lodash';
import {RecipeService} from "../recipes.service";


@Component({
    selector: 'recipe-edit',
    template: require('./recipe-edit.component.html'),
    styles: [require('./recipe-edit.component.scss')]
})

export class RecipeEditComponent implements OnInit {

    recipe: Recipe;
    recipeForm: FormGroup;
    steps: FormArray;
    ingredients: FormArray;
    image = new FormControl;
    cuisines: any[];
    courses: any[];
    skillLevel: any[];
    recipeTypes: any[];
    occasion: any[];
    mainIngredient: any[];
    _ = require('lodash');
    errorMessage: string;
    cloudinaryImage: any;

    cloudinaryOptions: CloudinaryOptions = new CloudinaryOptions({
        cloud_name: 'wenger88',
        upload_preset: 'uqocz1cg',
        autoUpload: true,
    });

    private uploader = new CloudinaryUploader(this.cloudinaryOptions);

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private recipeService: RecipeService,
                private router: Router,
                private fb: FormBuilder) {

        this.uploader.onSuccessItem = (item: any, response: any, status: any, headers: any) => {
            let _self = this;
            _self.cloudinaryImage = JSON.parse(response);
            console.log("ImageUpload:uploaded:", this.cloudinaryImage);
            this.recipe.image = _self.cloudinaryImage.url;
        };

    }

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            this.dataService.getSingleRecipe(params['id'])
                .subscribe((recipe: Recipe) => {
                this.recipe = recipe
                    console.log(this.recipe)

                    this.recipeForm = this.fb.group({
                        author: [this.recipe.author, Validators.required],
                        title: [this.recipe.title, Validators.required],
                        description: [this.recipe.description, Validators.required],
                        readyIn: [this.recipe.readyIn, Validators.required],
                        servings: [this.recipe.servings, Validators.required],
                        mainIngredientId: [this.recipe.mainIngredientId],
                        recipeTypeId: [this.recipe.recipeTypeId],
                        cuisineId: [this.recipe.cuisineId],
                        courseId: [this.recipe.courseId],
                        occasionId: [this.recipe.occasionId],
                        skillLevelId: [this.recipe.skillLevelId],
                        ingredients: this.buildIngredientArray(),
                        steps: this.buildStepsArray()
                    })
            })

        });

        this.recipeService.getAllCourses()
            .subscribe((course: Response[]) => {
                this.courses = course;
            })

        this.recipeService.getAllRecipeTypes()
            .subscribe((recipeType: Response[]) => {
                this.recipeTypes = recipeType
            })

        this.recipeService.getAllCuisines()
            .subscribe((cuisine: Response[]) => {
                this.cuisines = cuisine;
            })

        this.recipeService.getAllCourses()
            .subscribe((course: Response[]) => {
                this.courses = course
            })

        this.recipeService.getAllOccasions()
            .subscribe((occasion: Response[]) => {
                this.occasion = occasion
            })

        this.recipeService.getAllSkills()
            .subscribe((skill: Response[]) => {
                this.skillLevel = skill
            })

        this.recipeService.getMainIngredient()
            .subscribe((mainIngredient: Response[]) => {
                this.mainIngredient = mainIngredient
            })

    }

    buildIngredientArray(): FormArray {
        let arr: any[] = [];
        _.forEach(this.recipe.ingredients, (address, i) => {
            arr.push(this.buildIngredientGroup(i));
        });
        this.ingredients = this.fb.array(arr);

        return this.ingredients;
    }

    buildIngredientGroup(index: number):FormGroup{
        return this.fb.group({
            description: [this.recipe.ingredients[index].description, Validators.required],
        })
    }

    addIngredients(){
        let description = this.fb.group({
            description: ['', Validators.required],
        })
        this.ingredients.push(description);
    }

    removeIngredients(i: number){
        const control = <FormArray>this.recipeForm.controls['ingredients'];
        control.removeAt(i);
    }

    buildStepsArray(): FormArray {
        let arr: any[] = [];
        _.forEach(this.recipe.steps, (address, i) => {
            arr.push(this.buildStepsGroup(i));
        });
        this.steps = this.fb.array(arr);

        return this.steps;
    }

    buildStepsGroup(index: number):FormGroup{
        return this.fb.group({
            stepDescription: [this.recipe.steps[index].stepDescription, Validators.required ],
        })
    }

    addSteps(){
        let description = this.fb.group({
            stepDescription: ['', Validators.required ],
        })
        this.steps.push(description);
    }

    removeSteps(i: number){
        const control = <FormArray>this.recipeForm.controls['steps'];
        control.removeAt(i);
    }


    noWhitespace(event: any){
        if (event.which === 32 &&  event.target.selectionStart === 0)
            return false;
    }

    findMainIngredientName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.mainIngredient, ['id', value]);
        this.recipe.mainIngredientName = name[0].name;
        console.log('mainIngredient: ', value);
    }

    findCuisineName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.cuisines, ['id', value]);
        this.recipe.cuisineName = name[0].name;
        console.log('cuisineId: ', value);
    }

    findRecipeTypeName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.recipeTypes, ['id', value]);
        this.recipe.recipeTypeName = name[0].name;
        console.log('recipeTypeId: ', value);
    }

    findCourseName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.courses, ['id', value]);
        this.recipe.courseName = name[0].name;
        console.log('courseId: ', value);
    }

    findSkillLevelName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.skillLevel, ['id', value]);
        this.recipe.skillLevelName = name[0].name;
        console.log('skillId: ', value);
    }

    findOccasionName(value: any) {
        value = parseInt(value);
        let name = _.filter(this.occasion, ['id', value]);
        this.recipe.occasionName = name[0].name;
        console.log('occasionId: ', value);
    }

    onSubmit() {
        Object.assign(this.recipe, this.recipeForm.value);
        this.dataService.updateRecipe(this.recipe)
            .subscribe((status: boolean) => {
                if (status) {
                    //this.recipeForm.form.markAsPristine();
                    this.router.navigate(['/recipe-details', this.recipe.id]);
                    console.log(this.recipeForm);
                } else {
                    this.errorMessage = 'Unable to save recipe';
                }
            });
    }

    /*removeDirection(i: number) {
        this.recipe.steps.splice(i, 1);
        //this.recipeForm.form.markAsDirty();
    }

    removeIngredient(i: number) {
        this.recipe.ingredients.splice(i, 1);
        //this.recipeForm.form.markAsDirty();
    }

    addIngredient(name: HTMLInputElement) {
        let ingredient: any = {
            'description': name,
        }

        if (ingredient.name != "") {
            console.log(ingredient);
            this.recipe.ingredients.push(ingredient);
            this.ingredientName.reset();
        } else {
            console.log('Empty Fields!');
        }

        console.log(ingredient);

    }

    addDirection(directionName: HTMLInputElement) {
        let direction: any = {
            'description': directionName,
        }

        if (direction.name != "") {
            console.log(direction);
            this.recipe.steps.push(direction);
            this.directionName.reset();
        } else {
            console.log('Empty Fields!');
        }

        console.log(direction);

    }*/

}