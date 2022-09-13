import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotProjectionComponent } from './multi-slot-projection.component';

describe('MultiSlotProjectionComponent', () => {
  let component: MultiSlotProjectionComponent;
  let fixture: ComponentFixture<MultiSlotProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSlotProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSlotProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
