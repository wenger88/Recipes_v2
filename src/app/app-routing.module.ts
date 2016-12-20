import {Routes, RouterModule}  from '@angular/router';

import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-details/recipe-detail.component";
import {RecipeCreateComponent} from "./recipes/recipe-create/recipe-create.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

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
        path: 'details/:id',
        component: RecipeDetailComponent
    },
    {
        path: 'edit/:id',
        component: RecipeEditComponent
    },
    {
        path: 'create',
        component: RecipeCreateComponent
    }
];


export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);