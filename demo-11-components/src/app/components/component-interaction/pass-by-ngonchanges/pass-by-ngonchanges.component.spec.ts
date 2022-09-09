import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassByNgonchangesComponent } from './pass-by-ngonchanges.component';

describe('PassByNgonchangesComponent', () => {
  let component: PassByNgonchangesComponent;
  let fixture: ComponentFixture<PassByNgonchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassByNgonchangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassByNgonchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
