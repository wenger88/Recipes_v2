/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Response} from "@angular/http";

import {DataService} from "../../../core/services/data.service";


@Component({
    selector: 'recipe-occasion-filter',
    template: require('./occasion-filter.component.html')
})

export class OccasionFilterComponent {

    occasions: any[];
    @Input() control: FormControl;

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.dataService.getAllOccasions()
            .subscribe((occasion: Response[]) => {
                this.occasions = occasion
            })
    }


}