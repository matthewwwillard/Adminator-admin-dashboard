import {Component, ElementRef, HostListener, Input, ViewEncapsulation} from '@angular/core';
import {CurrentUserService} from "../../../services/CurrentUserService";

export interface UserInfo
{
    id:number;
    email:string;
    firstname:string;
    lastname:string;
    profileImg:string;
}
export interface UserLinks
{
    icon:string;
    href:string;
    name:string;
}

@Component(
    {
        selector:'gc-header-user',
        templateUrl:'./header.user.component.html',
        encapsulation:ViewEncapsulation.None
    }
)
export class HeaderUserComponent
{
    @Input()
    userinfo:UserInfo = {
        id:0,
        email:'example@example.com',
        firstname:'John',
        lastname:'Doe',
        profileImg:'http://images.clipartpanda.com/pol-clipart-toy_rocket_christmas_xmas_electronics-1979px.png'
    };
    @Input()
    links:UserLinks[] = [
        // {
        //     icon:"ti-settings",
        //     href:"/settings",
        //     name:"Settings"
        // },
        // {
        //     icon:"ti-user",
        //     href:"/profile",
        //     name:"Profile"
        // }
    ];
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
    public isOpen:boolean = false;
    constructor(private elementRef:ElementRef, private currentUser:CurrentUserService){
      this.userinfo = this.currentUser.GetCurrentUserAsUserInfoObject();
    }
}
