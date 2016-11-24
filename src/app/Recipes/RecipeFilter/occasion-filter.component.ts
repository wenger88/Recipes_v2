/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";
@Component({
    selector: 'occasion-filter',
    template: require('./occasion-filter.component.html')
})

export class OccasionFilterComponent{

    occasions: any[];
    selectedOccasion: string = "Select an occasion";

    constructor(private dataService: DataService){}

    onChange(newValue: any) {
        console.log(newValue);
        this.selectedOccasion = newValue;
        // ... do other stuff here ...
    }

    ngOnInit(): void {
        this.dataService.GetAll()
            .subscribe((cuisine: Recipe[]) => {
                this.occasions = cuisine[0].occasion;
            })
    }


}