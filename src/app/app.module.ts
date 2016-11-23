import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';

import { SharedModule } from './shared';
import {RecipesComponent} from "./Recipes/recipes.component";
import {DataService} from "./core/services/data.service";
import {RecipeFilterComponent} from "./Recipes/RecipeFilter/recipe-filter.component";
import {RecipeListComponent} from "./Recipes/RecipeList/recipe-list.component";
import {CuisineFilterComponent} from "./Recipes/RecipeFilter/cuisine-filter-component";
import {MainIngredientFilterComponent} from "./Recipes/RecipeFilter/main-ingredient-filter.component";
import {CourseFilterComponent} from "./Recipes/RecipeFilter/course-filter.component";
import {CookTimeFilterComponent} from "./Recipes/RecipeFilter/cook-time-filter.component";
import {OccasionFilterComponent} from "./Recipes/RecipeFilter/occasion-filter.component";

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		BrowserModule,		
		SharedModule,
		routing
	],
	declarations: [
		AppComponent,
		RecipesComponent,
		RecipeFilterComponent,
		RecipeListComponent,
        CuisineFilterComponent,
		MainIngredientFilterComponent,
		CourseFilterComponent,
		CookTimeFilterComponent,
		OccasionFilterComponent
	],
	providers: [
		DataService
	], 
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}
