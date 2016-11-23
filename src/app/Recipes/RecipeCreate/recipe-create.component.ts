/**
 * Created by goran.pavlovski on 11/23/2016.
 */

import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {DataService} from "../../core/services/data.service";
import {Recipe} from "../../shared/interfaces";
@Component({
    selector: 'recipe-create',
    template: require('./recipe-create.component.html'),
    styles: [require('./recipe-create.component.scss')]
})

export class RecipeCreateComponent implements OnInit{


    recipe = <Recipe>{
        ingredients: [],
        steps: []
    }
    postRecipeToServer: string;


    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private router: Router,){}

    ngOnInit(): void {
    }

    onSubmit(){
        this.dataService.AddRecipe(this.recipe)
            .subscribe(
                (data) => {
                    this.postRecipeToServer = JSON.stringify(data);
                    this.router.navigate(['/recipes']);
                },
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")
            );
        //console.log(this.recipe);
    }


}