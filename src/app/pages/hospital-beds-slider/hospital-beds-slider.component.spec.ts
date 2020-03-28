import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBedsSliderComponent } from './hospital-beds-slider.component';

describe('HospitalBedsSliderComponent', () => {
  let component: HospitalBedsSliderComponent;
  let fixture: ComponentFixture<HospitalBedsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalBedsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBedsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
