import {Component} from '@angular/core';
import {ThemeService} from '../../shared/services/ThemeService';
import {NotificationElement} from '../../shared/components/header/notification/header.notification.component';

@Component({
    selector:'gc-admin-header',
    templateUrl:'./admin.header.component.html'
})
export class HeaderComponent
{
    protected notifications:NotificationElement[] = [
        {
            title:'Test',
            message:'Test test test test stet test test',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png',
            posted:'2018/04/20 14:10:22'
        }
    ];
    constructor(private themeService:ThemeService)
    {

    }
    private toggleSidebar()
    {
        this.themeService.toggleSidebar();
    }



}