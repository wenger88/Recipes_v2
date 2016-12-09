import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from './app-routing.module';

import {AppComponent}   from './app.component';

import {SharedModule} from './shared';
import {RecipesComponent} from "./Recipes/recipes.component";
import {DataService} from "./core/services/data.service";
import {RecipeFilterComponent} from "./Recipes/RecipeFilter/recipe-filter.component";
import {RecipeListComponent} from "./Recipes/RecipeList/recipe-list.component";
import {CuisineFilterComponent} from "./Recipes/RecipeFilter/recipe-cuisine-filter/cuisine-filter-component";
import {MainIngredientFilterComponent} from "./Recipes/RecipeFilter/recipe-ingredient-filter/main-ingredient-filter.component";
import {CourseFilterComponent} from "./Recipes/RecipeFilter/recipe-course-filter/course-filter.component";
import {CookTimeFilterComponent} from "./Recipes/RecipeFilter/recipe-readyIn-filter/ready-filter.component";
import {OccasionFilterComponent} from "./Recipes/RecipeFilter/recipe-occasion-filter/occasion-filter.component";
import {RecipeDetailComponent} from "./Recipes/RecipeDetails/recipe-detail.component";
import {RecipeEditComponent} from "./Recipes/recipe-edit/recipe-edit.component";
import {RecipeCreateComponent} from "./Recipes/recipe-create/recipe-create.component";
import {AccordionModule} from 'primeng/primeng';
import {RatingModule} from 'primeng/primeng';
import {RecipeCommentsComponent} from "./Recipes/RecipeDetails/recipe-comments/recipe-comments.component";
import {RecipeSingleCommentComponent} from "./Recipes/RecipeDetails/recipe-comments/recipe-single-comment.component";
import {RecipeItemComponent} from "./Recipes/RecipeList/recipe-item/recipe-item.component";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {Ng2CloudinaryModule} from "ng2-cloudinary";
import {Ng2PaginationModule} from "ng2-pagination";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConvertMinutesPipe} from "./shared/convert-minutes.pipe";

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
        NgbModule.forRoot(),

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
        ConvertMinutesPipe
    ],
    providers: [
        DataService
    ],
    exports: [],
    bootstrap: [AppComponent],
})

export class AppModule {
}
