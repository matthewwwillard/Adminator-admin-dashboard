import {Component, Input} from '@angular/core';
import {ThemeService} from "../../services/ThemeService";

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
    @Input()
    collapse:boolean = false;

  constructor(private theme:ThemeService) {

  }

  toggleBar()
  {
    this.theme.toggleSidebar();
  }

}
