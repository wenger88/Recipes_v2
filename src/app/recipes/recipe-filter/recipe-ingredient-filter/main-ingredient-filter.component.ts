/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, Input} from "@angular/core";
import {Response} from "@angular/http";
import {FormControl} from "@angular/forms";

import {RecipeService} from "../../recipes.service";

@Component({
    selector: "recipe-ingredient-filter",
    template: require('./main-ingredient-filter.component.html')
})

export class MainIngredientFilterComponent {

    mainIngredients: any[];
    @Input() control: FormControl;


    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {

        this.recipeService.getMainIngredient()
            .subscribe((mainIngredients: Response[]) => {
                this.mainIngredients = mainIngredients
            })
    }


}