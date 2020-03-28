import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationSmokingSliderComponent } from './population-smoking-slider.component';

describe('PopulationSmokingSliderComponent', () => {
  let component: PopulationSmokingSliderComponent;
  let fixture: ComponentFixture<PopulationSmokingSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationSmokingSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationSmokingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
