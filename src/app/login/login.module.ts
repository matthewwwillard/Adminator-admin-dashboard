import {NgModule} from '@angular/core';
import {components, LoginRouter} from './login.router';
import {LoginService} from "./login.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule(
    {
        declarations:components,
        imports:[
          FormsModule,
          LoginRouter
        ],
        providers:[LoginService]
    }
)
export class LoginModule
{

}
