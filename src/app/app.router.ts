import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./shared/guards/AuthGuard";
import {AdminLogoutComponent} from "./logout/admin.logout.component";

const routes:Routes = [
    {
        path:'admin',
        loadChildren:'app/admin/admin.module#AdminModule',
        canActivate:[AuthGuard]
    },
    {
        path:'login',
        loadChildren:'app/login/login.module#LoginModule'
    },
    {
        path:'logout',
        component:AdminLogoutComponent
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
