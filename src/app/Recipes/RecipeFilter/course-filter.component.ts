/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, Input} from "@angular/core";
import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";
import 'rxjs/Rx';
import {Response} from "@angular/http";
import {FormControl} from "@angular/forms";
@Component({
    selector: 'course-filter',
    template: require('./course-filter.component.html')
})

export class CourseFilterComponent{
    courses: any[];
    selectedCourse: string = "Select a course";
    @Input() control: FormControl;


    constructor(private dataService: DataService){}

    onChange(newValue: any) {
        console.log(newValue);
        this.selectedCourse = newValue;
        // ... do other stuff here ...
    }

    ngOnInit(): void {
        this.dataService.getAllCourses()
            .subscribe((course: Response[]) => {
                this.courses = course
            })
    }
}