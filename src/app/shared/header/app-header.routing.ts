import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from "../../Recipes/recipes.component";
import {RecipeDetailComponent} from "../../Recipes/RecipeDetails/recipe-detail.component";
import {RecipeCreateComponent} from "../../Recipes/RecipeCreate/recipe-create.component";


const appHeaderRoutes: Routes = [
	/*{
		path: 'puppies',
		component: PuppiesComponent
	},
	{
		path: 'otters',
		component: OttersComponent
	},
	{
		path: 'kittens',
		component: KittensComponent
	},
	{
		path: '',
		redirectTo: '/puppies',
		pathMatch: 'full'
	}*/
	/*{
		path: 'recipes',
		component: RecipesComponent
	},
	{
		path: ':id',
		component: RecipeDetailComponent
	},
	{
		path: 'create',
		component: RecipeCreateComponent
	},

	{
		path: '',
		redirectTo: '/recipes',
		pathMatch: 'full'
	}*/
];

export const appHeaderRouting: ModuleWithProviders = RouterModule.forChild(appHeaderRoutes);