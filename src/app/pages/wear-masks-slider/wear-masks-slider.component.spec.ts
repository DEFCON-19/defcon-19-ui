import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WearMasksSliderComponent } from './wear-masks-slider.component';

describe('WearMasksSliderComponent', () => {
  let component: WearMasksSliderComponent;
  let fixture: ComponentFixture<WearMasksSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearMasksSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearMasksSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
