/**
 * Created by goran.pavlovski on 11/22/2016.
 */

import {Injectable} from "@angular/core";
import {Recipe, Comments, RecipeType, Cuisine, Course, SkillLevel, Occasion} from "../../shared/interfaces";
import {Http, Response, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class DataService{

    recipesUrl: string = 'http://localhost:3000/recipes';
    commentsUrl: string = 'http://localhost:3000/comments';
    recipeTypeUrl:string = 'http://localhost:3000/recipeType';
    cuisineUrl: string = 'http://localhost:3000/cuisine';
    courseUrl: string = 'http://localhost:3000/course';
    occasionUrl: string = 'http://localhost:3000/occasion';
    skillUrl: string = 'http://localhost:3000/skillLevel';
    mainIngredientUrl: string = 'http://localhost:3000/mainIngredient';
    imagesUrl: string = 'http://localhost:3000/images';
    _limit: number = 5;
    _page: number = 1;
    recipe: Recipe[];


    constructor(private _http: Http){}

    /*GetAll(): Observable<Recipe[]>{
        return this._http.get(this.recipesUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }*/

    getFilters(page: number, filters: any){
        let params: URLSearchParams = new URLSearchParams();
        params.set('_page', page.toString());
        params.set('_limit', this._limit.toString());
        if (typeof filters !== 'undefined') {
            //params.set('_page', '1');
            for ( let key in filters ) {
                if (filters[key]) {
                    params.set(key, filters[key]);
                }
            }
        }
        return params;
    }

    GetAll(page: number = 1, filters?: any): Observable<Recipe[]>{
        //page = this.getFilters().
        return this._http.get(this.recipesUrl, { search: this.getFilters(page, filters) })
            .map((res: Response) => {
                let response = res.json();
                if (res.headers.get('X-Total-Count')) {
                    response.meta = {
                        totalCount: res.headers.get('X-Total-Count'),
                    };
                }
                return response;
            })
            .catch(this.handleError);
    }


    getAllComments(id: number): Observable<Comments[]>{
        // http://localhost:3000/recipes/:id/comments
        // http://localhost:3000/comments/:id { recipeId: id }
        return this._http.get(`${this.recipesUrl}/${id}/comments`)
         .map((res: Response) => res.json())
         .catch(this.handleError);
        /*return this._http.get(this.recipesUrl + '/' + id + '/' + comments)
            .map((res: Response) => res.json())
            .catch(this.handleError);*/
    }

    getAllRecipeTypes(): Observable<Response[]>{
        return this._http.get(this.recipeTypeUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    getAllCuisines(): Observable<Response[]>{
        return this._http.get(this.cuisineUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    getAllCourses(): Observable<Response[]>{
        return this._http.get(this.courseUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    getAllOccasions(): Observable<Response[]>{
        return this._http.get(this.occasionUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    getAllSkills(): Observable<Response[]>{
        return this._http.get(this.skillUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    getMainIngredient(): Observable<Response[]>{
        return this._http.get(this.mainIngredientUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }


    addComment(body: Object): Observable<Comments>{
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.commentsUrl, bodyString, options)
            .map((res: Response) => <Comments>res.json())
            .catch(this.handleError)

    }




    GetSingle(id: number): Observable<Recipe>{
        return this._http.get(this.recipesUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

/*    getSingleComment(id: number): Observable<Comments>{
        return this._http.get(this.commentsUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }*/

    AddRecipe(body: Object): Observable<Recipe>{
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.recipesUrl, bodyString, options)
            .map((res: Response) => <Recipe>res.json())
            .catch(this.handleError)

    }

    public Update = (itemToUpdate: Recipe): Observable<boolean> => {
        return this._http.put(this.recipesUrl + '/' + itemToUpdate.id, itemToUpdate)
            .map((response: Response) => <Recipe>response.json())
            .catch(this.handleError);
    }

    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.recipesUrl + '/' + id)
            .catch(this.handleError);
    }


    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }





}