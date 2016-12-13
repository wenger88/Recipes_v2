/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit, ViewChild} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Response} from "@angular/http";
import {NgForm, FormGroup, FormBuilder, FormControl} from "@angular/forms";

import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";

import {CloudinaryOptions, CloudinaryUploader} from "ng2-cloudinary";
import * as _ from 'lodash';
import {RecipeService} from "../recipes.service";

@Component({
    selector: 'recipe-create',
    template: require('./recipe-create.component.html'),
    styles: [require('./recipe-create.component.scss')]
})

export class RecipeCreateComponent implements OnInit {


    recipe = <Recipe>{
        ingredients: [],
        steps: [],
        comments: []
    }
    postRecipeToServer: string;
    //@ViewChild('recipeForm') recipeForm: NgForm;
    recipeForm: FormGroup;
    ingredientName = new FormControl;
    directionName = new FormControl;
    cuisines: any[];
    courses: any[];
    skillLevel: any[];
    recipeTypes: any[];
    occasion: any[];
    mainIngredient: any[];
    mainIng = new FormControl;
    _ = require('lodash');
    cloudinaryImage: any;
    cloudinaryOptions: CloudinaryOptions = new CloudinaryOptions({
        cloud_name: 'wenger88',
        upload_preset: 'uqocz1cg',
        autoUpload: true,
    });
    private uploader = new CloudinaryUploader(this.cloudinaryOptions);
    options: CloudinaryOptions = new CloudinaryOptions({cloud_name: 'wenger88'});

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

        this.recipeForm = this.fb.group({
            author: [''],
            title: [''],
            description: [''],
            readyIn: [''],
            servings: [''],
            mainIngredientId: [''],
            recipeTypeId: [''],
            cuisineId: [''],
            courseId: [''],
            occasionId: [''],
            skillLevelId: ['']
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

        this.recipe.date = new Date();

    }

    onSubmit() {
        Object.assign(this.recipe, this.recipeForm.value);
        this.dataService.addRecipe(this.recipe)
            .subscribe(
                (data) => {
                    this.postRecipeToServer = JSON.stringify(data);
                    this.router.navigate(['/recipes']);
                },
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")
            );
        //console.log(this.recipe);

    }

    removeDirection(i: number) {
        this.recipe.steps.splice(i, 1);
        //this.recipeForm.form.markAsDirty();
    }

    removeIngredient(i: number) {
        this.recipe.ingredients.splice(i, 1);
        //this.recipeForm.form.markAsDirty();
    }

    addIngredient(name: HTMLInputElement) {
        let ingredient: any = {
            'name': name,
        }

        if (ingredient.name != "") {
            console.log(ingredient);
            this.recipe.ingredients.push(ingredient);
            //name = null;
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
            //directionName.value = null;
            this.directionName.reset();
        } else {
            console.log('Empty Fields!');
        }
        console.log(direction);
    }

}