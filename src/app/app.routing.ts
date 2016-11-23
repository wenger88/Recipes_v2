import { Routes, RouterModule }  from '@angular/router';
import {RecipesComponent} from "./Recipes/recipes.component";
import {RecipeDetailComponent} from "./Recipes/RecipeDetails/recipe-detail.component";
import {RecipeCreateComponent} from "./Recipes/RecipeCreate/recipe-create.component";

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
        path: 'create',
        component: RecipeCreateComponent
    }
];


export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);