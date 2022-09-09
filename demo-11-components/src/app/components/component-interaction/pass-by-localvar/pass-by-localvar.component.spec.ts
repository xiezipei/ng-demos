import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassByLocalvarComponent } from './pass-by-localvar.component';

describe('PassByLocalvarComponent', () => {
  let component: PassByLocalvarComponent;
  let fixture: ComponentFixture<PassByLocalvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassByLocalvarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassByLocalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
