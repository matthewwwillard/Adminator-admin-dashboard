import {NgModule} from '@angular/core';
import {components, LoginRouter} from './login.router';

@NgModule(
    {
        declarations:components,
        imports:[LoginRouter]
    }
)
export class LoginModule
{}