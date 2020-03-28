import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationObeseSliderComponent } from './population-obese-slider.component';

describe('PopulationObeseSliderComponent', () => {
  let component: PopulationObeseSliderComponent;
  let fixture: ComponentFixture<PopulationObeseSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationObeseSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationObeseSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
