import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from "../../Recipes/recipes.component";


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
	{
		path: 'recipes',
		component: RecipesComponent
	},
	{
		path: '',
		redirectTo: '/recipes',
		pathMatch: 'full'
	}
];

export const appHeaderRouting: ModuleWithProviders = RouterModule.forChild(appHeaderRoutes);