/**
 * Created by goran.pavlovski on 11/22/2016.
 */

import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {Recipe} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";
import 'rxjs/Rx';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription, Subject} from "rxjs";


@Component({

    selector: 'recipe-list',
    template: require('./recipe-list.component.html'),
    styles: [require('./recipe-list.component.scss')]
})

export class RecipeListComponent implements OnInit{

    recipes: Recipe[];
    page: number = 1;
    sub: Subscription;
    totalCount = 0;

    constructor(private dataService: DataService){}

    ngOnInit(){
        this.getAll();
    }

    getAll() {
        this.dataService.GetAll(this.page)
            .subscribe((recipes: Recipe[]) => {
                this.recipes = recipes;
                this.totalCount = recipes['meta']['totalCount'];
            })
    }
}