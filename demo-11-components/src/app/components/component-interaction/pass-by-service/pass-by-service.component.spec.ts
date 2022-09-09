import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassByServiceComponent } from './pass-by-service.component';

describe('PassByServiceComponent', () => {
  let component: PassByServiceComponent;
  let fixture: ComponentFixture<PassByServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassByServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
