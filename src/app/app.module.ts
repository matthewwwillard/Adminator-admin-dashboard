import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ThemeService} from './shared/services/ThemeService';
import {MainRouterModule} from './app.router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      RouterModule,
      MainRouterModule,
      CommonModule,

  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
