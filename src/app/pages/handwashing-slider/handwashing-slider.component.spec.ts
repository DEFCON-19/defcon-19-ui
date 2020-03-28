import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwashingSliderComponent } from './handwashing-slider.component';

describe('HandwashingSliderComponent', () => {
  let component: HandwashingSliderComponent;
  let fixture: ComponentFixture<HandwashingSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandwashingSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwashingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
