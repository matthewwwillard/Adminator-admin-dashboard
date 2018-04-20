import { Component } from '@angular/core';
import {ThemeService} from '../shared/services/ThemeService';


@Component({
    selector: 'gc-admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent {
    private showFullSidebar = true;
    constructor(private themeService:ThemeService)
    {
        themeService.showFullSidebar.subscribe((res)=>{
            this.showFullSidebar = res;
        })
    }
}