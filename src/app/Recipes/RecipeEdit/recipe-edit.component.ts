/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";

@Component({
    selector: 'recipe-edit',
    template: require('./recipe-edit.component.html'),
    styles: [require('./recipe-edit.component.scss')]
})

export class RecipeEditComponent implements OnInit{

    recipe: Recipe;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private router: Router,
    ){}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.dataService.GetSingle(params['id'])
                .subscribe((recipe: Recipe) => this.recipe = recipe)
        })
    }

}