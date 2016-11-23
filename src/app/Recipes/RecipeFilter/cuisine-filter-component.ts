/**
 * Created by goran.pavlovski on 11/22/2016.
 */


import {Component, OnInit} from "@angular/core";
import {Recipe} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";
@Component({
    selector: 'cuisine-filter',
    /*template: `
        <select name="role" class="form-control">
            <option *ngFor="let role of recipe.cuisine" [value]="role.id">{{role.value}}</option>
        </select>
    `*/
    template: require('./cuisine-filter-component.html')
})

export class CuisineFilterComponent implements OnInit{
    recipe: {};
    selectedCuisine: string = "Select a cuisine";

    constructor(private dataService: DataService){}

    onChange(newValue: any) {
        console.log(newValue);
        this.selectedCuisine = newValue;
        // ... do other stuff here ...
    }

    ngOnInit(): void {
        this.dataService.GetAll()
            .subscribe((cuisine: Recipe[]) => {
                this.recipe = cuisine[0];
            })
    }


}