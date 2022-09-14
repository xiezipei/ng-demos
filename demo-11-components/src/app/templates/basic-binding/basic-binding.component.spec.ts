import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBindingComponent } from './basic-binding.component';

describe('BasicBindingComponent', () => {
  let component: BasicBindingComponent;
  let fixture: ComponentFixture<BasicBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
