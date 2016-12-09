/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit, Input} from "@angular/core";
import {FormControl} from "@angular/forms";

import {Recipe} from "../../../shared/interfaces";
import {RecipeService} from "../../recipes.service";

@Component({
    selector: 'recipe-ready-filter',
    template: require('./ready-filter.component.html')
})

export class CookTimeFilterComponent implements OnInit {

    recipes: Recipe[];
    @Input() control: FormControl;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {

        /*this.recipeService.getAllRecipes()
            .subscribe((cook: Recipe[]) => {
                this.recipes = cook
            })*/

    }


}