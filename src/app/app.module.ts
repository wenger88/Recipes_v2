import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from './app-routing.module';

import {AppComponent}   from './app.component';

import {SharedModule} from './shared';
import {RecipesComponent} from "./recipes/recipes.component";
import {DataService} from "./core/services/data.service";
import {RecipeFilterComponent} from "./recipes/recipe-filter/recipe-filter.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {CuisineFilterComponent} from "./recipes/recipe-filter/recipe-cuisine-filter/cuisine-filter-component";
import {MainIngredientFilterComponent} from "./recipes/recipe-filter/recipe-ingredient-filter/main-ingredient-filter.component";
import {CourseFilterComponent} from "./recipes/recipe-filter/recipe-course-filter/course-filter.component";
import {CookTimeFilterComponent} from "./recipes/recipe-filter/recipe-readyIn-filter/ready-filter.component";
import {OccasionFilterComponent} from "./recipes/recipe-filter/recipe-occasion-filter/occasion-filter.component";
import {RecipeDetailComponent} from "./recipes/recipe-details/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeCreateComponent} from "./recipes/recipe-create/recipe-create.component";
import {AccordionModule} from 'primeng/primeng';
import {RatingModule} from 'primeng/primeng';
import {RecipeCommentsComponent} from "./recipes/recipe-details/recipe-comments/recipe-comments.component";
import {RecipeSingleCommentComponent} from "./recipes/recipe-details/recipe-comments/recipe-single-comment.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {Ng2CloudinaryModule} from "ng2-cloudinary";
import {Ng2PaginationModule} from "ng2-pagination";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConvertMinutesPipe} from "./shared/convert-minutes.pipe";
import {RecipeService} from "./recipes/recipes.service";
import {RecipeCarouselComponent} from "./recipes/recipe-details/recipe-carousel/recipe-carousel.component";

@NgModule({
    imports: [
        ReactiveFormsModule,
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
        ConvertMinutesPipe,
        RecipeCarouselComponent
    ],
    providers: [
        DataService,
        RecipeService
    ],
    exports: [],
    bootstrap: [AppComponent],
})

export class AppModule {
}
