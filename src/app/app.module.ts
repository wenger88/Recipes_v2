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
import {RecipeDetailComponent} from "./Recipes/RecipeDetails/recipe-detail.component";
import {RecipeEditComponent} from "./Recipes/RecipeEdit/recipe-edit.component";
import {RecipeCreateComponent} from "./Recipes/RecipeCreate/recipe-create.component";
import {AccordionModule} from 'primeng/primeng';
import {RatingModule} from 'primeng/primeng';
import {RecipeCommentsComponent} from "./Recipes/RecipeDetails/RecipeComments/recipe-comments.component";
import {RecipeSingleCommentComponent} from "./Recipes/RecipeDetails/RecipeComments/recipe-single-comment.component";
import {RecipeItemComponent} from "./Recipes/RecipeList/recipe-tem.component";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {FileUploadComponent} from "./Recipes/FileUpload/file-upload.component";
import {Ng2CloudinaryModule} from "ng2-cloudinary";
import {CloudinaryImageComponent} from "./Recipes/cloudinary-image.component/cloudinary-image.component";
import {Ng2PaginationModule} from "ng2-pagination";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		BrowserModule,		
		SharedModule,
		routing,
        AccordionModule,
        RatingModule,
		FileUploadModule,
        Ng2CloudinaryModule,
		Ng2PaginationModule,
		NgbModule
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
		OccasionFilterComponent,
		RecipeDetailComponent,
		RecipeEditComponent,
        RecipeCreateComponent,
		RecipeCommentsComponent,
        RecipeSingleCommentComponent,
		RecipeItemComponent,
        FileUploadComponent,
        CloudinaryImageComponent,
	],
	providers: [
		DataService
	], 
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}
