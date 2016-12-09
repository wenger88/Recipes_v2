/**
 * Created by goran.pavlovski on 11/22/2016.
 */

import {Component, Input, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Response} from "@angular/http";


import 'rxjs/Rx';
import {RecipeService} from "../../recipes.service";

@Component({
    selector: 'recipe-cuisine-filter',
    template: require('./cuisine-filter-component.html')
})

export class CuisineFilterComponent implements OnInit {
    @Input() control: FormControl;
    cuisines: any[];

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipeService.getAllCuisines()
            .subscribe((cuisine: Response[]) => {
                this.cuisines = cuisine;
            })
    }


}