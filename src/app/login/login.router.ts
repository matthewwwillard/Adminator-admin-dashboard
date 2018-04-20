import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';

export const components = [
    LoginComponent
];
const routes:Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'**',
        redirectTo:''
    }
];
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class LoginRouter
{}