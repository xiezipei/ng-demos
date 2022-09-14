import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-custom-elements',
  templateUrl: './custom-elements.component.html',
  styleUrls: ['./custom-elements.component.scss'],
})
export class CustomElementsComponent implements OnInit {
  constructor(injector: Injector, public popup: PopupService) {
    const PopupElement = createCustomElement(PopupComponent, { injector });
    customElements.define('popup-element', PopupElement);
  }

  ngOnInit(): void {}
}
