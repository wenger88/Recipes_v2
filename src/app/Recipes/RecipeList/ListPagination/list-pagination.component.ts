/**
 * Created by goran.pavlovski on 12/2/2016.
 */


import {Component, OnInit, Input} from "@angular/core";
import {Observable} from "rxjs";

interface IServerResponse {
    items: string[];
    total: number;
}

@Component({
    selector: 'list-paginate',
    template: require('./list-pagination.component.html'),
    styles: [require('./list-pagination.component.scss')]
})

export class ListPaginationComponent implements OnInit{

    @Input('recipes') meals: string[] = [];
    asyncMeals: Observable<string[]>;
    p: number = 1;
    total: number;
    loading: boolean;

    constructor(){}

    ngOnInit() {
        this.getPage(1);
    }

    getPage(page: number) {
        this.loading = true;
        this.asyncMeals = serverCall(this.meals, page)
            .do(res => {
                this.total = res.total;
                this.p = page;
                this.loading = false;
            })
            .map(res => res.items);
    }
}

/**
 * Simulate an async HTTP call with a delayed observable.
 */
function serverCall(meals: string[], page: number): Observable<IServerResponse> {
    const perPage = 10;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return Observable
        .of({
            items: meals.slice(start, end),
            total: 100
        }).delay(1000);



}