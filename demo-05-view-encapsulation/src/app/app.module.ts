import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoEncapsulationComponent } from './no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    EmulatedEncapsulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/