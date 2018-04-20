import {DashboardComponent} from './dashboard/admin.dashboard.component';
import {AdminComponent} from './admin.component';
import {NgModule} from '@angular/core';
import {AdminRoutingComponent, components} from './admin.router';
import {CommonModule} from '@angular/common';
import {SidebarElementComponent} from '../shared/components/sidebar/sidebar-element/sidebar-element.component';
import {SidebarComponent} from '../shared/components/sidebar/sidebar.component';
import {HeaderModule} from '../shared/components/header/header.module';

@NgModule({
    declarations:[components,SidebarElementComponent,SidebarComponent],
    imports:[
        CommonModule,
        AdminRoutingComponent,
        HeaderModule
    ]
})
export class AdminModule
{

}

