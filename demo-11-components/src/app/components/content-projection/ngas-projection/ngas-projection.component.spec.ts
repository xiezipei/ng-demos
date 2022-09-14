import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgasProjectionComponent } from './ngas-projection.component';

describe('NgasProjectionComponent', () => {
  let component: NgasProjectionComponent;
  let fixture: ComponentFixture<NgasProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgasProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgasProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
