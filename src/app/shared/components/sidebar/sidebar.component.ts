import {Component, Input} from '@angular/core';

@Component({
    selector:'gc-sidebar',
    templateUrl:'./sidebar.component.html'
})
export class SidebarComponent
{
    @Input()
    imageHomeLink:string;
    @Input()
    logoImageLink:string = 'assets/static/images/logo.png';
    @Input()
    appname:string = 'Adminator';
    @Input()
    links:any[];
}