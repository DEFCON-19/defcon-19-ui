import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationOver65SliderComponent } from './population-over65-slider.component';

describe('PopulationOver65SliderComponent', () => {
  let component: PopulationOver65SliderComponent;
  let fixture: ComponentFixture<PopulationOver65SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationOver65SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationOver65SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
