import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleHooksParentComponent } from './components/lifecycle-hooks-parent/lifecycle-hooks-parent.component';

@NgModule({
  declarations: [AppComponent, LifecycleHooksComponent, LifecycleHooksParentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
