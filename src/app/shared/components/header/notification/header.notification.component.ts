import {Component, ElementRef, HostListener, Input} from '@angular/core';
import * as moment from 'moment';

export interface NotificationElement {
    image:string;
    title:string;
    message:string;
    posted?:string;
}

@Component(
    {
        selector:'gc-header-notification',
        templateUrl:'./header.notification.component.html'
    }
)
export class HeaderNotificationComponent
{
    @Input()
    icon:string = 'ti-bell';

    @Input()
    title:string = 'Notification';

    @Input()
    elements:NotificationElement[] = [];

    @HostListener('document:click', ['$event'])
    handleClick(event){
        let clickedComponent = event.target;
        let inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if(inside){

        }else{
            this.isOpen = false;
        }
    }

    protected isOpen:boolean = false;

    protected prettyTime(time)
    {
        let now = moment();
        let created = moment(time);

        let minutes = now.diff(created, 'minutes');
        let hours = now.diff(created, 'hours');
        let days = now.diff(created, 'days');
        let weeks = now.diff(created, 'weeks');
        let months = now.diff(created, 'months');
        let years = now.diff(created, 'years');

        let final = minutes + ' minute(s) ago';

        if(minutes > hours && hours >= 1)
            final = hours + ` hour(s) ago`;
        if(hours > days && days >= 1)
            final = days + ' day(s) ago';
        if(days > weeks && weeks >= 1)
            final = weeks + ' week(s) ago';
        if(weeks > months && months >= 1)
            final = months + ' month(s) ago';
        if(months > years && years >= 1)
            final = years + ' year(s) ago';


        return (final)

    }

    constructor(private elementRef:ElementRef){}
}