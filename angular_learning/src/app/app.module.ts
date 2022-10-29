import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './module-1/component1/component1.component';
import { Component2Component } from './module-1/component2/component2.component';
import { Component3Component } from './module-1/component3/component3.component';
import { Component4Component } from './module-1/component4/component4.component';
import { Component5Component } from './module-1/component5/component5.component';
import { Component6Component } from './module-1/component6/component6.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    Component6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
