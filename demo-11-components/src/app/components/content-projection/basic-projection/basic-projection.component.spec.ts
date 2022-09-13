import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProjectionComponent } from './basic-projection.component';

describe('BasicProjectionComponent', () => {
  let component: BasicProjectionComponent;
  let fixture: ComponentFixture<BasicProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
