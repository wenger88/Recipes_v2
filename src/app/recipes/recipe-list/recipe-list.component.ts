/**
 * Created by goran.pavlovski on 11/22/2016.
 */

import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, FormControl} from "@angular/forms";

import {Recipe} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";

import 'rxjs/Rx';

@Component({
    selector: 'recipe-list',
    template: require('./recipe-list.component.html'),
    styles: [require('./recipe-list.component.scss')]
})

export class RecipeListComponent implements OnInit {

    recipes: Recipe[];
    page: number = 1;
    totalCount = 0;
    filters: any;
    searchForm: FormGroup;
    term: string;
    constructor(private dataService: DataService, private fb: FormBuilder) {
    }

    ngOnInit() {

        this.searchForm = this.fb.group({
            search: new FormControl('')
        })

        this.term = this.searchForm.value.search;

        this.getAll();
    }

    getAll(filters?: any) {

        if (typeof filters !== 'undefined') {
            this.page = 1;
            this.filters = filters;
            //this.term = "";
        }
        this.dataService.getAllRecipes(this.searchForm.value.search, this.page, this.filters)
            .subscribe((recipes: Recipe[]) => {
                this.recipes = recipes;
                this.totalCount = recipes['meta']['totalCount'];
            })
        console.log(filters);
    }

    reset(){
        this.searchForm.reset();
        this.searchForm.value.search = "";
        this.dataService.getAllRecipes(this.searchForm.value.search, this.page, this.filters)
            .subscribe((recipes: Recipe[]) => {
                this.recipes = recipes;
                this.totalCount = recipes['meta']['totalCount'];
            })
    }



}