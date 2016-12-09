/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, Input} from "@angular/core";
import {Response} from "@angular/http";
import {FormControl} from "@angular/forms";

import 'rxjs/Rx';
import {RecipeService} from "../../recipes.service";

@Component({
    selector: 'recipe-course-filter',
    template: require('./course-filter.component.html')
})

export class CourseFilterComponent {
    courses: any[];
    @Input() control: FormControl;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipeService.getAllCourses()
            .subscribe((course: Response[]) => {
                this.courses = course
            })
    }
}