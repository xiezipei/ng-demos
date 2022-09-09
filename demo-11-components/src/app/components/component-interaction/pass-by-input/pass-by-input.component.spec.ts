import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassByInputComponent } from './pass-by-input.component';

describe('PassByInputComponent', () => {
  let component: PassByInputComponent;
  let fixture: ComponentFixture<PassByInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassByInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassByInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
