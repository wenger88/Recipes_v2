/**
 * Created by goran.pavlovski on 11/29/2016.
 */

import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {Recipe, Comments} from "../../../shared/interfaces";
import {Router, ActivatedRoute} from "@angular/router";
import {DataService} from "../../../core/services/data.service";
import {NgForm} from "@angular/forms";
import * as _ from 'lodash';


@Component({
    selector: 'recipe-comment',
    template: require('./recipe-comments.component.html'),
    styles: [require('./recipe-comments.component.scss')]
})

export class RecipeCommentsComponent implements OnInit{


    @Input() recipe: Recipe;
    @Input() comments: Comments[];
    //comments: any[] = [];
    @ViewChild('recipeComment') recipeComment: NgForm;
    _ = require('lodash');
    //comments: Comments[];
    postCommentsToServer: string;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private router: Router,){}

    ngOnInit(): void {

        /*this.dataService.getAllComments()
            .subscribe((comments: Comments[])=>{
                this.comments = _.filter(comments, ['recipeId', comments[0].recipeId]);
                console.log(this.comments);
            })*/
        this.dataService.getAllComments(this.recipe.id)
            .subscribe((comments: Comments[])=>{
                this.comments = comments;
                console.log(this.comments);
            })

    }

    onSubmit(name: HTMLInputElement, comment: HTMLInputElement){

        let newComments: any = {
            'name': name.value,
            'content': comment.value,
            'recipeId': this.recipe.id
        }

         if (newComments.name != "" || newComments.comment != ""){
             console.log(newComments);
             //this.comments.push(newComments);
             this.dataService.addComment(newComments)
                 .subscribe(
                     (data) => {
                         //this.postCommentsToServer = JSON.stringify(data);
                         let postCommentsToServer = JSON.stringify(data);
                     },
                     error => console.log("Error HTTP Post Service"), // in case of failure show this message
                     () => console.log("Job Done Post!")
                 );
             name.value = null;
             comment.value = null;
         }else{
         console.log('Empty Fields!');
         }

         console.log(newComments);
    }

}