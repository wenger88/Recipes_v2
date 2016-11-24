/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";
import 'rxjs/Rx';
@Component({
    selector: 'course-filter',
    template: require('./course-filter.component.html')
})

export class CourseFilterComponent{
    courses: any[];
    selectedCourse: string = "Select a course";

    constructor(private dataService: DataService){}

    onChange(newValue: any) {
        console.log(newValue);
        this.selectedCourse = newValue;
        // ... do other stuff here ...
    }

    ngOnInit(): void {
        this.dataService.GetAll()
            .subscribe((cuisine: Recipe[]) => {
                this.courses = cuisine[0].course;
            })
    }
}