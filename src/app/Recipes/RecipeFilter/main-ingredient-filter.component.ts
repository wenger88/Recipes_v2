/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";

@Component({
    selector: "main-ingredient-filter",
    template: require('./main-ingredient-filter.component.html')
})

export class MainIngredientFilterComponent{

    recipe: {};
    selectedIngredient: string = "Select an ingredient";

    constructor(private dataService: DataService){}

    onChange(newValue: any) {
        console.log(newValue);
        this.selectedIngredient = newValue;
        // ... do other stuff here ...
    }

    ngOnInit(): void {
        this.dataService.GetAll()
            .subscribe((cuisine: Recipe[]) => {
                this.recipe = cuisine[0];
            })
    }



}