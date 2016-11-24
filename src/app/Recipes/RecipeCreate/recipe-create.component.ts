/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit, ViewChild} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";
import {NgForm} from "@angular/forms";
@Component({
    selector: 'recipe-create',
    template: require('./recipe-create.component.html'),
    styles: [require('./recipe-create.component.scss')]
})

export class RecipeCreateComponent implements OnInit{


    recipe = <Recipe>{
        ingredients: [],
        steps: []
    }
    postRecipeToServer: string;
    @ViewChild('recipeForm') recipeForm: NgForm;
    /*selectedOccasion: string = "Select an occasion";*/
    cuisines: any[];
    courses: any[];
    skillLevel: any[];
    recipeTypes: any[];
    occasion: any[];

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private router: Router,){}

    ngOnInit(): void {
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


    //courseName = this._.filter(this.cuisines, ['id', this.recipe.cuisineId]);


    /*onChange(newValue: any) {
        console.log(newValue);
        this.selectedOccasion = newValue;
        // ... do other stuff here ...
    }*/

    onSubmit(){
        this.dataService.AddRecipe(this.recipe)
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