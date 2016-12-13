/**
 * Created by goran.pavlovski on 12/9/2016.
 */

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";

@Injectable()
export class RecipeService{

    recipeTypeUrl: string = API_URL + '/recipeType';
    cuisineUrl: string = API_URL + '/cuisine';
    courseUrl: string = API_URL + '/course';
    occasionUrl: string = API_URL + '/occasion';
    skillUrl: string = API_URL + '/skillLevel';
    mainIngredientUrl: string = API_URL + '/mainIngredient';


    constructor(private http: Http){}

    getAllRecipeTypes(): Observable<Response[]> {
        return this.http.get(this.recipeTypeUrl)
            .map((res: Response) => res.json())
    }

    getAllCuisines(): Observable<Response[]> {
        return this.http.get(this.cuisineUrl)
            .map((res: Response) => res.json())
    }

    getAllCourses(): Observable<Response[]> {
        return this.http.get(this.courseUrl)
            .map((res: Response) => res.json())
    }

    getAllOccasions(): Observable<Response[]> {
        return this.http.get(this.occasionUrl)
            .map((res: Response) => res.json())
    }

    getAllSkills(): Observable<Response[]> {
        return this.http.get(this.skillUrl)
            .map((res: Response) => res.json())
    }

    getMainIngredient(): Observable<Response[]> {
        return this.http.get(this.mainIngredientUrl)
            .map((res: Response) => res.json())
    }
}