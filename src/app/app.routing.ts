import { Routes, RouterModule }  from '@angular/router';
import {RecipesComponent} from "./Recipes/recipes.component";
import {RecipeDetailComponent} from "./Recipes/RecipeDetails/recipe-detail.component";
import {RecipeCreateComponent} from "./Recipes/RecipeCreate/recipe-create.component";
import {RecipeEditComponent} from "./Recipes/RecipeEdit/recipe-edit.component";

// no general routes
const APP_ROUTES_PROVIDERS: Routes = [

    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent
    },
    {
        path: 'recipe-details/:id',
        component: RecipeDetailComponent
    },
    {
        path: 'recipe-edit/:id',
        component: RecipeEditComponent
    },
    {
        path: 'create',
        component: RecipeCreateComponent
    }
];


export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);