import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes:Routes = [
    {
        path:'admin',
        loadChildren:'app/admin/admin.module#AdminModule'
    },
    {
        path:'login',
        loadChildren:'app/login/login.module#LoginModule'
    },
    {
        path:'**',
        redirectTo:'login'
    }
];


@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: []
})
export class MainRouterModule
{
}