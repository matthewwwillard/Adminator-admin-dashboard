import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/admin.dashboard.component';
import {SidebarComponent} from './sidebar/admin.sidebar.component';
import {AdminComponent} from './admin.component';
import {HeaderComponent} from './header/admin.header.component';
import {FooterComponent} from './footer/admin.footer.component';
import {CommonModule} from '@angular/common';

const routes:Routes = [
    {
        path:'',
        component:AdminComponent,
        children:[
                {
                    path:'',
                    pathMatch:'full',
                    redirectTo:'dashboard'
                },
                {
                    path:'dashboard',
                    component:DashboardComponent
                },
                {
                    path:'**',
                    redirectTo:'dashboard'
                }
            ]
    },

];
export const components = [
    DashboardComponent,
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]

})
export class AdminRoutingComponent
{
}