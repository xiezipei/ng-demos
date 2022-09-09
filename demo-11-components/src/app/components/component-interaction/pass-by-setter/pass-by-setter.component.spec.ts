import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassBySetterComponent } from './pass-by-setter.component';

describe('PassBySetterComponent', () => {
  let component: PassBySetterComponent;
  let fixture: ComponentFixture<PassBySetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassBySetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassBySetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
