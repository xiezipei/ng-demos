import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomElementsComponent } from './custom-elements.component';

describe('CustomElementsComponent', () => {
  let component: CustomElementsComponent;
  let fixture: ComponentFixture<CustomElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
