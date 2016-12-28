/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit, ViewChild} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Response} from "@angular/http";
import {NgForm, FormGroup, FormBuilder, FormControl, Validators, FormArray} from "@angular/forms";

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
        comments: []
    }
    postRecipeToServer: string;
    recipeForm: FormGroup;
    cuisines: any[];
    courses: any[];
    skillLevel: any[];
    recipeTypes: any[];
    occasion: any[];
    mainIngredient: any[];
    steps: FormArray;
    ingredients: FormArray;
    image = new FormControl;
    images: any[] = [];
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
            this.images.push(this.recipe.image);
        };
    }

    ngOnInit(): void {
        let i = 0;


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

        this.recipeForm = this.fb.group({
            author: new FormControl('', [Validators.required]),
            title: new FormControl('', [Validators.required]),
            images: new FormControl(this.images),
            description: new FormControl('', [Validators.required]),
            readyIn: new FormControl('', [Validators.required]),
            servings: new FormControl('', [Validators.required]),
            mainIngredientId: new FormControl(''),
            recipeTypeId: new FormControl(''),
            cuisineId: new FormControl(''),
            courseId: new FormControl(''),
            occasionId: new FormControl(''),
            skillLevelId: new FormControl(''),
            ingredients: this.buildIngredientArray(),
            steps: this.buildStepArray()
        })

    }

    buildIngredientArray(): FormArray{
        this.ingredients = this.fb.array([
            this.buildIngredientGroup()
        ]);
        return this.ingredients;
    }

    buildIngredientGroup(): FormGroup{
        return this.fb.group({
            description: ['', Validators.required]
        });
    }

    addIngredients(){
        this.ingredients.push(this.buildIngredientGroup());
    }

    removeIngredients(i: number){
        const control = <FormArray>this.recipeForm.controls['ingredients'];
        control.removeAt(i);
    }

    buildStepArray(): FormArray{
        this.steps = this.fb.array([
            this.buildStepGroup()
        ]);
        return this.steps;
    }

    buildStepGroup(): FormGroup{
        return this.fb.group({
            stepDescription: ['', Validators.required]
        });
    }

    addSteps(){
        this.steps.push(this.buildStepGroup());
    }

    removeSteps(i: number){
        const control = <FormArray>this.recipeForm.controls['steps'];
        control.removeAt(i);
        /*this.recipeForm['value'].steps.splice(i, 1);*/
    }

    initIngredient(newIng: string): FormGroup {
        return this.fb.group({
            description: [newIng, Validators.required]
        });
    }


    onSubmit() {
        Object.assign(this.recipe, this.recipeForm.value);
        this.dataService.addRecipe(this.recipe)
            .subscribe(
                (data) => {
                    //this.postRecipeToServer = JSON.stringify(data);
                    this.router.navigate(['/recipes']);
                },
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")
            );
        //console.log(this.recipe);

    }

    noWhitespace(event: any){
        if (event.which === 32 &&  event.target.selectionStart === 0)
            return false;
    }

    removeImage(index: number){
        this.images.splice(index, 1);
        /*this.recipe.image = '';*/
        this.cloudinaryImage = '';
        this.image.reset();
    }


}