/**
 * Created by goran.pavlovski on 11/29/2016.
 */

import {Component, Input, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import * as _ from 'lodash';

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
            commentName: new FormControl('', [Validators.required]),
            rating: new FormControl(''),
            content: new FormControl('', [Validators.required])
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

                        this.dataService.getAllComments(this.recipe.id)
                            .subscribe((comments: Comments[]) => {
                                this.comments = comments;
                                if (this.comments.length != 0) {
                                    this.recipe.rating = _.chain(this.comments)
                                        .filter(n => n.rating > 0)
                                        .map('rating')
                                        .sum()
                                        .value()
                                    this.recipe.rating = Math.round(this.recipe.rating / this.comments.length);
                                    console.log(this.recipe.rating);
                                } else {
                                    this.recipe.rating = 0;
                                }
                                console.log(this.comments);
                            })
                    },
                    error => console.log("Error HTTP Post Service"), // in case of failure show this message
                    () => console.log("Job Done Post!")

                );
            this.recipeComment.reset();
            console.log(this.recipe.rating);

            return false;
            //window.location.reload();

        } else {
            console.log('Empty Fields!');
        }

    }

}