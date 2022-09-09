import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassByViewchildComponent } from './pass-by-viewchild.component';

describe('PassByViewchildComponent', () => {
  let component: PassByViewchildComponent;
  let fixture: ComponentFixture<PassByViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassByViewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassByViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
