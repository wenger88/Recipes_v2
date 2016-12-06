/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit, Input} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";
import {FormControl} from "@angular/forms";
@Component({
    selector: 'cook-time-filter',
    template: require('./cook-time-filter.component.html')
})

export class CookTimeFilterComponent implements OnInit{

    recipes: Recipe[];
    selectedCookTime: string = "Select a course";
    @Input() control: FormControl;
    constructor(private dataService: DataService){}

    ngOnInit(): void {

        this.dataService.GetAll()
            .subscribe((cook: Recipe[])=>{
                this.recipes = cook
            })

    }

    onChange(newValue: any) {
        console.log(newValue);
        this.selectedCookTime = newValue;
        // ... do other stuff here ...
    }

}