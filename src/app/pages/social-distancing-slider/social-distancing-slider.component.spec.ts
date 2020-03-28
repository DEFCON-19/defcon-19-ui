import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialDistancingSliderComponent } from './social-distancing-slider.component';

describe('SocialDistancingSliderComponent', () => {
  let component: SocialDistancingSliderComponent;
  let fixture: ComponentFixture<SocialDistancingSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialDistancingSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialDistancingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
