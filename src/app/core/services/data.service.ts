/**
 * Created by goran.pavlovski on 11/22/2016.
 */

import {Injectable} from "@angular/core";
import {Recipe, Comments} from "../../shared/interfaces";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class DataService{

    recipesUrl: string = 'http://localhost:3000/recipes';
    commentsUrl: string = 'http://localhost:3000/comments';
    recipe: Recipe[];

    constructor(private _http: Http){}

    GetAll(): Observable<Recipe[]>{
        return this._http.get(this.recipesUrl)
            .map((res: Response) => res.json())
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