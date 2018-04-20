import {Component, Input, ViewEncapsulation} from '@angular/core';

export interface SidebarElements
{
    icon:string;
    color:string;
    name:string;
    href:string;
    children?:SidebarElements[];
}

@Component(
    {
        selector:'sidebar-element',
        templateUrl:'./sidebar-element.component.html',
        encapsulation:ViewEncapsulation.None
    }
)
export class SidebarElementComponent
{
    @Input()
    icon:string;

    @Input()
    color:string;

    @Input()
    name:string;

    @Input()
    href:string;

    @Input()
    children:SidebarElements[];

    @Input()
    isChild:boolean = false;

    protected isOpen:boolean = false;

}