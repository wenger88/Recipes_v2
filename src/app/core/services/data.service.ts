/**
 * Created by goran.pavlovski on 11/22/2016.
 */

import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers, URLSearchParams} from "@angular/http";

import {Recipe, Comments} from "../../shared/interfaces";

import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class DataService {

    recipesUrl: string = API_URL + '/recipes';
    commentsUrl: string = API_URL + '/comments';

    _limit: number = 5;
    _page: number = 1;
    q: string = "";
    recipe: Recipe[];


    constructor(private http: Http) {
    }

    getFilters(search: string ="",page: number, filters: any) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('q', search)
        params.set('_page', page.toString());
        params.set('_limit', this._limit.toString());
        if (typeof filters !== 'undefined') {
            for (let key in filters) {
                if (filters[key]) {
                    params.set(key, filters[key]);
                }
            }
        }
        return params;
    }

    getAllRecipes(search: string = "", page: number = 1, filters?: any): Observable<Recipe[]> {
        return this.http.get(this.recipesUrl, {search: this.getFilters(search, page, filters)})
            .map((res: Response) => {
                console.log(res)
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


    getAllComments(id: number): Observable<Comments[]> {
        // http://localhost:3000/recipes/:id/comments
        // http://localhost:3000/comments/:id { recipeId: id }
        return this.http.get(`${this.recipesUrl}/${id}/comments`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
        /*return this.http.get(this.recipesUrl + '/' + id + '/' + comments)
         .map((res: Response) => res.json())
         .catch(this.handleError);*/
    }

    addComment(body: Object): Observable<Comments> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post(this.commentsUrl, bodyString, options)
            .map((res: Response) => <Comments>res.json())
            .catch(this.handleError)

    }

    updateComment(comment: Comments): Observable<boolean>{
        return this.http.put(this.commentsUrl + '/' + comment.id, comment)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }


    updateRecipe = (itemToUpdate: Recipe): Observable<boolean> => {
        return this.http.put(this.recipesUrl + '/' + itemToUpdate.id, itemToUpdate)
            .map((response: Response) => <Recipe>response.json())
            .catch(this.handleError);
    }

    getSingleRecipe(id: number): Observable<Recipe> {
        return this.http.get(this.recipesUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    addRecipe(body: Object): Observable<Recipe> {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post(this.recipesUrl, bodyString, options)
            .map((res: Response) => <Recipe>res.json())
            .catch(this.handleError)

    }

    deleteRecipe = (id: number): Observable<Response> => {
        return this.http.delete(this.recipesUrl + '/' + id)
            .catch(this.handleError);
    }


    private handleError(error: Response){
        return Observable.throw(error || 'Server error');
    }


}