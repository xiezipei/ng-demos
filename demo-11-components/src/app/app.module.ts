import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleHooksParentComponent } from './components/lifecycle-hooks-parent/lifecycle-hooks-parent.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { NoEncapsulationComponent } from './components/view-encapsulation/no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './components/view-encapsulation/emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './components/view-encapsulation/shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { PassByInputComponent } from './components/component-interaction/pass-by-input/pass-by-input.component';
import { PassBySetterComponent } from './components/component-interaction/pass-by-setter/pass-by-setter.component';
import { PassByNgonchangesComponent } from './components/component-interaction/pass-by-ngonchanges/pass-by-ngonchanges.component';
import { PassByEmitsComponent } from './components/component-interaction/pass-by-emits/pass-by-emits.component';
import { PassByLocalvarComponent } from './components/component-interaction/pass-by-localvar/pass-by-localvar.component';

@NgModule({
  declarations: [AppComponent, LifecycleHooksComponent, LifecycleHooksParentComponent, ViewEncapsulationComponent, NoEncapsulationComponent, EmulatedEncapsulationComponent, ShadowDomEncapsulationComponent, ComponentInteractionComponent, PassByInputComponent, PassBySetterComponent, PassByNgonchangesComponent, PassByEmitsComponent, PassByLocalvarComponent],
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
