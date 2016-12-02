/**
 * Created by goran.pavlovski on 11/22/2016.
 */

import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {Recipe} from "../../shared/interfaces";
import {DataService} from "../../core/services/data.service";
import 'rxjs/Rx';



@Component({
    selector: 'recipe-list',
    template: require('./recipe-list.component.html'),
    styles: [require('./recipe-list.component.scss')]
})

export class RecipeListComponent implements OnInit{

    recipes: Recipe[];
    page: number = 1;
    constructor(private dataService: DataService){}

    ngOnInit(){
        this.dataService.GetAll()
            .subscribe((recipes: Recipe[]) => {
                this.recipes = recipes;
            })

    }


}