/**
 * Created by goran.pavlovski on 12/7/2016.
 */

import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'timePipe'
})

export class TimePipe implements PipeTransform{
    transform(value: any, ...args: any[]): any {

        let minutes = 60;
        let hour = 0;
        let recipeTime = '';
        hour = Math.floor(value / minutes);

        minutes = value - (hour * minutes);

        if (hour <= 0){
            recipeTime = minutes + "m";
        } else{
            recipeTime = hour + "h " + minutes + "m";
        }

        return recipeTime;
    }

}