/**
 * Created by goran.pavlovski on 11/22/2016.
 */

import {Injectable} from "@angular/core";
import {Recipe} from "../../shared/interfaces";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class DataService{

    recipesUrl: string = 'http://localhost:3000/recipes';
    recipe: Recipe[];

    constructor(private _http: Http){}

    GetAll(): Observable<Recipe[]>{
        return this._http.get(this.recipesUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    GetSingle(id: number): Observable<Recipe>{
        return this._http.get(this.recipesUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }


    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }





}