import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTemplateComponent } from './svg-template.component';

describe('SvgTemplateComponent', () => {
  let component: SvgTemplateComponent;
  let fixture: ComponentFixture<SvgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
