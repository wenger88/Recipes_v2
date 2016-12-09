/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, Input} from "@angular/core";
import {Response} from "@angular/http";
import {FormControl} from "@angular/forms";

import {DataService} from "../../../core/services/data.service";

@Component({
    selector: "recipe-ingredient-filter",
    template: require('./main-ingredient-filter.component.html')
})

export class MainIngredientFilterComponent {

    mainIngredients: any[];
    @Input() control: FormControl;


    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {

        this.dataService.getMainIngredient()
            .subscribe((mainIngredients: Response[]) => {
                this.mainIngredients = mainIngredients
            })
    }


}