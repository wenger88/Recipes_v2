/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Response} from "@angular/http";

import {RecipeService} from "../../recipes.service";


@Component({
    selector: 'recipe-occasion-filter',
    template: require('./occasion-filter.component.html')
})

export class OccasionFilterComponent {

    occasions: any[];
    @Input() control: FormControl;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipeService.getAllOccasions()
            .subscribe((occasion: Response[]) => {
                this.occasions = occasion
            })
    }


}