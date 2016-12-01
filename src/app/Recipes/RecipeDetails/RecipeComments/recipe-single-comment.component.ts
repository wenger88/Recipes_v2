import {Component, Input} from "@angular/core";
import {Recipe, Comments} from "../../../shared/interfaces";
import {count} from "rxjs/operator/count";
import {DataService} from "../../../core/services/data.service";
import {Response} from "@angular/http";
/**
 * Created by goran.pavlovski on 11/29/2016.
 */

@Component({
    selector: 'single-comment',
    template: require('./recipe-single-comment.component.html'),
    styles: [require('./recipe-single-comment.component.scss')]
})

export class RecipeSingleCommentComponent{

    @Input() recipe: Recipe;
    @Input() comment: Comments;
    singleComment: any;
    counter: number;
    liked: boolean = false;
    constructor(private dataService:DataService){

    }

    likedComment(){
        this.liked = true;
    }
}