import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassByEmitsComponent } from './pass-by-emits.component';

describe('PassByEmitsComponent', () => {
  let component: PassByEmitsComponent;
  let fixture: ComponentFixture<PassByEmitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassByEmitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassByEmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
