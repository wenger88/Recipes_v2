/**
 * Created by goran.pavlovski on 11/22/2016.
 */


import {Component, Input, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Recipe, Cuisine} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";
import 'rxjs/Rx';
import {Response} from "@angular/http";

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
    @Input() control: FormControl;
    cuisines: any[];
    selectedCuisine: string = "Select a cuisine";

    constructor(private dataService: DataService){}

    onChange(newValue: any) {
        console.log(newValue);
        this.selectedCuisine = newValue;
        // ... do other stuff here ...
    }

    ngOnInit(): void {
        this.dataService.getAllCuisines()
            .subscribe((cuisine: Response[]) => {
                this.cuisines = cuisine;
            })
    }


}