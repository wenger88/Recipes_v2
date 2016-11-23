import { Routes, RouterModule }  from '@angular/router';

// no general routes
const APP_ROUTES_PROVIDERS: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    }
];


export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);