/**
 * Created by goran.pavlovski on 12/22/2016.
 */

import {Component, EventEmitter, Output, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {Recipe} from "../../../shared/interfaces";
@Component({
    selector: 'recipe-search',
    template: require('./recipe-search.component.html'),
    styles: [require('./recipe-search.component.scss')]
})

export class RecipeSearchComponent implements OnInit{

    @Output() search: EventEmitter<any> = new EventEmitter();
    searchForm: FormGroup;
    recipes: Recipe[];

    constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            search: new FormControl('')
        })
    }

    onSubmit(){
        this.search.emit(this.searchForm.value.search);
        console.log(this.searchForm.value);
    }

    reset(){
        this.searchForm.reset();
        this.searchForm.value.search = "";
        this.search.emit(this.searchForm.value.search);
    }

}