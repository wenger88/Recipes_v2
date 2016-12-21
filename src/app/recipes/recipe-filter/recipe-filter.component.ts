/**
 * Created by goran.pavlovski on 11/22/2016.
 */
import {Component, Output, EventEmitter, style, animate, state, transition, trigger} from "@angular/core";
import {FormGroup, FormBuilder} from '@angular/forms';

import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";

@Component({
    selector: 'recipe-filter',
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateY(0)'})),
            transition('void => *', [
                style({transform: 'translateY(-100%)', opacity: '0'}),//
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({transform: 'translateY(-100%)', opacity: '0'}))
            ])
        ])
    ],
    template: require('./recipe-filter.component.html'),
    styles: [require('./recipe-filter.component.scss')]
})

export class RecipeFilterComponent {

    @Output() filter: EventEmitter<any> = new EventEmitter();
    filterForm: FormGroup;
    recipes: Recipe[];
    show = false;

    constructor(private formBuilder: FormBuilder) {

    }

    showFilter() {
        this.show = !this.show;
    }

    ngOnInit() {
        this.filterForm = this.formBuilder.group({
            'cuisineId': [null],
            'courseId': [null],
            'mainIngredientId': [null],
            'occasionId': [null],
            'readyIn_lte': [null]
        });
    }

    //*
    onSubmit() {
        this.filter.emit(this.filterForm.value);
        console.log(this.filterForm.value)
    }

    //*/

    reset() {
        /*this.filterForm.reset();
        this.filter.emit({});*/
        this.filterForm.reset();
        this.filter.emit(this.filterForm.value);
        console.log(this.filterForm.value);
    }


}