import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';

@Component(
    {
        selector:'gc-header-search',
        templateUrl:'./header.search.component.html',
        encapsulation:ViewEncapsulation.None
    }
)
export class HeaderSearchComponent
{
    @Output()
    searchValue:EventEmitter<string> = new EventEmitter<string>();

    protected isOpen:boolean = false;
    protected value:string = '';

    onKey(event:any)
    {
        this.value += event.target.value;
        this.searchValue.emit(this.value);
    }
    toggleSearch()
    {
        this.isOpen = !this.isOpen;
        this.value = '';
    }
}