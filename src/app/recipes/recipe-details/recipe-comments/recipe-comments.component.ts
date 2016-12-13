/**
 * Created by goran.pavlovski on 11/29/2016.
 */

import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {NgForm, FormBuilder, FormGroup} from "@angular/forms";

import {Recipe, Comments} from "../../../shared/interfaces";
import {DataService} from "../../../core/services/data.service";

@Component({
    selector: 'recipe-comment',
    template: require('./recipe-comments.component.html'),
    styles: [require('./recipe-comments.component.scss')]
})

export class RecipeCommentsComponent implements OnInit {


    @Input() recipe: Recipe;
    @Input() comments: Comments[];
    //@ViewChild('recipeComment') recipeComment: NgForm;
    recipeComment: FormGroup;
    _ = require('lodash');
    date: any;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private router: Router,
                private fb: FormBuilder) {
    }

    ngOnInit(): void {

        this.recipeComment = this.fb.group({
            commentName: [''],
            rating: [''],
            content: ['']
        })


        this.dataService.getAllComments(this.recipe.id)
            .subscribe((comments: Comments[]) => {
                this.comments = comments;
                console.log(this.comments);
            })

        this.date = new Date();
        console.log(typeof this.date);
    }

    onSubmit(name: HTMLInputElement, comment: HTMLInputElement, rating: any) {

        let newComments: any = {
            'name': name,
            'content': comment,
            'recipeId': this.recipe.id,
            'rating': rating,
            'date': this.date,
            'likes': 0
        }

        if (newComments.name != "" || newComments.comment != "") {
            //console.log(newComments);
            this.dataService.addComment(newComments)
                .subscribe(
                    (data) => {
                        let postCommentsToServer = JSON.stringify(data);
                    },
                    error => console.log("Error HTTP Post Service"), // in case of failure show this message
                    () => console.log("Job Done Post!")
                );
            this.recipeComment.reset();
            console.log(this.recipe.rating);
            window.location.reload();

        } else {
            console.log('Empty Fields!');
        }

        //console.log(newComments);
    }

}