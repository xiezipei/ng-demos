import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStylesComponent } from './component-styles.component';

describe('ComponentStylesComponent', () => {
  let component: ComponentStylesComponent;
  let fixture: ComponentFixture<ComponentStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentStylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
