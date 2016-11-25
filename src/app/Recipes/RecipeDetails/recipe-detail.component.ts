/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit} from "@angular/core";
import {Recipe} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import 'rxjs/Rx';

@Component({
    selector: 'recipe-detail',
    template: require('./recipe-detail.component.html'),
    styles: [require('./recipe-detail.component.scss')]
})

export class RecipeDetailComponent implements OnInit{

    recipe: Recipe;

    constructor(private dataService: DataService, private router: Router ,private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.dataService.GetSingle(params['id'])
                .subscribe((recipe: Recipe) => this.recipe = recipe)
        })
    }




}