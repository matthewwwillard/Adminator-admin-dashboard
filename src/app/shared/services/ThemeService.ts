import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ThemeService
{
    public showFullSidebar = new BehaviorSubject<boolean>(false);
    protected sidebarIsToggled:boolean = false;

    public toggleSidebar()
    {
        this.showFullSidebar.next(!this.sidebarIsToggled);
        this.sidebarIsToggled = !this.sidebarIsToggled;
    }
}