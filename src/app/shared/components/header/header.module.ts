import {NgModule} from '@angular/core';
import {HeaderSearchComponent} from './search/header.search.component';
import {CommonModule} from '@angular/common';
import {HeaderUserComponent} from './user/header.user.component';
import {RouterModule} from '@angular/router';
import {HeaderNotificationComponent} from './notification/header.notification.component';

@NgModule(
    {
        declarations:[
            HeaderSearchComponent,
            HeaderUserComponent,
            HeaderNotificationComponent
        ],
        imports:[CommonModule,RouterModule],
        exports:[
            HeaderSearchComponent,
            HeaderUserComponent,
            HeaderNotificationComponent
        ]
    }
)
export class HeaderModule
{}