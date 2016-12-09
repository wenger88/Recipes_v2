/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, Input} from "@angular/core";
import {Response} from "@angular/http";
import {FormControl} from "@angular/forms";

import {DataService} from "../../../core/services/data.service";

import 'rxjs/Rx';

@Component({
    selector: 'recipe-course-filter',
    template: require('./course-filter.component.html')
})

export class CourseFilterComponent {
    courses: any[];
    @Input() control: FormControl;

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.dataService.getAllCourses()
            .subscribe((course: Response[]) => {
                this.courses = course
            })
    }
}