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
import { PassByViewchildComponent } from './components/component-interaction/pass-by-viewchild/pass-by-viewchild.component';
import { PassByServiceComponent } from './components/component-interaction/pass-by-service/pass-by-service.component';
import { AstronautComponent } from './components/component-interaction/pass-by-service/astronaut/astronaut.component';
import { ComponentStylesComponent } from './components/component-styles/component-styles.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { BasicProjectionComponent } from './components/content-projection/basic-projection/basic-projection.component';
import { MultiSlotProjectionComponent } from './components/content-projection/multi-slot-projection/multi-slot-projection.component';
import {
  ConditionalProjectionComponent,
  ZippyContentDirective,
  ZippyToggleDirective,
} from './components/content-projection/conditional-projection/conditional-projection.component';
import { NgasProjectionComponent } from './components/content-projection/ngas-projection/ngas-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    LifecycleHooksParentComponent,
    ViewEncapsulationComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    ComponentInteractionComponent,
    PassByInputComponent,
    PassBySetterComponent,
    PassByNgonchangesComponent,
    PassByEmitsComponent,
    PassByLocalvarComponent,
    PassByViewchildComponent,
    PassByServiceComponent,
    AstronautComponent,
    ComponentStylesComponent,
    ContentProjectionComponent,
    BasicProjectionComponent,
    MultiSlotProjectionComponent,
    ConditionalProjectionComponent,
    ZippyToggleDirective,
    ZippyContentDirective,
    NgasProjectionComponent,
  ],
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
