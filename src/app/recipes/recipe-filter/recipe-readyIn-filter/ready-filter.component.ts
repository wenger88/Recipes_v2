/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit, Input} from "@angular/core";
import {FormControl} from "@angular/forms";

import {DataService} from "../../../core/services/data.service";
import {Recipe} from "../../../shared/interfaces";

@Component({
    selector: 'recipe-ready-filter',
    template: require('./ready-filter.component.html')
})

export class CookTimeFilterComponent implements OnInit {

    recipes: Recipe[];
    @Input() control: FormControl;

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {

        this.dataService.getAllRecipes()
            .subscribe((cook: Recipe[]) => {
                this.recipes = cook
            })

    }


}